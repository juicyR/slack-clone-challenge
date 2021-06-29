import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';
import db from '../firebase';
import { useParams } from 'react-router-dom';

function chat() {

    let { channelId } = useParams();
    const [ channel , setChannel ] = useState([]);
    const [messages, setMessages] = useState([])

    const getMessage = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        orderBy('timestamp', 'asc')
        onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map((doc)=>doc.data());
            console.log(messages);
            setMessages(messages);
        })
    }

    const getChannel = () => {
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data());
        })
    }

    useEffect(()=>{
        getChannel();
        getMessages();
    }, [channelId])

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # {channel.name}
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
                <ChatMessage />
            </MessageContainer>
            <ChatInput />
        </Container>
    )
}

export default chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
    background-image: url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700320362.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`

const Header = styled.div`
    padding: 0px 20px 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(83, 39, 83, 0.13);
    background: rgba(237, 237, 237, 0.7);
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

    :hover {
        cursor: pointer;
    }
`

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060;
`

const MessageContainer = styled.div`
    
`