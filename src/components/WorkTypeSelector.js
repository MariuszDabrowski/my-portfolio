import React from 'react';

const WorkTypeSelector = () => {
  return (
    <div className="selector">
      <button className="selector__item selector__item--active">
        <span className="selector__item__icon"></span>
        <span className="selector__item__text">Personal</span>
      </button>
      <button className="selector__item">
        <span className="selector__item__icon"></span>
        <span className="selector__item__text">Client</span>
      </button>
    </div>
  );
};

export default WorkTypeSelector;
