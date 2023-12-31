import './App.css';
import { useState, useEffect } from 'react';

//const newsFile = "https://newsdatafiles.blob.core.windows.net/news/news.json";
const newsFile = "https://pub-cc32a687251a4596b07817082fd4f88a.r2.dev/news.json";

function App() {
  const hostingApp = (process.env.REACT_APP_HOSTING_APP === undefined)?"Unknown":process.env.REACT_APP_HOSTING_APP;
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getNewsWithFetch();
  }, []);

  const getNewsWithFetch = async () => {  
    const response = await fetch(newsFile);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>A simple React.js site built
          by <a className="App-link" href="https://ryanswanstrom.com">Ryan Swanstrom </a> 
          <br/>hosted on {hostingApp}
          </h2>
      </header>
        <h3 className="info-item">Recent News for '{userData.query}'</h3> 
        {userData?.articles?.map((obj, index) => (
          <article> 
            <h4>{obj?.title} </h4>
            <p>{obj?.notes} <a href={obj?.url}>...read more</a></p> 
          </article>))}
      
      <article>        
        <p>
          See this same app on: 
            <a href="https://news-vercel.ryanswanstrom.com"> Vercel</a> | 
            <a href="https://news-render.ryanswanstrom.com"> Render</a> |
            <a href="https://news-kinsta.ryanswanstrom.com"> Kinsta</a> |              
            <a href="https://news-azure.ryanswanstrom.com"> Azure</a> |              
            <a href="https://news-netlify.ryanswanstrom.com"> Netlify</a> |              
            <a href="https://news-digitalocean.ryanswanstrom.com"> Digital Ocean</a> |              
            <a href="https://news-cloudflare.ryanswanstrom.com"> Cloudflare Pages</a> 
        </p>
      </article>
    </div>
  );
}

export default App;