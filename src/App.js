import React from 'react';
import CalCulator from './5)ReduxToolkit/Calculator';
import { Provider } from 'react-redux';
import redux from './5)ReduxToolkit/redux';
// import CalCulator from './3)Cal-presenterContainer/Calculator';

function App() {
  return (
    <>
      <Provider store={redux}>
        <CalCulator />
      </Provider>
    </>
  );
}

export default App;
