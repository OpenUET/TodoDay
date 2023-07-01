import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path='/' element={<Home />} />
      <Route path='/dashboard' element={<h1>Dashboard</h1>} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
