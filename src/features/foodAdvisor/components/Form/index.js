import React from 'react';

function Form() {
  return (
    <>
      <div className="creatures">
        <div className="creature">
          <img className="creature-photo" src="images/dwarf.png" alt="dwarf" />
          <input className="creature-quantity" type="number" min="0" />
        </div>
        <div className="creature">
          <img className="creature-photo" src="images/hobbit.png" alt="hobbit" />
          <input className="creature-quantity" type="number" min="0" />
        </div>
        <div className="creature">
          <img className="creature-photo creature-photo-wizard" src="images/wizard.png" alt="wizard" />
          <input className="creature-quantity" type="number" min="0" />
        </div>
      </div>
      <input
        type="number"
        min="1"
        className="input"
        placeholder="Number of days"
      />
    </>
  );
}

export default Form;
