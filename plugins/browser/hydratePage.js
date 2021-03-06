const browserConfig = require('@brillout/browser-config');
const hydratePage__repage = require('@brillout/repage/hydratePage');

module.exports = hydratePage;

async function hydratePage() {
    const {renderPageToDom, router, pageConfig} = browserConfig;

    await (
        hydratePage__repage({
            pageConfig,
            router,
            renderPageToDom,
        })
    );
}
