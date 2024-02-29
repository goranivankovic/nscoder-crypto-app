import Buy from './components/Buy/Buy';
import Crypto from './components/Crypto/Crypto';
import Footer from './components/Footer/Footer';
import Get from './components/Get/Get';
import Phone from './components/Phone/Phone';
import More from './components/More/More';
import Nav from './components/Nav/Nav';
import logo from './logo.svg';
import { useEffect ,useState,useRef} from 'react';





function App() {
 

  return (
    <div>


       <Nav /> 
      <More />
      <Phone />
      <Buy />
      <Get />
       <Crypto />
       <Footer />  
  



    </div>
  );
}

export default App;
