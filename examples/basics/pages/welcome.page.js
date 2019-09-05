import React, {useEffect, useState} from 'react';

export default {
  route: '/',
  view: () => (
    <div>
      Welcome to Goldpage.
      <Time/>
      <br/>
      More:
      <ul>
        <Page pathname="/counter"/>
        <Page pathname="/hello/jon"/>
        <Page pathname="/repos/brillout"/>
      </ul>
    </div>
  ),
  renderToHtml: true,
};

function Time() {
  const getTime = () => new Date().toLocaleTimeString();

  const [currentTime, setTime] = useState(getTime());

  useEffect(() => {
    const timeout = setInterval(
      () => setTime(getTime()),
      1000/60 // 60 FPS
    );
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      The time is: <span>{currentTime}</span>
    </div>
  );
}

function Page({pathname}) {
  return <li><a href={pathname}>{pathname}</a></li>;
}
