import logo from '../../Asset/image/logo.svg';
import './style.css';

const Home = () => {

   return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <a
            className="Home-link"
            href="/."
            target="_blank"
            rel="noopener noreferrer"
        >
            Ho Duc Long 01
        </a>
      </header>
    </div>
  );
}

export default Home;