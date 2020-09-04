import {GetPosts,
AddPost,
DeletePost,
Loading,
Bill_Detail,
UpdatePost
} from '../actions/types'

const initialState = {
    posts:[],
    loading:false,
    msg:'',
    error:''
}

export default function(state= initialState, action) {
    switch (action.type) {
      case GetPosts:
        return {
          ...state,
          posts: action.payload,
          loading: false
        };

      case DeletePost:
        return {
          ...state,
          posts: state.posts.filter(posts => posts._id !== action.payload)
        };
      case AddPost:
        return {
          ...state,
          posts: [action.payload, ...state.posts],
          msg: action.msg,
          error:action.error
        };
      case UpdatePost:
        return{
          ...state,
          posts:[...state.posts]
        }
      case Loading:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
