import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Echo from './components/Echo'
import Main_load from './components/Main_load'
import Native_lang from './components/Native_lang'

function App() {
  const user = window.Telegram.WebApp.initDataUnsafe.user;
  console.log(user.id); // Bu foydalanuvchining Telegram ID'si
  console.log(user.first_name); // Foydalanuvchining ismi
  console.log(user.username); // Telegram username
  alert(`User ID: ${user.id}\nFirst Name: ${user.first_name}`);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Native_lang />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App