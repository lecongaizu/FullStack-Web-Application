import * as React from 'react';

import PathComponent from './routes';

// Import Redux
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <PathComponent/>
    </Provider>
  );
}

export default App;