import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";

const Cart = () => {
  
    const {cart}= useSelector((state)=>state)

     const [totalAmount , setTotalAmount]= useState(0)

     useEffect(()=>{
         setTotalAmount(cart.reduce((acc, curr)=> acc+ curr.price,0));
     }, [cart])

  return(

    <div className=" ">

         <div className=" flex flex-col items-center justify-between 
       rounded-xl  max-w-xl p-2 mx-auto space-y-5 space-x-2 min-h-[80vh] ">

              {
                cart.length > 0 ? 

                 (
                  <div  > 
                      <div className=" border-bottom h-[180px]">
                         {
                          cart.map((item)=>(
                              <CartItem key={item.id} item={item}></CartItem>
                          ))
                         }
                      </div>


                       <div className="flex flex-col justify-item item-end p-3 outline rounded-md fixed  ml-[580px]">
                            <div>
                                <div>Your Cart</div>
                                <div>Summary</div>
                                <p>
                                  <span>Total items : {cart.length}</span>
                                </p>
                            </div>

                            <div>
                              <p>Total Amount : {totalAmount}</p>
                              <button className="bg-green-600 p-3 rounded-lg">Checkout</button>
                             </div>

                      </div> 

                    </div>



                 ) :


                 ( <div className="flex flex-row min-h-screen justify-center items-center ">

                  <h2  className="">Cart is empty</h2> <br />

                  <Link to={"/"}>
                      <button className="bg-green-600 p-3 rounded-lg ">Shop Now</button>
                  </Link>
                  
                  </div>)

                  
              }

         </div>

        

    </div>

  );
};

export default Cart;
