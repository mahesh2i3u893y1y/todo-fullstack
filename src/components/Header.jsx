//import { useState } from "react"
//import { useState } from "react"
import { useState } from "react"
import Popup from "../utilities/Popup"

const Header = () => {
  const [showPopup,setShowPopup] = useState(false)

  const toggle = () =>{
    setShowPopup(!showPopup)
  }

  return (
      <div className="flex flex-col justify-center items-center  bg-blue-100 py-7 sticky z-0 top-0 shadow-lg">
        <h2 className="font-bold font-sans my-4">Todo List</h2>
        <button className="text-[10px] font-sans bg-blue-500 px-2 py-1 font-semibold  rounded-md text-white"
        onClick={() => setShowPopup(true)}>Create Task</button>
        <Popup modal={showPopup} toggle={toggle}/>  
    </div>
    
  )
}

export default Header