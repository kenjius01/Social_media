import * as PostApi from '../api/PostRequest';

export const uploadPost = (data: any) => async (dispatch: any) => {
    dispatch({ type: 'UPLOAD_START' });
    try {
        const newPost = await PostApi.uploadPost(data);
        dispatch({ type: 'UPLOAD_SUCCESS', data: newPost.data });
    } catch (error) {
        console.log(error);
        dispatch({ type: 'UPLOAD_FAIL' });
    }
};

export const getTimelinePosts = (id: number) => async (dispatch: any) => {
    dispatch({ type: 'RETREIVING_START' });
    try {
        const {data} = await PostApi.getTimelinePosts(id);
        dispatch({ type: 'RETREIVING_SUCCESS', data });
    } catch (error) {
        dispatch({ type: 'RETREIVING_FAIL' });

        console.log(error);
    }
};

