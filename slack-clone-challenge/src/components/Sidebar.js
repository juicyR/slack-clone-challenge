import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { sidebarItems } from '../data/sidebar-data';
import { Channels } from '../data/sidebar-data';
import db from '../firebase';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';

//prop meaning properties, to access the code done in app.js about the channels
function Sidebar(props) {
        //code for sweet alert prompt (Not from Slack clone video, but still very cool)

        const history = useHistory();

        const goToChannel = (id) => {
            if(id){
                console.log(id);
                history.push(`/room/${id}`)
            }
        }

        const promptName = () => {
            // swal("Channel Name:", { 
            //     content: "input", 
            // })
            swal({
                text: "Create A Channel",
                content: "input",
                buttons: {
                  cancel: "Close",
                  confirm: "Confirm",
                }
            })
            .then((value) => {
                db.collection('rooms').add({
                    name: `${value}`
                })
            });
        }

    return (
        <Container>
            <WorkspaceContainer>
                <b>
                    <Name>
                        CleverProgrammer
                    </Name>
                </b>
                <Tooltip title="New Message">
                    <NewMessage>
                        <AddCircleOutlineIcon />
                    </NewMessage>
                </Tooltip>
            </WorkspaceContainer>

            <MainChannels>
                {
                    //this information is set from the constant sidebar-data.js code, that will never change
                    sidebarItems.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <IconStyle>
                        <AddIcon onClick={promptName} />
                    </IconStyle>
                </NewChannelContainer>
                {
                    //map function is like switch statement, it goes through everything in the database, until it finds the specific thing its looking for
                    Channels.map(item => (
                    <ChannelList>
                            {
                                //this is to access the channel names, which are the items, from firebase, using the code made in app.js
                                props.rooms.map(item => (
                                    <Channel onClick={()=>goToChannel(item.id)}>
                                        # {item.name}
                                    </Channel>
                                ))
                            }
                    </ChannelList>
                    ))
                }
            </ChannelContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background: #3f0E40;
`
const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 20px 0 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
    border-top: 1px solid #532753;
`
const Name = styled.div`

`
const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    border-radius: 50%;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .5s all;
`
const MainChannels = styled.div`
    padding: 15px 0 0 0;
`
const MainChannelItem = styled.div`
    color: rgb(188 171 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 33px;
    align-items: center;
    padding: 0 0 0 19px;
    cursor: pointer;
    :hover {
        background: #350D36;
    }
`
const ChannelContainer = styled.div`
    color: rgb(188,171,188);
    padding: 19px 0 0 0;
`
const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
    padding-bottom: 5px;
`
const ChannelList = styled.div`
    
`
const Channel = styled.div`
    height: 33px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 19px;
    padding-right: 12px;
    :hover {
        background: #350D36;
    }
`
const IconStyle = styled.div`
    cursor: pointer;
    height: 24px;
    width: 24px;
    transition: 1s all;
    :hover {
        transform: rotate(90deg);
        color: white;
    }
`