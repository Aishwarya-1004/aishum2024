import Component2 from "./ContextComponents/Component2";
import React from "react";
export const ThemeProvider = React.createContext(); 
const ExamResults = ()=>{
    return(
        <section>
            <ThemeProvider.Provider value = {{sgpa : "10.00"}}>
            <h1>This is an example of useContext - Parent Component</h1>
            <Component2 />
            </ThemeProvider.Provider>
            
        </section>
        
    );
};
export default ExamResults;