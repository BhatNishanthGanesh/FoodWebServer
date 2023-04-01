import{
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from "../actions/actions";

const SidebarReducer=(state,action)=>{
    switch(action.type){
        case OPEN_SIDEBAR:
            return{
                ...state,
                isSidebarOpen:true
            }
        case CLOSE_SIDEBAR:
            return{
                ...state,
                isSidebarOpen:false
            }
        default:return state;
        
    }
}

export default SidebarReducer;