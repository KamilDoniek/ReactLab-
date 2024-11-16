import { useReducer } from "react";
import AppReducer from "../data/AppReducer";

function FlexContainerPersonal({element,data}) {
    
    const [state, dispatch] = useReducer(AppReducer, data);

    return ( 
        <div className="d-flex justify-content-center flex-wrap mt-3">
            { state.map(e => element({...e,dispatch})) }
        </div>
     );
}

export default FlexContainerPersonal;