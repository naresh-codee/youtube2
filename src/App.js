//import logo from './logo.svg';
import './App.css';

import Head from"./components/head";
import Body from "./components/body";

import {Provider} from "react-redux";
import store from "../src/utils/store";
 
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import SignIn from "./components/signin";
import Contactus from "./components/contactus";

import Maincontainer from './components/maincontainer';
import WatchPage from './components/watchpage';

const AppRouting = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[               // this children will go to whereever this "outlet" keyword is present
      {
        path:"/",                   // if it normal maincontainer will be rendered
        element:<Maincontainer/>
      },
      {
        path:"/watchpage",           // if the route is /watch , this watch component will be rendered
        element:<WatchPage/>
      }
    ]
  },
  {
    path:"/signin",
    element:<SignIn/>,
    children:[
      {

      },
      {

      }
    ]
  },
  {
    Path:"/contact",
    element:<Contactus/>,
    children:[
      {

      },
      {

      }
    ]
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App"  >
        <Head/>

        <RouterProvider router={AppRouting}/> {/** we want the head component ot be present in home , about us and sign in pages hence , we are keeping the head and providing the routing configuration for the rest of the things*/}

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
