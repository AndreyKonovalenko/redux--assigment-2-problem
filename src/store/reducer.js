import * as actionTypes from './actions';

const initialState = {
    presons: []
};

const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            console.log('ADD_PERSON', state);
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            return {
                ...state,
                presons: state.presons.concat(newPerson)
            }
        case actionTypes.DELETE_PERSON: 
            const updatedArray = state.persons.filter(element => element.id !== action.personId);
            return {
                ...state, 
                persons: updatedArray 
            };
        default:
            return state;
    }
}

export default reducer;