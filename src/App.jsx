import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Home from "./components/main/Home";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
    </>
  );
}

export default App;
