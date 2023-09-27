import {  createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Root from '../Layout/Root'
import CardDetails from '../Pages/CardDetails/CardDetails'
import Donation from '../Pages/Donation/Donation'
import Statistcs from '../Pages/Statistic/Statistcs'
import Error from '../Components/Error/Error'


const router= createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <Error></Error>,
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
          path:"/donation",
          loader: async()=> await fetch('../../public/data.json'),
          element: <Donation></Donation>
        
        },
        {
          path: '/statistic',
          element: <Statistcs></Statistcs>,
          loader: ()=>fetch('data.json')
        }
      ]
    }
  ])
  export default router