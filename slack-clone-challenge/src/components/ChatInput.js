import React from 'react'
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Type Message Here..." />
                    <SendButton>
                        <Send />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding: 0px 20px 24px 20px;
`

const InputContainer = styled.div`
    border: 1px solid #8d8d8e;
    border-radius: 4px;

    form {
        height: 42px;
        display: flex;
        align-items: center;
        padding-left: 10px;

        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }
    
        input:focus {
            outline: none;
        }
    }
`

const SendButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #007a5a;
    width: 32px;
    height: 32px;
    border-radius: 2px;
    margin: 0px 5px 0px 10px;
    cursor: pointer;
    transition: .1s ease-in;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background: #148567;
    }

`

const Send = styled(SendIcon)`
    color: #ffffff;
`