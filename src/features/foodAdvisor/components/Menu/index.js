/* eslint-disable no-shadow */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Menu({ menu, creaturesCount }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetailsChange = () => {
    setShowDetails(!showDetails);
  };

  const renderMenuByCreature = (menu) => Object.entries(menu).map(
    ([creatureName, creatureMenu]) => (
      <li key={creatureName} className="creature-menu">
        <p className="creature-name">{creatureName}</p>
        <ul>
          {
            Object.entries(creatureMenu).map(
              ([dishName, dishQuantity]) => (
                <li key={dishName} className="dish">
                  <div className="dish-quantity">
                    {`${dishQuantity * creaturesCount[creatureName]} x`}
                  </div>
                  <div className="dish-name">{dishName}</div>
                </li>
              ),
            )
          }
        </ul>
      </li>
    ),
  );

  const renderAccumulatedMenu = (menu) => {
    const accumulatedMenu = {};

    Object.entries(menu).forEach(
      ([creatureName, creatureMenu]) => Object.entries(creatureMenu).forEach(
        ([dishName, dishQuantity]) => {
          dishQuantity *= creaturesCount[creatureName];
          accumulatedMenu[dishName] = accumulatedMenu[dishName] + dishQuantity || dishQuantity;
        },
      ),
    );

    return Object.entries(accumulatedMenu).map(
      ([dishName, dishQuantity]) => (
        <li key={dishName} className="dish">
          <div className="dish-quantity">
            {dishQuantity}
            {' '}
            x
          </div>
          <div className="dish-name">{dishName}</div>
        </li>
      ),
    );
  };

  return (
    <>
      <div className="checkbox">
        <p className="checkbox-text">Show details</p>
        <input
          type="checkbox"
          onChange={handleShowDetailsChange}
        />
      </div>
      <ul className="days">
        {
          menu.map((day) => (
            <li key={day.title} className="day">
              <div className="title">
                {day.title}
              </div>
              <ul className="menu">
                {
                  showDetails
                    ? renderMenuByCreature(day.menu)
                    : renderAccumulatedMenu(day.menu)
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default Menu;

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  creaturesCount: PropTypes.objectOf(PropTypes.number).isRequired,
};
