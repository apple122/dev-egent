import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/header';
import Index_Slide from './Component/Slide/Index';
import Index_Game from './Component/Game/Index';
import Index_About from './Component/About/Index';
import Index_Footer from './Component/Footer/Index';

function App() {
  return (
    <>
      <Header />
      <Index_Slide />
      <div className='container-page'>
        <Index_Game />
        <Index_About />
      </div>
      <Index_Footer />
    </>
  );
}

export default App;
