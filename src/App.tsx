import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Home from "./components/main/Home";
import Skills from "./components/main/Skills";
import Projects from "./components/main/Projects";
import Footer from "./components/footer/Footer";
import Background from "./components/Background";
import type { JSX } from "react";
import Certificates from "./components/main/Certificates";

function App():JSX.Element {
  return (
    <>
      <Header />
      <Main>
        <Home />
        <Certificates />
        <Skills />
        <Projects />
      </Main>
      <Footer />
      <Background />
    </>
  );
}

export default App;
