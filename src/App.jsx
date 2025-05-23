import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Home from "./components/main/Home";
import About from "./components/main/About";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
        <About />
      </Main>
    </>
  );
}

export default App;
