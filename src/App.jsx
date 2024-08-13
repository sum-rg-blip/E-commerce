import { Route,Routes } from "react-router-dom"
import Home from './pages/Home'
import Cart from "./pages/Cart"
function App(){
  return <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Cart" element={<Cart/>}></Route>
    </Routes>
}
export default App