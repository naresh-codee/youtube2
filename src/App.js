//import logo from './logo.svg';
import './App.css';

import Head from"./components/head";
import Body from "./components/body";

import {Provider} from "react-redux";
import store from "../src/utils/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App"  >
        <Head/>
        <Body/>
      </div>
    </Provider>
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
