import { addReducer } from '../redux';
const nameSpace = 'home';
const defaultState = {
    data:{
        username:'admin',
        password:''
    }
};
const home = (state = defaultState, action) => {
    switch(action.type){
        case `${nameSpace}/addUser`:
            return {
                ...state,
                data:{
                    ...state.data,
                    ...action.payload
                }
            }
        default:
            return state;
    }
}
addReducer({home});