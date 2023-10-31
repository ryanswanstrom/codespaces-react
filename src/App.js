import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Hello');
  const messageText = useRef();
  const links = [
    {
    title: 'A great article',
    desc: 'a longer description',
    url: 'https://www.ryanswantrom.com'
    },
    {
    title: 'The biggest news',
    desc: 'a short description',
    url: 'https://www.ryanswantrom.com'
    }
  ]

  function NewsLinks(e) {
    e.preventDefault();
    setMessage(messageText.current.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="logo192.png" className="App-logo" alt="logo" />
        <p>
          A simple React site built
          by <a className="App-link" href="https://ryanswanstrom.com">Ryan Swanstrom</a>
        </p>
      </header>
      <article>
        <form onSubmit={NewsLinks}>
          <input type='text' ref={messageText} placeholder='What news do you want to find?'/>
          <input type='submit' value='Click it!' />
        </form>
        <div>
          <p>
            {message}
          </p>
        </div>
        {links.map(link => (<div><h3>{link?.title}</h3> <p>{link?.desc} {message}</p><p><a href={link?.url}>more info</a></p> </div>))}  
        
      </article>
    </div>
  );
}

export default App;
