// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import db from "./firebase";
import QueueIcon from '@material-ui/icons/Queue';
import { auth, provider } from "./firebase";

//function to get data from firebase
function App() {
  //function to access rooms from the collections created in firebase
  const [rooms, setRooms] = useState([]);
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')));
  //function created to obtain channels from firebase, specifically the rooms
  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        //This is to ask for specific information from the database
        return { id: doc.id, name: doc.data().name }
      }))
    })
  }

  const signOut = () => {
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  }
  //useEffect function added so that the function is run only once on page load
 useEffect(() => {
  getChannels();
 }, [])


  return (
    <div className="App">
      <Router>
        {
            !user ?
            <Login setUser={setUser} />
            :
          <Container>
            <Header signOut={signOut} user={user} />
            <Main>
              <Sidebar rooms = {rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat />
                </Route>
                <Route path="/">
                  <RootPath>
                    <Text>
                      Select or Create Channel
                    </Text>
                    <QueueIcon />
                  </RootPath>
                </Route>
              </Switch>
            </Main>
          </Container>
        }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 45px auto;
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`

const RootPath = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 800;
  background-image: url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700320362.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`

const Text = styled.div`
  margin-right: 10px;
`