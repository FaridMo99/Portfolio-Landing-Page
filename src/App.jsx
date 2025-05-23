import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Skills from "./components/main/Skills";
import Projects from "./components/main/Projects";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
        <About />
        <Skills />
        <Projects/>
      </Main>
    </>
  );
}

export default App;
