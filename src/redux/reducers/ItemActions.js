const addItem = [];


const ItemActionns = (state = addItem,action)=>{
    switch (action.type){
        case 'ADDITEM':
            return [...state,action.payload]
        break;
        case 'DELETEITEM': 
        return state = state.filter((x)=>{
            return x.id!=action.payload.id
        })
        break;
        default:  state;
        break;
    }
}