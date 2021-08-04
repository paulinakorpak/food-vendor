import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Form from './features/foodAdvisor/components/Form';
import Menu from './features/foodAdvisor/components/Menu';
import { selectCreatureCount, selectJourneyLength } from './features/foodAdvisor/foodAdvisorSlice';
import prepareFoodForUnexpectedJourney from './features/foodAdvisor/service/foodAdvisor';

function App() {
  const [menu, setMenu] = useState(null);

  const journeyLength = useSelector(selectJourneyLength);
  const creaturesCount = useSelector(selectCreatureCount);

  useEffect(async () => {
    const atLeastOneCreature = Object.values(creaturesCount).some((count) => count > 0);

    if (journeyLength > 0 && atLeastOneCreature) {
      setMenu(await prepareFoodForUnexpectedJourney(journeyLength));
    }
  }, [journeyLength]);

  return (
    <div className="container">
      <h1>Food Vendor</h1>
      <Form />
      {
        menu && (
          <>
            <Menu menu={menu} creaturesCount={creaturesCount} />
          </>
        )
      }
    </div>
  );
}

export default App;
