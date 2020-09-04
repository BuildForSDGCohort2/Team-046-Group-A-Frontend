import {
Loading,
PostDetail
} from '../actions/types'

const initialState = {
    post:'',
    loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {

      case PostDetail:
        return {
          ...state,
          post:action.payload,
          loading: false
        };
      case Loading:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
