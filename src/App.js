import './App.css';
import image5 from './5.jpg'
import image6 from './6.png'

function App() {
  return (
    <div>
      <h1>Hi, I'm Jeremy!<br />
        I'm a <b>UI developer</b>,<br />
        <b>photographer</b> and <b>artist</b> <br /> in Sydney, Australia</h1>
      <ul>
        <p>
          <span>Current</span>
          <a href='#'>Bupa</a>
        </p>
        <p>
          <span>Previous</span>
          <a href='#'>Oneflare,</a>
          <a href='#'>Jaxsta,</a>
          <a href='#'>We Are Social,</a>
          <a href='#'>Essential</a>
          <a href='#'>Ansarda,</a>
        </p>
      </ul>
      <ul className='links'>
        <a href='#'>GITHUB</a>
        <a href='#'>LINKEDIN</a>
        <a href='#'>INSTAGRAM</a>
        <a href='#'>TWITTER</a>
      </ul>
    </div>
  );
}

export default App;
