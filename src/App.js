import About from "./components/About";
import Hero from "./components/Hero";
import Clubs from "./components/Clubs";
// import Home from "./components/Home";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Experience from "./components/Experience";
import "./App.css";
import Club from "./components/Club";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <About></About>
      <Hero></Hero>
      <Experience></Experience>
      <Project></Project>
      <Clubs></Clubs>
      <Contact></Contact>
    </div>
  );
}

export default App;
