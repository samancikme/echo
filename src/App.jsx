import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Echo from './components/Echo'
import Main_load from './components/Main_load'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        {/* <Route path='/' element={<Main_load />} /> */}
        <Route path='/' element={<Echo />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App