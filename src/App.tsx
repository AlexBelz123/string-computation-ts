import React from 'react';
import { MainView } from './pages';

function App() {
  React.useEffect(() => {
    if (!localStorage.getItem('items')) {
      localStorage.setItem('items', JSON.stringify([]));
    }
  }, []);

  return (
    <div className="App">
      <MainView />
    </div>
  );
}

export default App;
