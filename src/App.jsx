import Editor from './views/Editor'
import Start from './views/Start'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.scss'

function App() {

  const router = createBrowserRouter([
    {
     path: '/',
     element: < Start/>,
     errorElement: <Error />
   },
   {
     path: '/Editor',
     element: < Editor/>,
     errorElement: <Error />
   },
 ])

  return (
    <>
     <RouterProvider router={  router }/>
    </>
  )
}

export default App
