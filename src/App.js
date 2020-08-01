import React, {useState, useEffect} from 'react';
import Private from './components/Private';
import Public from './components/Public';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  const [isAuth, setIsAuth] = useState(false); 

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    token && setIsAuth(true);
  }, []);

  return <BrowserRouter>
          {isAuth ?
            <Private setIsAuth={setIsAuth}/> 
            : <Public setIsAuth={setIsAuth}/>}
        </BrowserRouter>;
}

export default App;
