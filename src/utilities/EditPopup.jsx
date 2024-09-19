/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"


const EditPopup = ({toggle,modal,todoDetails,getTodoId}) => {

    const [title,setTitle] = useState('')
    const [text,setText] = useState('')
    const [status] = useState(false)

    const handleSubmit = (event) =>{
        event.preventDefault()
        getTodoId(todoDetails.todo_id,title,text,status)
        toggle()
       
        
    }

    const handleClose = (e) =>{
        if (e.target.id === "wrapper"){
            toggle()
        }
    }

    useEffect(() =>{
        setText(todoDetails.text)
        setTitle(todoDetails.title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if (modal === false) return null;
  return (
    <div className="bg-black fixed inset-0 bg-opacity-5 backdrop-blur-sm
    flex flex-col justify-center items-center" id="wrapper" onClick={handleClose}>
        <div className="bg-slate-100 p-5 shadow-lg w-4/12 rounded-md">
            <h2 className="font-bold font-sans text-[14px] text-center text-blue-500">UPDATE TASK</h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <lable className="font-sans text-[11px] font-bold mb-2">Title:</lable>
                <input type="text" className="border border-gray-300 mb-2 outline-none p-1 text-[10px]"
                placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label className="font-sans text-[11px] font-bold mb-2">About Title:</label>
                <textarea rows={3} className="border border-gray-300 outline-none p-2 text-[10px]"
                placeholder="Enter Description" value={text} onChange={(e) => setText(e.target.value)}/>
                <div className="m-2 self-end">
                    <button className="text-[12px] bg-blue-400 px-2 py-1 text-white font-semibold rounded-sm mr-2" type="submit">update</button>
                    <button className="text-[12px] bg-red-600 px-2 py-1 text-white font-semibold rounded-sm"
                    onClick={() => toggle()}>cancle</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditPopup