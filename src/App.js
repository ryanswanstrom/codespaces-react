import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Hello');
  const messageText = useRef();

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
        <ol>
          <li>Link 1</li>
          <li>Link 2</li>
        </ol>
      </article>
    </div>
  );
}

export default App;
