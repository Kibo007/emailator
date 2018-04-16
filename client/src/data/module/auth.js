import axios from 'axios';

const FETCH_USER = 'FETCH_USER';

const userFetched = payload => ({
  type: FETCH_USER,
  payload,
});

const fetchUser = () => async dispatch => {
  const user = await axios('/auth/signed_user');
  dispatch(userFetched(user.data));
};

const initalState = null;

export const auth = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};

export const mapActionToDispatch = {
  fetchUser,
};

export const mapsStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
