import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Task />
      </main>
      <Footer />
    </div>
  );
}

export default App;
