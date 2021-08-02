import React from 'react';
import { useSelector } from 'react-redux';
import Form from './features/foodAdvisor/components/Form';
import Menu from './features/foodAdvisor/components/Menu';
import { selectCreatureCount, selectJourneyLength } from './features/foodAdvisor/foodAdvisorSlice';

function App() {
  const journeyLength = useSelector(selectJourneyLength);
  const creaturesCount = useSelector(selectCreatureCount);

  const showMenu = journeyLength > 0 && Object.values(creaturesCount).some((count) => count > 0);

  return (
    <div className="container">
      <h1>Food Vendor</h1>
      <Form />
      {
        showMenu && (
          <>
            <div className="space" />
            <Menu />
          </>
        )
      }
    </div>
  );
}

export default App;
