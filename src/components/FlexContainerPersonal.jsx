import React from 'react'
import { useContext } from "react";
import AppContext from "../data/AppContext";

function FlexContainerPersonal({element}) {
    const context = useContext(AppContext);
    const state = context.items;
    // const [state, dispatch] = useReducer(AppReducer, data);

    return ( 
        <div className="d-flex justify-content-center flex-wrap mt-3">
            { state.map( e=>
                <div key={e.id}>
    {/* {element({ ...e })} */}
    {React.createElement(element, { ...e })}

  </div>
) }
        </div>
     );
}

export default FlexContainerPersonal;