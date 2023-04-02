import {
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_ERROR,
    FETCH_CATEGORY_SUCCESS,
    FETCH_MEALS_BEGIN,
    FETCH_MEALS_ERROR,
    FETCH_MEALS_SUCCESS,
    FETCH_SINGLE_MEAL_BEGIN,
    FETCH_SINGLE_MEAL_SUCCESS,
    FETCH_SINGLE_MEAL_ERROR,
    FETCH_CATEGORY_MEALS_BEGIN,
    FETCH_CATEGORY_MEALS_SUCCESS,
    FETCH_CATEGORY_MEALS_ERROR
} from '../actions/actions'

export const mealReducer=(state,action)=>{
    switch(action.type){
        case FETCH_CATEGORY_BEGIN:
            return{
                ...state,
                categoryLoading:true
            }
        case FETCH_CATEGORY_SUCCESS:
            return{
                ...state,
                categoryLoading:false,
                categories:action.payload
            }
        case FETCH_CATEGORY_ERROR:
            return{
                ...state,
                categoryLoading:false,
                categoryError:true
            }
        case FETCH_MEALS_BEGIN:
            return{
                ...state,
                mealsLoading:true
            }
        case FETCH_MEALS_SUCCESS:
            return{
                ...state,
                mealsLoading:false,
                meals:action.payload
            }
        case FETCH_MEALS_ERROR:
            return{
                ...state,
                mealsLoading:true,
                mealsError:true
            }
        case FETCH_SINGLE_MEAL_BEGIN:
            return{
                ...state,
                mealLoading:true
            }
        case FETCH_SINGLE_MEAL_SUCCESS:
            return{
                ...state,
                mealLoading:false,
                meal:action.payload
            }
        case FETCH_SINGLE_MEAL_ERROR:
            return{
                ...state,
                mealLoading:true,
                mealError:true
            }
        case FETCH_CATEGORY_MEALS_BEGIN:
            return{
                ...state,
                categorymealsLoading:true
            }
        case FETCH_CATEGORY_MEALS_SUCCESS:
            return{
                ...state,
                categorymealsLoading:false,
                categorymeals:action.payload
            }
        case FETCH_CATEGORY_MEALS_ERROR:
            return{
                ...state,
                categorymealsLoading:false,
                categorymealsError:false
            }
       
        default:return state;
        
    }
}