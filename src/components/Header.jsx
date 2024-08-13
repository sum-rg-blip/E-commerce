import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Header({search}){
  
  const numberofIteams=useSelector((state)=>state.cart. cartIteam)
return <div className="   fixed w-full flex gap-5 justify-between bg-primaryColor font-primaryFont  p-5">
  <h1 className="font-bold text-thirdColor text-3xl sm:pl-2 "><span className="text-secondaryColor">E</span>-Suuq</h1>
  <ul className=" hidden flex gap-8 text-4xl text-thirdColor">
    <li>Home</li>
    <li>Contact</li>
  </ul>
  <input onChange={search} className=" w-[500px] h-9 mt-1  rounded" type="text"placeholder="Search item"></input>
 <Link to="/cart"><i class=" text-white text-2xl fa fa-shopping-cart" aria-hidden="true">{numberofIteams.length}</i> </Link>
  
</div>

}export default Header