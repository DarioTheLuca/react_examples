import NameForm from "../components/NameForm";
import Template from "../components/Template";

function NameFormPage() {
   return (
      <Template title="Inserisci il nome" arg={<NameForm />} />
      );
  
  
}
export default NameFormPage;