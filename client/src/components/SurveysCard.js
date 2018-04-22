import React from 'react';

const SurveysCard = props => {
  const { title, body, no, yes, sendDate } = props.survey;
  return (
    <div className="row">
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p style={{ marginBottom: '10px' }}>{body}</p>
            <div className="right">
              Sent On: {new Date(sendDate).toLocaleDateString()}
            </div>
          </div>
          <div className="card-action">
            <a>NO: {no}</a>
            <a>YES: {yes}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveysCard;
