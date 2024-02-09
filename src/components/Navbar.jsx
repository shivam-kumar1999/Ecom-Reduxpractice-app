import { BsFillCartCheckFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (

     <div>

         <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">

               <NavLink to="/">
                <div className="ml-5">
                    <img className="w-20" src="https://static.vecteezy.com/system/resources/previews/011/577/853/original/big-offer-3d-marketing-label-text-png.png" alt="" />
                </div>
               </NavLink>


              <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">

                  <NavLink to="/">
                      <p className="text-black">Home</p>
                      
                  </NavLink>

                  <div className="relative">
                     <NavLink to='/cart'>
                         <BsFillCartCheckFill className="text-2xl text-black" />

                    


                     </NavLink>
                  </div>

              </div>
         
         </div>
    
     </div>
  
  );
};

export default Navbar;
