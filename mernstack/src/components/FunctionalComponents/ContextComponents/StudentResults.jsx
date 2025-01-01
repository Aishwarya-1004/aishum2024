import { useContext } from "react";
import { ThemeProvider } from "../UseContext";

const StudentResults = ()=>{
    const result=useContext(ThemeProvider);
    return(
        <section>
            <h3>Your Result is {result.sgpa}</h3>
            
        </section>
        
    )
}
export default StudentResults;