import Reservation from "../components/MultipleInput";
import Template from "../components/Template";

function ReservationPage(){
   return (
<Template title="Reservation" arg={<Reservation />} />

   ); 
}
export default ReservationPage;