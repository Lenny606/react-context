import './App.css';
import { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Layout from './context/Layout';

function App() {

const [theme, setTheme] = useState(null);

  return (
    <div className="App">
      <ThemeContext.Provider value={{theme, setTheme}}>
      <Layout />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
