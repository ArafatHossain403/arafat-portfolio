import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin,} from 'react-icons/fa';

function App() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <About></About>

      <Projects></Projects>
      <Contact></Contact>
      <footer className="footer footer-center p-4  text-base-content">
        <div className="md:flex gap-4">
          <p>Copyright © 2023 - All right reserved by Arafat Hossain</p>
          <div className='flex gap-5 text-lg my-4'>
      <a href="https://github.com/ArafatHossain403" target = "_blank" 
rel = "noopener noreferrer"> <AiFillGithub size={40}/></a>
      <a href="https://www.linkedin.com/in/arafat-hossain-82860a206/" target = "_blank" 
rel = "noopener noreferrer"> <FaLinkedin size={40}/></a>
      </div>
        </div>
      </footer>
    </>
  );
}

export default App;
