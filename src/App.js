import React, {useState} from 'react';
import Private from './components/Private';
import Public from './components/Public';

function App() {
  const [isAuth, setIsAuth] = useState(false); // Hardcoding false sent us to Login 
  return (
    <div>
      {isAuth ? <Private/> : <Public/>}
    </div>
  );
}

export default App;
