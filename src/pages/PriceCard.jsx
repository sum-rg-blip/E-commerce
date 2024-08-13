import { useSelector } from "react-redux";
function PriceCard(){
  const price =useSelector((state)=>state.cart.totalPrice);
 
  const numberofIteams=useSelector((state)=>state.cart. cartIteam)


  return<div className="[330px] p-4 rounded fixed right-20 top-8 border-4 h-[200px] m-3">
    <h1>Total iteams</h1>
    <h1 className="font-bold">{numberofIteams.length}</h1>
    <h1>Total Price</h1>
    <h1 className="font-bold">${price}</h1>
    <button className="px-28 py-3 mt-3 rounded bg-primaryColor text-thirdColor">Pay Now</button>
  </div>
} export default PriceCard