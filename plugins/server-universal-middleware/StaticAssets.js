const assert_internal = require('reassert/internal');
const config = require('@brillout/reconfig');
const pathModule = require('path');
const crypto = require('crypto');
const parseUrl = require('@brillout/parse-url');
const fs = require('fs-extra');
const Mimos = require('mimos');
const mimos = new Mimos();

module.exports = StaticAssets;

// We set a high priority as every URL static asset URL contains a hash  has its hash in its URL
// we certainly want static assests to be served for the universal adapters
StaticAssets.executionPriority = 1000*1000;

async function StaticAssets(requestObject) {
    const {staticAssetsDir, pagesNotBuilt} = config.goldpage.getBuildInfo();

    if( pagesNotBuilt ) {
      return null;
    }

    const {url} = requestObject;
    const {pathname} = parseUrl(url);

    const filePath = getFilePath({staticAssetsDir, pathname});

    const fileContent = await getFileContent(filePath);

    if( fileContent===null ) {
        return null;
    }

    const contentTypeHeader = getContentTypeHeader(filePath);
    const cacheHeader = getCacheHeader(filePath, fileContent);

    return {
        body: fileContent,
        headers: [
            contentTypeHeader,
            cacheHeader,
        ],
    };
}

function getContentTypeHeader(filePath) {
    const mime = mimos.path(filePath);

    const contentTypeHeader = {
        name: 'Content-Type',
        value: mime && mime.type || 'application/octet-stream',
    };

    return contentTypeHeader;
}

function getCacheHeader(filePath, fileContent) {
    const urlCtonainsHash = /\.hash_[a-zA-Z0-9]+\./.test(filePath);

    if( ! urlCtonainsHash ) {
        return {
            name: 'ETag',
            value: '"'+computeHash(fileContent)+'"',
        };
    } else {
        // Max value for `max-age` is one year:
        //   - http://stackoverflow.com/questions/7071763/max-value-for-cache-control-header-in-http
        // Support for `immutable`:
        //   - http://stackoverflow.com/questions/41936772/which-browsers-support-cache-control-immutable
        return {
            name: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
        };
    }
}

function getFilePath({staticAssetsDir, pathname}) {
    let filename;
    if( pathname.startsWith('/.well-known/acme-challenge/') ) {
      // letsencrypt.org SSL challenge
      filename = pathname;
    } else if(pathname.endsWith('/')) {
      // `pathname` is a directory path
      filename = pathname+'index.html';
    } else if(pathname.split('/').slice(-1)[0].split('.').length===1){
      // `pathname` doens't end with a file suffix
      filename = pathname+'.html';
    } else {
      filename = pathname;
    }

    assert_internal(filename.startsWith('/'));
    const filePath = pathModule.join(staticAssetsDir, filename);

    // Security: Make sure that `filePath` is confined within `staticAssetsDir`
    assert_internal(filePath.startsWith(staticAssetsDir));

    return filePath;
}

// TODO-LATER;
//  - Consider caching `getFileContent`
//    - Possible in dev?
//    - For sure in prod?
async function getFileContent(filePath) {
    try {
        const fileContent = await fs.readFile(filePath);
        return fileContent;
    }
    catch(err) {
        if( err.code === 'ENOENT' ) {
            return null;
        }
        throw err;
    }
}

function computeHash(str) {
    return (
        crypto
        .createHash('md5')
        .update(str, 'utf8')
        .digest('base64')
        .replace(/=+$/, '')
    );
}
