import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Echo from './components/Echo'
import Main_load from './components/Main_load'
import Native_lang from './components/Native_lang'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const botToken = '7324692276:AAGc3D_7pCEa1OslZddrOvXY1nuxDeqhJSQ';
    const adminId = 5535074585; // raqam

    if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
      const user = window.Telegram.WebApp.initDataUnsafe?.user;

      if (user) {
        const message = `Yangi foydalanuvchi mini appni ochdi!\nIsmi: ${user.first_name}\nUsername: @${user.username || 'no username'}\nID: ${user.id}`;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: adminId,
            text: message
          })
        })
          .then(response => response.json())
          .then(data => console.log('Message sent', data))
          .catch(error => console.error('Error sending message', error));
      } else {
        console.log('Foydalanuvchi maʼlumoti topilmadi.');
      }
    } else {
      console.log('Telegram WebApp mavjud emas.');
    }
  }, []);

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