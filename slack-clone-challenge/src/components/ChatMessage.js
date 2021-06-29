import React from 'react'
import styled from 'styled-components';

function ChatMessage({ text, name, image, timestamp }) {
    return (
        <Container>
            <UserAvatar>
                <img src={image} alt="profile_picture" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;

    :hover {
        background: rgba(245, 245, 245, 0.8);
    }
`

const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 6px;
    overflow: hidden;
    margin-right: 10px;

    img {
        width: 100%;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    font-family: Segoe UI;

    span {
        font-size: 13px;
        font-weight: 400;
        color: rgba (97, 96, 97);
        margin-left: 8px;
    }
`

const Text = styled.span``
