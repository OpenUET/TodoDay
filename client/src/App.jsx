import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/home'
import Dashboard from './pages/dashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
