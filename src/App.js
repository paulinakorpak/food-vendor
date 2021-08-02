import React from 'react';
import Form from './features/foodAdvisor/components/Form';
import Menu from './features/foodAdvisor/components/Menu';

function App() {
  return (
    <div className="container">
      <h1>Food Vendor</h1>
      <Form />
      <div className="space" />
      <Menu />
    </div>
  );
}

export default App;
