import React from 'react';
import { Button, Block } from './components';

function App() {
  return (
    <div className="wrapper">
      <Block>
        <h1>Hello</h1>
        <Button type="primary" size="large">This is Button</Button>
      </Block>
    </div>
  );
}

export default App;
