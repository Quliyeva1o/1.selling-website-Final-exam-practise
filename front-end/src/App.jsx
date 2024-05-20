
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { router } from './router/router'
import { ItemsProvider } from './context/ItemsCotext.jsx'
function App() {
  const routes = createBrowserRouter(router)
  return (
    <>
      <ItemsProvider>
        <RouterProvider router={routes} />
      </ItemsProvider>
    </>
  )
}

export default App
