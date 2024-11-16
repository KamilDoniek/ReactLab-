import FlexContainer from "../components/FlexContainer";
 import { data } from "../data/module-data";
import Element from "../components/Element";
const Lab3Page = () =>{
    return (
        <div>
          <h1>Lab 03</h1>
          <FlexContainer Element={Element} data={data} />
        </div>
      );
    }
export default Lab3Page;

