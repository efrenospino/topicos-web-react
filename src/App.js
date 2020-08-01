import React, {useState, useEffect} from 'react';
import Private from './components/Private';
import Public from './components/Public';

function App() {
  const [isAuth, setIsAuth] = useState(false); 
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    token && setIsAuth(true);
  }, [])
  return (
    <div>
      {isAuth ?
       <Private setIsAuth={setIsAuth}/> 
       : <Public setIsAuth={setIsAuth}/>}
    </div>
  );
}

export default App;
