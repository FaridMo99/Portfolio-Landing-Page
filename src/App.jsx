import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/main/About";

function App() {
  return (
    <>
      <Header />
      <Main>
        <About />
      </Main>
    </>
  );
}

export default App;
