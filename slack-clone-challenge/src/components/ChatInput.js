import React from 'react';
import { Tooltip } from '@material-ui/core';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import SubjectIcon from '@material-ui/icons/Subject';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function ChatInput() {

    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Type Message Here..." />
                </form>
                <TextEdit>
                    <Icons>

                        <Tooltip title="LOL 😂 These don't work. Don't bother, they're just for show.">
                            <IconOneContainer>
                                <IconOne/>
                            </IconOneContainer>
                        </Tooltip>

                        <Tooltip title="LOL 😂 These don't work. Don't bother, they're just for show.">
                            <IconTwoContainer>
                                <IconTwo />
                            </IconTwoContainer>
                        </Tooltip>

                        <Tooltip title="LOL 😂 These don't work. Don't bother, they're just for show.">
                            <IconThreeContainer>
                                <IconThree />
                            </IconThreeContainer>
                        </Tooltip>

                        <Tooltip title="LOL 😂 These don't work. Don't bother, they're just for show.">
                            <CodeIconContainer>
                                <CodeIcone />
                            </CodeIconContainer>
                        </Tooltip>

                        <Tooltip title="LOL 😂 These don't work. Don't bother, they're just for show.">
                            <LinkIconContainer>
                                <LinkIcone />
                            </LinkIconContainer>
                        </Tooltip>

                        <Tooltip title="LOL 😂 These don't work. Don't bother, they're just for show.">
                            <OrderedList>
                                <FormatListNumberedIcone />
                            </OrderedList>
                        </Tooltip>

                        <Tooltip title="LOL 😂 These don't work. Don't bother, they're just for show.">
                            <UnorderedList>
                                <FormatListBulletedIcone />
                            </UnorderedList>
                        </Tooltip>

                        <Tooltip title="LOL 😂 These don't work. Don't bother, they're just for show.">
                            <BlockQuote>
                                <SubjectIcone />
                            </BlockQuote>
                        </Tooltip>
                    </Icons>



                    <IconsTwo>
                        <Tooltip title="LOL 😂 These don't work. Don't bother, they're just for show.">
                            <TextButton>
                                <FormatSizeIcone />
                            </TextButton>
                        </Tooltip>

                        <Tooltip title="LOL 😂 These don't work. Don't bother, they're just for show.">
                            <AtButton>
                                <AlternateEmailIcone />
                            </AtButton>
                        </Tooltip>

                        <Tooltip title="Hold the Windows key down and press either the period (.) or semicolon (;) key to use emoji in any app.">
                            <IconFourContainer>
                                <IconFour />
                            </IconFourContainer>
                        </Tooltip>

                        <Tooltip title="LOL 😂 These don't work. Don't bother, they're just for show.">
                            <AttachButton>
                                <AttachFileIcone />
                            </AttachButton>
                        </Tooltip>

                        <SendButton>
                            <Send />
                        </SendButton>
                    </IconsTwo>
                </TextEdit>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding: 0px 20px 24px 20px;
`

const InputContainer = styled.div`
    border: 1.9px solid #8d8d8e;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    height: 84px;

    form {
        height: 42px;
        display: flex;
        align-items: center;
        padding: 0 10px 0 10px;
        border-bottom: 1px solid rgba(83, 39, 83, 0.13);
        background: white;

        input {
            flex: 1;
            border: none;
            font-size: 13px;
            word-wrap: break-word;
            word-break: break-all;
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
    border-radius: 4px;
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

const TextEdit = styled.div`
    height: 42px;
    display: flex;
    align-items: center;
    padding: 5px 10px 5px 10px;
    justify-content: space-between;
    background: #f7f7f7;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
`

const IconOneContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    font-style: none;
    transition: .1s ease-in;
    margin-right: 10px;

    :hover {
        background: #e8e8e8;
    }

`

const IconOne = styled(FormatBoldIcon)`
    width: 18px;
`

const IconTwoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    transition: .1s ease-in;


    :hover {
        background: #e8e8e8;
    }
`

const IconTwo = styled(FormatItalicIcon)`
    width: 18px;
`

const IconThreeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    transition: .1s ease-in;
    margin-right: 10px;


    :hover {
        background: #e8e8e8;
    }
`

const IconThree = styled(StrikethroughSIcon)`
    width: 18px;
`

const CodeIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    transition: .1s ease-in;
    margin-right: 10px;


    :hover {
        background: #e8e8e8;
    }
`

const CodeIcone = styled(CodeIcon)`
    width: 18px;
`

const LinkIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    transition: .1s ease-in;
    margin-right: 10px;


    :hover {
        background: #e8e8e8;
    }
`

const LinkIcone = styled(LinkIcon)`
    width: 18px;
`

const OrderedList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    transition: .1s ease-in;
    margin-right: 10px;


    :hover {
        background: #e8e8e8;
    }
`

const FormatListNumberedIcone = styled(FormatListNumberedIcon)`
    width: 18px;
`

const UnorderedList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    transition: .1s ease-in;
    margin-right: 10px;


    :hover {
        background: #e8e8e8;
    }
`

const FormatListBulletedIcone = styled(FormatListBulletedIcon)`
    width: 18px;
`

const BlockQuote = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    transition: .1s ease-in;
    margin-right: 10px;


    :hover {
        background: #e8e8e8;
    }
`

const SubjectIcone = styled(SubjectIcon)`
    width: 18px;
`

const IconsTwo = styled.div`
    display: flex;
    align-items: center;
`

const TextButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    transition: .1s ease-in;
    margin-right: 10px;


    :hover {
        background: #e8e8e8;
    }
`

const FormatSizeIcone = styled(FormatSizeIcon)`
    width: 18px;
`

const AtButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    transition: .1s ease-in;
    margin-right: 10px;


    :hover {
        background: #e8e8e8;
    }
`

const AlternateEmailIcone = styled(AlternateEmailIcon)`
    width: 18px;
`

const AttachButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    transition: .1s ease-in;
    margin-left: 10px;
    margin-right: 10px;


    :hover {
        background: #e8e8e8;
    }
`

const AttachFileIcone = styled(AttachFileIcon)`
    width: 18px;
`

const IconFourContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    transition: .1s ease-in;

    :hover {
        background: #e8e8e8;
    }
`

const IconFour = styled(SentimentSatisfiedOutlinedIcon)`
    width: 18px;
`