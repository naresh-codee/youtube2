//import logo from './logo.svg';
import './App.css';
import Head from "./components/head";
import Body from "./components/body"
import Sidebar from './components/sidebar';
import Maincontainer from "./components/maincontainer"


function App() {
  return (
    <div className="App" >
      <Head/>
      <Body/>
      <Sidebar/>
      <Maincontainer/>
    </div>
  );

  {
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
}

export default App;
