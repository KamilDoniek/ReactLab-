export default function AppReducer(state,action){
    switch(action.type){
        case "delete": {
            // if (!action.id) {
            //   console.error("Missing ID for delete action");
            //   return state;  
            // }
            console.log("delete");
            return state.filter(item => item.id !== action.id);
          }
        case "rate":
            { 
            console.log("Rate Action");
           const item = state.find(item => item.id === action.id);
           item.rating = action.rating;
            return [...state] 
        }
        
        case 'updatePerson':
      return state.map(person =>
        person.id === action.id
          ? { ...person, birth: action.birth, eyes: action.eyes }  
          : person
      )
      case 'add': {
    const newId = state.length > 0 ? Math.max(...state.map(person => person.id)) + 1 : 1;
    action.person.id = newId;
        return [...state, action.person];  

      }
    }
}