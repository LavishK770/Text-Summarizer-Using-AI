import Section from "./components/Section";
import './App.css';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
        <div className="main">
            <div className="gradient" />
            </div>

        <div className="app">
            <Navbar />
            <Section />
        </div>
    </main>
  )
}

export default App