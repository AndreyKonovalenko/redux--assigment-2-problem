import * as actionTypes from './actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            console.log('ADD_PERSON', state, action.name);
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                // name: 'Max',
                // age: Math.floor( Math.random() * 40 )
                name: action.personData.name,
                age: action.personData.age
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
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