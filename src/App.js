import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import Sidebar from './Sidebar';
import Chat from './Chat'
import Login from './Login'
import {login, logout, selectUser} from './features/userSlice'
import {auth} from './firebase'
import './App.css';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])
  const app = user ? <><Sidebar/><Chat/></> : <Login/>
  return (
    <div className="app">
      {app}
    </div>
  );
}

export default App;
