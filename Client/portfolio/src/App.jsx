import React, { useEffect} from "react";
import { Outlet } from "react-router";
import {useDispatch} from 'react-redux'
import  {checkUserAuthentication} from '../src/Redux/Actions/User'

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkUserAuthentication());
  },[]);

  return (
    <div className="font-ubuntu">
      <Outlet />
    </div>
  );
}

export default App;
