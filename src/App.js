import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';

function App() {
  return (
    <>
    <Navbar title = "Text Editor Tools" about="You Dont't Need To Know"/>
    <div className="container">
    <TextForm heading="Enter the text here..."/>
    </div>
    </>
  );
}

export default App;
