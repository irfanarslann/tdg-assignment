import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import WaveContextProvider from "./contexts/Wave/WaveContext";
function App() {
  return (
    <div className="App">
      <WaveContextProvider>
        <Header />
        <Main />
        <Footer />
      </WaveContextProvider>
    </div>
  );
}

export default App;
