
import { useContext } from "react";
import AppContext from "../data/AppContext";

function FlexContainerPersonal({element}) {
    const context = useContext(AppContext);
    const state = context.items;
    // const [state, dispatch] = useReducer(AppReducer, data);

    return ( 
        <div className="d-flex justify-content-center flex-wrap mt-3">
            { state.map(e => element({...e})) }
        </div>
     );
}

export default FlexContainerPersonal;