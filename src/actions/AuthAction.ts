import * as AuthApi from '../api/AuthRequest';

export const logIn = (formData: any) => async (dispatch: any) => {
    dispatch({ type: 'AUTH_START' });
    try {
        const { data } = await AuthApi.logIn(formData);
        dispatch({ type: 'AUTH_SUCCESS', data });
    } catch (error) {
        console.log(error);
        dispatch({ type: 'AUTH_FAIL' });
    }
};



export const logOut = () => async (dispatch: any) => {
    dispatch({ type: 'AUTH_START' });
    try {
        await AuthApi.logout();
        dispatch({ type: 'AUTH_LOGOUT' });
    } catch (error) {
        console.log(error);
        dispatch({ type: 'AUTH_FAIL' });
    }
};
