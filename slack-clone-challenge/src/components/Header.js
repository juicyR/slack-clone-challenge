import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <SearchBox>
                        <input type="text" id="text-input" placeholder="Search CleverProgrammer..." />
                    </SearchBox>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>Reggie Matovu</Name>
                <UserImg>
                    <img src="https://i.imgur.com/6VBx3io.png" />
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
    margin: 0 16px 0 16px;
    position: relative;
`
const SearchContainer = styled.div`
    min-width: 400px;
    margin: 0 16px 0 16px
`
const SearchBox = styled.div`
    width: 100%;
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    border-style: solid;
    border-width: .0004cm;
    border-radius: 4px;
    border-color: #c2c2c2;
    display: flex;
    align-items: center;
    background-color: rgba(82, 0, 117, 0.8);

    :hover{
        border-color: #ffffff;
    }

    input {
        background-color: transparent;
        border: none;
        width: 100%;
        padding: 4px 8px 4px 8px;
        color: white;
    }

    input:focus {
        outline: none;
    }
    #text-input::placeholder {
        color: #c4c4c4;
    }
    // #text-input:hover::placeholder {
    //     color: #ffffff;
    // }
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
    border: 2px solid;
    border-radius: 30%;
    cursor: pointer;

    img {
        width: 100%;
        border-radius: 30%
    }
`