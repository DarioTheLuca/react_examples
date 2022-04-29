import Template from "../components/Template";
import Calculator from "../components/Calculator";

function CalculatorPage(){
    
    return(
<Template title="Calcola la temperatura" arg={<Calculator />} />
    )
}

export default CalculatorPage