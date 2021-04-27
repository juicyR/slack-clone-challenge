// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import db from "./firebase"

//function to get data from firebase
function App() {
  //function to access rooms from the collections created in firebase
  const [rooms, setRooms] = useState([]);
  //function created to obtain channels from firebase, specifically the rooms
  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        //This is to ask for specific information from the database
        return { id: doc.id, name: doc.data().name }
      }))
    })
  }
  //useEffect function added so that the function is run only once on page load
 useEffect(() => {
  getChannels();
 }, [])

  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar rooms = {rooms} />
            <Switch>
              <Route path="/chat">
                <Chat />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
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
  background: red;
  display: grid;
  grid-template-columns: 260px auto;
`