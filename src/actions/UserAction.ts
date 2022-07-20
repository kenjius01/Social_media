import * as UserApi from '../api/UserRequest';
import { Userinfo } from '../pb/apiservice';

export const updateUser = (data: Userinfo) => async (dispatch: any) => {
    dispatch({ type: 'UPDATE_START' });
    try {
        const res = await UserApi.updateUser(data);
        dispatch({ type: 'UPDATE_SUCCESS', data: res });
    } catch (error) {
        dispatch({ type: 'UPDATE_FAIL' });
        console.log('updateErr: ', error);
    }
};