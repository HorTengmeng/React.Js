import { useState } from "react"

useState


export default function Mode() {
    const [mode,setMode] = useState(true)
  return (
    <>
        <div className={`w-full h-[100vh] ${mode ? 'bg-white' : 'bg-black'} duration-200`}>
            <div className="w-full h-full  flex items-center justify-center">
                <button className={`${mode ? 'bg-black text-white' :'bg-white text-black'} px-5 py-2 
                rounded-2xl text-xl font-medium`}
                onClick={()=>setMode(!mode)}
                >
                    {mode ? 'Dark mode ' : 'Light mode'}
                </button>
            </div>
        </div>
    </>
  )
}
