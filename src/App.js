import React from 'react';
import { useSelector } from 'react-redux';
import Form from './features/foodAdvisor/components/Form';
import Menu from './features/foodAdvisor/components/Menu';
import { selectCreatureCount, selectJourneyLength } from './features/foodAdvisor/foodAdvisorSlice';
import prepareFoodForUnexpectedJourney from './features/foodAdvisor/service/foodAdvisor';

function App() {
  const journeyLength = useSelector(selectJourneyLength);
  const creaturesCount = useSelector(selectCreatureCount);

  let menu = null;
  const creatureExists = Object.values(creaturesCount).some((count) => count > 0);

  if (journeyLength > 0 && creatureExists) {
    menu = prepareFoodForUnexpectedJourney(journeyLength, creaturesCount);
  }

  return (
    <div className="container">
      <h1>Food Vendor</h1>
      <Form />
      {
        menu && (
          <>
            <div className="space" />
            <Menu menu={menu} />
          </>
        )
      }
    </div>
  );
}

export default App;
