import Clock from "../components/Clock";
import Template from "../components/Template";

function ClockPage(){
   return (
<Template title="Ora" arg={<Clock />} />

   ); 
}
export default ClockPage;