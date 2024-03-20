import { useState } from "react"

export default function Excel(){
    
    let sections = ["Chart 1","Chart 2", "Chart 3" , "Chart 4", "Chart 5", "Chart 6" ,"Chart 7"]

    let [active, setActive] = useState(sections[0])

    let navBar = sections.map(sec => (
        <div className=
        {active === sec ? 
            "flex items-center justify-center w-32 h-8 bg-white cursor-pointer select-none":
            "flex items-center justify-center w-32 h-8 cursor-pointer select-none"
        }
        onClick={()=>setActive(sec)}
        >
            <p>{sec}</p>
        </div>
    ))

    return(
        <div className="absolute bottom-4 flex justify-left w-screen px-20">
            {navBar}
        </div>
    )
}