
import './App.css'

import "../src/assets/css/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';  
import router from './router';
import { RouterProvider } from 'react-router-dom';

function App() {


  return (
    <>
    
   <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
