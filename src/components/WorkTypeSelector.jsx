import React from 'react';

const WorkTypeSelector = ({ projectCategory, toggleWorkCategory }) => {
  const toggleWorkType = (e) => {
    if (e.currentTarget.dataset.category === projectCategory) return;

    const workButtons = document.querySelectorAll('.selector__item');

    workButtons.forEach((button) => {
      if (button.classList.contains('selector__item--active')) {
        button.classList.remove('selector__item--active');
      } else {
        button.classList.add('selector__item--active');
      }
    });

    toggleWorkCategory(e.currentTarget.dataset.category);
  };

  return (
    <div className="selector">
      <button
        type="button"
        data-category="personal"
        className="selector__item selector__item--active"
        onClick={toggleWorkType}
      >
        <span className="selector__item__icon" />
        <span className="selector__item__text">Personal</span>
      </button>
      <button
        type="button"
        data-category="client"
        className="selector__item"
        onClick={toggleWorkType}
      >
        <span className="selector__item__icon" />
        <span className="selector__item__text">Client</span>
      </button>
    </div>
  );
};

export default WorkTypeSelector;
