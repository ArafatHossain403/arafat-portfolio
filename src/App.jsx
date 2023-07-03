import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <About></About>

      <Projects></Projects>
      <Contact></Contact>
      <footer className="footer footer-center p-4  text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Arafat Hossain</p>
        </div>
      </footer>
    </>
  );
}

export default App;
