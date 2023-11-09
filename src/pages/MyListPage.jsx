import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../images/key_logo.svg';
import MyQList from '../components/MyQList';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Wrapper = styled.div`
    background-color: #262626;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    //padding: 5vh 7vw 0 7vw;
`
const Title = styled.div`
    color: #FFF;
    font-weight: 700;
    margin: 1vh 0 3vh 0;
    font-size: 1.2rem;
    padding-left: 7vw;
`
const List = styled.div`
    padding: 0 7vw 0 7vw;
`

let question = [
    {number: 1, question: "1번질문", isanswer: true, answer: '1번답변'},
    {number: 2, question: "2번질문", isanswer: true, answer: '2번답변'},
    {number: 3, question: "3번질문", isanswer: false, answer: ''},
    {number: 4, question: "4번질문", isanswer: false},
    {number: 5, question: "5번질문", isanswer: false},
    {number: 6, question: "6번질문", isanswer: false},
    {number: 7, question: "7번질문", isanswer: false},
];

const MyListPage = () => {
    const navigate = useNavigate();
    const questions = useState([]);
    console.log(question[0].answer);

    const posttheme = () => {
        axios.post('')
        .then(

        )
    };

    useEffect(() => {
        //posttheme();
        //getqlist();
    });

    return (
        <Wrapper>
            <img src={logo} style={{padding: "5vh 0 0 7vw"}}/>
            <Title>사용자님의 2023 회고록</Title>
            <List>
            {question.map(list => (
                <MyQList key={list.id} number={list.number} question={list.question} isanswer={list.isanswer} answer={list.answer}/>
            ))}
            </List>
        </Wrapper>
    );
};

export default MyListPage;