import React  from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import ScoreBoard from './game/scoreboard';

const store = configureStore();

const App = () =>
  <Provider store={store} >
    <div>
      <h1>Cricker Scorer API</h1>
      <ScoreBoard/>
    </div>
    
  </Provider>;


export default App;
