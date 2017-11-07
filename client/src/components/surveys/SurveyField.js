// SurveyField contains logic to render single label and text input
import React from 'react'

// {input ,  meta } dolaze od Field komponente koja je odgovorna za rendanje ove Komponente
const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        {...input}
        style={{ marginBottom: '5px' }}
      />
      <div
        className="red-text"
        style={{ marginBottom: '20px', fontStyle: 'italic' }}
      >
        {touched && error}
      </div>
    </div>
  );
}

export default SurveyField;