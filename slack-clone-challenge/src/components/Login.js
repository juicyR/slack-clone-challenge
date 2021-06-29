import React, { useState } from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            props.setUser(newUser);
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <Container>
            <Content>
                <SlackImg src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" />
                <h1>Log In!</h1>
                <Button onClick={()=>signIn()}><GoogleImg src="http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png" alt="google-logo" />Continue With Google</Button>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    background: white;
    padding: 100px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SlackImg = styled.img`
    height: 100px;
    margin-bottom: 10px;
`

const GoogleImg = styled.img`
    width: 30px;
    margin-right: 10px;
`

const Button = styled.button`
    display: flex;
    justify-content: cneter;
    align-items: center;
    background-color: white; 
    color: black; 
    border: 2px solid #555555;
    padding: 16px 32px;
    text-decoration: none;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    margin-top: 60px;
    border-radius: 5px;

    :hover {
        background-color: #555555;
        color: white;
    }
`