# ROUTING:
STEP1: install react-router-dom
STEP2: create the router configuration
STEP3: Provide the router configuration
STEP4: add the LINK keyword properly


creating and providing  router configutation stages:

stage (1)
const AppLayout = createBrowserRouter([
    {
        path:"/",
        element:<Homepage>
    },

    {
        path:"/aboutus",
        element:<AboutUs>
    },
    {
        path:"/signin",
        element:<Signinpage>
    }
])

--------- corresponding  router provider in app.js file ---------

const App = () => {
  return (
    <Provider store={store}>
      <div className="App"  >
        <RouterProvider router={AppRouting}/>
      </div>
    </Provider>
  );




STAGE (2): you want header on all pages , but just want to change tha body part alone

const AppLayout = createBrowserRouter([
    {
        path:"/",
        element:<Body>,   // this body component  has 2 childrens "sidebar and maincontainer or watchpage" , because we                    we are going to keep sidebar always

        children:[                // this children will go to whereever this "outlet" keyword is present 
            {
                path:"/"
                element:<MainContainer>  // if it normal maincontainer will be rendered 

            },
            {
                path:"/watch"
                element:<WatchPage>   // if the route is /watch , this watch component will be rendered

            }
        ]

    },

    {
        path:"/aboutus",
        element:<AboutUs>,
        children:[
            {
                ... somethings ...
            }
        ]
    },
    {
        path:"/signin",
        element:<Signinpage>,
        children:[
            {
                ... somethings ...
            }
        ]
    }
])



--------- corresponding  router provider in app.js file ---------
const App = () => {
  return (
    <Provider store={store}>
      <div className="App"  >
        <head/>                 // note this changee......
        
        <RouterProvider router={AppRouting}/>
      </div>
    </Provider>
  );


 ... inorder to use the children routing you need to use "Outlet from react-router-dom" in the body component file ......

  const Body = () =>{
    return(
        <div>
       
        <div><Sidebar/></div>

        <Outlet>   /// this outlet will be either <MainContainer > or <WatchPage>
        
        </div>

    )
}


-------------------------------------

after all this you need give the "Link keyword from react router dom" properly to the files needed

example -->    <Link to="/signin" >signin page</Link>











# problems and solutions:
1) 'react-scripts' is not recognized as an internal or external command,
operable program or batch file.  - we got this error when we run "npm run start" initially



2) whenever you are pulling some react code from github or you have deleted your node modules folder - you need to again run the "npm install " command!


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
