import axios from 'axios';
import { userFetched } from './shared';

const sendSurvey = (survay, history) => async dispatch => {
  const response = await axios.post('/api/surveys', survay);
  dispatch(userFetched(response.data));
  history.push('/surveys');
};

export const mapStateToProps = state => {
  return {
    surveyValues: state.form.surveyForm.values,
  };
};

export const mapActionToDispatch = {
  sendSurvey,
};
