import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar title = "Fuck You" about="You Dont't Need To Know"/>
    <div className="container">
    <About/>
    <TextForm heading="Enter the text here you piece of shit!"/>
    </div>
    </>
  );
}

export default App;
