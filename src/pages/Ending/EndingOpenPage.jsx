import React from 'react';
import styled from 'styled-components';
import keyhold from '../../images/keyhold.svg';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #EFD33C;
    text-align: center;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const Title = styled.div`
    color: #000;
    text-align: center;
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 10vh;
`
const Txt = styled.div`
    color: #262626;
    font-weight: 500;
    font-size: 1.1rem;
    margin-top: 10vh;
`

const EndingPage = () => {
    const navigate = useNavigate();

    return (
        <Wrapper onClick={() => {
            navigate('/')
        }}>
            <div style={{margin: "auto"}}>
            <Title>사용자님의 2023년 열기</Title>
            <img src={keyhold}/>
            <Txt>화면을 터치해주세요.</Txt>
            </div>
        </Wrapper>
    );
};

export default EndingPage;