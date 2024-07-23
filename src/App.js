//import logo from './logo.svg';
import './App.css';

import Head from"./components/head";
import Body from "./components/body";

function App() {
  return (
    <div className="App" className="bg-slate-300" >
      <Head/>
      <Body/>
    </div>
  );

  
   /**
    * head
    * body
    *  ->sidebar
         *menu item
       ->Maincontainer
          *buttons list
          *video container
    *       ->video card
    *  */ 
  
}

export default App;
