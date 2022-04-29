import EssayForm from "../components/EssayForm";
import Template from "../components/Template";

function EssayFormPage(){
   return (
<Template title="Essay" arg={<EssayForm />} />

   ); 
}
export default EssayFormPage;