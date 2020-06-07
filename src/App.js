import React from 'react';
import './App.css';
import Counter from './components/Counter'
import store from './redux/store'
import {Provider} from 'react-redux'



function App() {
  return (
    < Provider store={store}>
    <div className="App">
    <Counter  />  
    </div>
    < /Provider>
  );
}

export default App;
