import React from 'react';
import styled from 'styled-components';
//import StyleHeader from '../components/header.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
//import ReactDOM from 'react-dom';

function header({ user, signOut }) {
    return (
        <Container>
            <Main>
                <AccessTimeIcone />
                <SearchContainer>
                    <SearchBox>
                        <input type="text" class="search-box" id="text-input" placeholder="Search CleverProgrammer..." />
                        {/* <label for="text-input">Search</label> */}
                    </SearchBox>
                </SearchContainer>
                <HelpOutlineIcone />
            </Main>
            <UserContainer onClick={signOut}>
                <Name>{user.name ? user.name : "Mr. Nobody"}</Name>
                <UserImg>
                    <img src = {user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"} alt="user-img"/>
                </UserImg>
            </UserContainer>
        </Container>
    )
}

export default header

const Container = styled.div`
    display: flex;
    height: 45px;
    background: #350d46;
    color: white;
    align-items: center;
    justify-content: center;
    z-index: 10;
    box-shadow: 0px 1px 0px 0px rbg(255 255 255 / 10%);
`
const Main = styled.div`
    display: flex;
    position: relative;
`
const SearchContainer = styled.div`
    min-width: 500px;
    margin: 0 16px 0 16px
`
const SearchBox = styled.div`
    width: 100%;
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    border-radius: 4px;
    // border-color: #c2c2c2;
    display: flex;
    overflow: hidden;
    align-items: center;
    background-color: rgba(82, 0, 117, 0.8);

    input:focus {
        outline: none;
    }

    input {
        background-color: transparent;
        border: none;
        width: 100%;
        padding: 4px 8px 4px 8px;
        color: white;
    }

    #text-input::placeholder {
        color: #c4c4c4;
        transition: .25s ease-in;
    }
    #text-input:hover::placeholder {
        color: #d9d9d9;
    }
`
const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 16px 0 0;
    position: absolute;
    right: 0;
`
const Name = styled.div`
    padding: 0 16px 0 0;
    cursor: pointer;
`
const UserImg = styled.div`
    width: 32px;
    height: 32px;
    // border: 2px solid;
    border-radius: 15%;
    cursor: pointer;
    overflow: hidden;

    img {
        width: 100%;
    }
`

const AccessTimeIcone = styled(AccessTimeIcon)`
    :hover {
        cursor: pointer;
    }
`

const HelpOutlineIcone = styled(HelpOutlineIcon)`
    :hover {
        cursor: pointer;
    }
`

//CSS Chatbox styling
//ReactDOM.render(<StyleHeader />, document.getElementById('text-input'));