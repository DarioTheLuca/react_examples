import FlavorForm from "../components/SelectFlavor";
import Template from "../components/Template";

function FlavorFormPage(){
   return (

<Template title="Select your favourite flavor" arg={<FlavorForm />} />

   ); 
}
export default FlavorFormPage;