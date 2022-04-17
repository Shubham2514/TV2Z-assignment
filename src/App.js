import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Detail';
import Login from './Login';

function App() {
  const [user,setUser] = useState(false);
 

  return (<>
    <BrowserRouter>
      <Routes>
      <Route  path='/login' element={<Login auth={()=>setUser(true)}/>}/>
       <Route path='/' element={<Login auth={()=>setUser(true)}/>}/>
       <Route  path='/detail' element={<Detail user={user}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
