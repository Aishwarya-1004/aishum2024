import { useMemo, useState } from "react";
const slowFunction=(number)=>{
    for(let i=0;i<100000000;i++){
        return number * 2;
    }
};
const UseMemo=()=>{
    const [num,setNum]=useState(0);
    const [theme,updateTheme]=useState(true);
    const darkLight={
        backgroundColor:theme?"black":"white",
        color:theme?"white":"black",
    };
    const doublingANumber=useMemo(()=>{

        return slowFunction(num)
    },[num])

    return(
        <section>
            <h2>This is UseMemo Example</h2>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={()=>updateTheme(!theme)}>Toggle Theme</button>
            <h2 style={darkLight}>{doublingANumber}</h2>
        </section>
    );
};
export default UseMemo;
