import { Helmet } from 'react-helmet';

function Template(props) {

   return (

      <div className="App">

         <header className="App-header">
            <>
               <Helmet>
                  <title>{props.title}</title>
               </Helmet>
               <h1>{props.title}</h1>
               <br />
               {props.arg}

            </>


         </header>
      </div>
   );
}
export default Template;