import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from '../components/ChatInput';

function chat() {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # programming-is-amazing
                    </ChannelName>
                    <ChannelInfo>
                        Code is great, and if you can express that in code, you are great as well.
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info />
                </ChannelDetails>
            </Header>
            <MessageContainer>

            </MessageContainer>
            <ChatInput />
        </Container>
    )
}

export default chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
`

const Header = styled.div`
    padding: 0px 20px 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(83, 39, 83, 0.13);
`

const Channel = styled.div`

`

const ChannelName = styled.div`
    text-transform: lowercase;
    font-weight: 700;
`

const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`

const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060;
`

const MessageContainer = styled.div`
    
`