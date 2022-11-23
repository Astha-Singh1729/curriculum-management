export const initialState = {
    userType: null,
    user : null
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
        case 'SET_USER': {
            const newuser = action.user;
            return {
                ...state,
                user: newuser
            }
        }
        default:
            return state;
    }
};

export default reducer;