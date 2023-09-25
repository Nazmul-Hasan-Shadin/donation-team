import {  createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Root from '../Layout/Root'
import CardDetails from '../Pages/CardDetails/CardDetails'
import Donation from '../Pages/Donation/Donation'


const router= createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch('/data.json')


        },
        {
          path: '/cardDetails/:id',
          element: <CardDetails></CardDetails>,
          loader:()=>fetch('/data.json')
        },
        {
          path: '/donation',
          element: <Donation></Donation>,
          loader: ()=>fetch('data.json')
        }
      ]
    }
  ])
  export default router