import "bootstrap/dist/css/bootstrap.min.css"
import Notfound from"./pages/notfound/Notfound"
import Loginpage from './pages/loging/Loginpage'
import { useRoutes } from "react-router-dom"
import Homepage from "./pages/homepage/Homepage"


function App() {
  const routs = useRoutes([
    {
      path:"/",
      element:<Homepage/>
    },
    {
      path:"/login",
      element:<Loginpage/>
    },
    {
      path:"/*",
      element:<Notfound/>
    }
  ])

  return (
   
 <>{routs}</>
  )
}

export default App
