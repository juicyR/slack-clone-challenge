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
                        <SendIcon />
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
    padding: 0.5em;

    form {
        height: 42px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input {
        width: 100%;
        border: none;
    }

    input:focus {
        outline: none;
    }
`

const SendButton = styled.div`
    margin-left: 8px;
`
