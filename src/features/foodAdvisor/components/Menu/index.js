import React from 'react';

function Menu() {
  return (
    <>
      <div className="checkbox">
        <p className="checkbox-text">Show details</p>
        <input type="checkbox" />
      </div>
      <ul className="days">
        <li className="day">
          <div className="title">Day 1</div>
          <ul className="dishes">
            <li className="dish">
              <div className="dish-quantity">2 x </div>
              <div className="dish-name">Scrambled eggs</div>
            </li>
            <li className="dish">
              <div className="dish-quantity">2 x </div>
              <div className="dish-name">Soft-boiled egg</div>
            </li>
            <li className="dish">
              <div className="dish-quantity">4 x </div>
              <div className="dish-name">Slice of Lembas Bread</div>
            </li>
          </ul>
        </li>
        <li className="day">
          <div className="title">Day 2</div>
          <ul className="dishes">
            <li className="dish">
              <div className="dish-quantity">2 x </div>
              <div className="dish-name">Scrambled eggs</div>
            </li>
            <li className="dish">
              <div className="dish-quantity">2 x </div>
              <div className="dish-name">Soft-boiled egg</div>
            </li>
            <li className="dish">
              <div className="dish-quantity">4 x </div>
              <div className="dish-name">Slice of Lembas Bread</div>
            </li>
          </ul>
        </li>
        <li className="day">
          <div className="title">Day 3</div>
          <ul className="dishes">
            <li className="dish">
              <div className="dish-quantity">2 x </div>
              <div className="dish-name">Scrambled eggs</div>
            </li>
            <li className="dish">
              <div className="dish-quantity">2 x </div>
              <div className="dish-name">Soft-boiled egg</div>
            </li>
            <li className="dish">
              <div className="dish-quantity">4 x </div>
              <div className="dish-name">Slice of Lembas Bread</div>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Menu;
