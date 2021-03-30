import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

export const productListReducer = (state = {products:[]},action) =>{
    switch(applicationCache.type){
        case PRODUCT_LIST_REQUEST:
            return {Loading: true};
            case PRODUCT_LIST_SUCCESS:
                return{Loading:false,
                    products:action.payload};
                    case PRODUCT_LIST_FAIL:
                        return{Loading:false,
                        error:action.payload
                        };
                    
            default:
                return state;
    }
};

//akceptuje dwa parametry
//action type to wartosc jaka wrzucamy do PRODUCT_LIST_REQUEST 
//w productActions
//action types PRODUCT_LIST_SUCCESS
//product list_request kiedy wysyłam inject do backendu i czekam na resp
//i dlatego loading ustawiam na true
//return previous state,nic w nim nie zmieniam
//w productReducers pobieram(fetch) products,które są zmienią w Reduces store
//w state ustawiam default-ową wartość products,gdybym tego nie zrobił otrzymałbym
//błąd 