import axios from 'axios';
import { FETCH_USER, userFetched } from './shared';

const LOADING = 'LOADING';

const loading = status => ({
  type: LOADING,
  payload: status,
});

const fetchUser = () => async dispatch => {
  dispatch(loading(true));
  const user = await axios.get('/auth/signed_user');
  dispatch(userFetched(user.data));
  dispatch(loading(false));
};

const handleToken = token => async dispatch => {
  const res = await axios.post('/api/payments/add-credits', token);
  dispatch(userFetched(res.data));
};

const initalState = {
  user: null,
  loading: false,
};

export const auth = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload || false,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export const mapActionToDispatch = {
  fetchUser,
  handleToken,
};

export const mapsStateToProps = ({ auth }) => {
  return {
    user: auth.user,
    loading: auth.loading,
  };
};
