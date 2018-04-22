import axios from 'axios';

const UPDATE_SURVEYS = 'UPDATE_SURVEYS';

const updateSureys = surveys => ({
  type: UPDATE_SURVEYS,
  payload: surveys,
});

const fetchSurveys = () => async dispatch => {
  const surveys = await axios.get('/api/surveys');
  dispatch(updateSureys(surveys.data));
};

const initialState = [];

export const surveys = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SURVEYS:
      return action.payload;
    default:
      return state;
  }
};

export const mapStateToProps = state => {
  return {
    surveys: state.surveys,
  };
};

export const mapActionToDispatch = {
  fetchSurveys,
};
