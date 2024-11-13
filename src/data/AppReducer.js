

export default function AppReducer(state,action){
    switch(action.type){
        case "rate":
            { 
            console.log("Rate Action");
           const item = state.find(item => item.id === action.id);
           item.rating = action.rating;
            return [...state] 
        }
        case "Edit":
            console.log("edit")
            return state;
        case "delete":
            console.log("delete");
            return state;
    }
}