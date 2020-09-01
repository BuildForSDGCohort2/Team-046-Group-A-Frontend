import {
  Loading,
GetPosts,
AddPost,
PostDetail,
UpdatePost,
DeletePost
} from './types'
import axios from 'axios'
export const getPosts = () => (dispatch) => {
    dispatch(setLoading());
    axios
      .get('/farmer/posts')
        .then(res =>
          dispatch({
            type: GetPosts,
            payload: res.data
          }),
        )

  };
  export const getUploads = () => (dispatch) => {
      dispatch(setLoading());
      axios
        .get('/farmer/uploads')
          .then(res =>
            dispatch({
              type: GetPosts,
              payload: res.data
            }),
          )

    };
  export const postDetail = (id) => (dispatch) => {
      dispatch(setLoading());
      axios
        .get('/farmer/post/'+id)
          .then(res =>
            dispatch({
              type: GetPosts,
              payload: res.data
            }),
          )

    };

  export const addPost = (post) => (
    dispatch
  ) => {
    axios
      .post('/farmer/upload', post)
      .then(res =>
        dispatch({
          type: AddPost,
          payload: res.data,
          msg:res.data.msg,
          error:res.data.error
        })
      )

  };
  export const updatePost = (id,post) => (
    dispatch
  ) => {
    axios
      .post(`/farmer/updatepost/${id}`, post)
      .then(res =>
        dispatch({
          type: UpdatePost,
          payload: res.data,
          msg:res.data.msg
        })
      )

  };

  export const deletePost = (id) => (
    dispatch
  ) => {
    axios
      .delete(`/farmer/post/${id}`)
      .then(res =>
        dispatch({
          type: DeletePost,
          payload: id
        })
      )

  };

    export const setLoading = () => {
      return {
        type: Loading
      };
    };
