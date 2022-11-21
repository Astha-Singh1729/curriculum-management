export const initialState = {
    userType: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ROLE': {
            const newUsertype = action.role;
            return {
                ...state,
                userType: newUsertype
            }
        }
        default:
            return state;
    }
};

export default reducer;