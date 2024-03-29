const authReducer = (
    state = { authData: null, uploading: false, loading: false, error: false },
    action: any
) => {
    switch (action.type) {
        case 'AUTH_START':
            return { ...state, loading: true, error: false };
        case 'AUTH_SUCCESS':
            // localStorage.setItem(
            //     'profile',
            //     JSON.stringify({ ...action?.data })
            // );
            return {
                ...state,
                authData: action.data,
                loading: false,
                error: false,
            };
        case 'AUTH_FAIL':
            return { ...state, loading: false, error: true };

        case 'AUTH_LOGOUT':
            localStorage.clear();
            return {
                ...state,
                authData: null,
                loading: false,
            };
        case 'UPDATE_START':
            return { ...state, uploading: true, error: false };
        case 'UPDATE_SUCCESS':
            return {
                ...state,
                authData: action.data,
                uploading: false,
                error: false,
            };
        case 'UPDATE_FAIL':
            return { ...state, uploading: false, error: true };
        default:
            return state;
    }
};

export default authReducer;
