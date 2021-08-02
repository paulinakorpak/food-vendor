import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCreatureCount,
  setJourneyLength,
  selectCreatureCount,
  selectJourneyLength,
} from '../../foodAdvisorSlice';

function Form() {
  const dispatch = useDispatch();

  const creaturesCount = useSelector(selectCreatureCount);
  const journeyLength = useSelector(selectJourneyLength);

  const handleCreatureCountChange = (e) => {
    const { name, value } = e.currentTarget;

    if (/^\d+$/.test(value) || value === '') {
      dispatch(setCreatureCount({
        creature: name,
        count: parseInt(value, 10),
      }));
    }
  };

  const handleJourneyLengthChange = (e) => {
    const { value } = e.currentTarget;

    if (/^\d+$/.test(value) || value === '') {
      dispatch(setJourneyLength(parseInt(value, 10)));
    }
  };

  return (
    <>
      <div className="creatures">
        <div className="creature">
          <img className="creature-photo" src="images/dwarf.png" alt="dwarf" />
          <input
            name="dwarf"
            type="number"
            min="0"
            className="creature-quantity"
            value={creaturesCount.dwarf}
            onChange={handleCreatureCountChange}
          />
        </div>
        <div className="creature">
          <img className="creature-photo" src="images/hobbit.png" alt="hobbit" />
          <input
            name="hobbit"
            type="number"
            min="0"
            className="creature-quantity"
            value={creaturesCount.hobbit}
            onChange={handleCreatureCountChange}
          />
        </div>
        <div className="creature">
          <img className="creature-photo creature-photo-wizard" src="images/wizard.png" alt="wizard" />
          <input
            name="wizard"
            type="number"
            min="0"
            className="creature-quantity"
            value={creaturesCount.wizard}
            onChange={handleCreatureCountChange}
          />
        </div>
      </div>
      <input
        type="number"
        min="1"
        className="input"
        placeholder="Number of days"
        value={journeyLength}
        onChange={handleJourneyLengthChange}
      />
    </>
  );
}

export default Form;
