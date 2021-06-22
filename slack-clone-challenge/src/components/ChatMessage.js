import React from 'react'
import styled from 'styled-components';

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="profile_picture" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    Roberto Clark
                    <span>18/06/2021 13:31:10 PM</span>
                </Name>
                <Text>
                    Have you completed the slack clone, we need to move to more serious things!
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
    border-radius: 2px;
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
