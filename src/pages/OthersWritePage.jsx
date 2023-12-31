import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "../images/key_logo.svg";
import christmastree from "../images/3dicon/christmastree.png";
import checkbutton from "../images/3dicon/checkbutton_yellow.png";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: #262626;
  align-items: center;
  //text-align: center;
`;

const Logo = styled.div`
  position: absolute;
  right: 0px;
`;
const Title = styled.div`
  color: #efec69;
  font-weight: 700;
  margin: 0 0 1vh 10vw;
  font-size: 1.5rem;
`;
const TitleTxt1 = styled.div`
  color: #fff;
  font-weight: 400;
  margin: 3vh 0 0 11vw;
  font-size: 0.9rem;
`;

const TitleTxt2 = styled.div`
  color: #fff;
  font-weight: 500;
  margin: 1vh 0 3vh 11vw;
  font-size: 0.6rem;
`;

const QuestionList = styled.div`
  background-color: #fff;
  color: #262626;
  width: 81vw;
  height: 5.5vh;
  line-height: 5.5vh;
  text-align: center;
  font-size: 0.8rem;
  margin: 1.5vh auto;
  border-radius: 41.85px;
`;

const QuestionAnswer = styled.div`
  padding-top: 1vh;
  > textarea {
    width: 81vw;
    height: 25vh;
    margin: 1.5vh 10vw;
    resize: none;
    border: none;
    outline: none;
    background-color: #262626;
    color: #fff;
  }
  > textarea::placeholder {
    color: #d9d9d9;
    font-size: 0.8rem;
  }
`;

const SubmitButton = styled.button`
  padding-top: 100vh;
`;

const OthersWritePage = () => {
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const QInfo = location.state;
  const navigate = useNavigate();

  /* 이름 얻기 */
  const getUserdata = () => {
    axios
      .get("http://localhost:8000/accounts/auth/", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setUsername(response.data.user.username);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          console.error("Error fetching cards: ", error);
        } else {
          console.error("Error fetching cards: ", error);
        }
      });
  };

  /* 답변 저장 */
  const onChangeAnswer = (e) => {
    const answer = e.target.value;
    setAnswer(answer);
  };

  const onCheck = (e) => {
    let UserInfo = {
      question: QInfo.questionNum,
      question_text: QInfo.question,
      content: answer,
    };

    console.log("QInfo");
    console.log(QInfo);
  };

  /*   answer 체크하고 보내기 각각 기능 
  const sendAnswer = () => {
    axios
      .get("http://localhost:8000/publicfarewell/")
      .then((response) => {
        const QList = response.data;
        console.log(QList);
      })
      .catch((error) => {
        console.error("Sending Answer Error:", error);
      });
  };
 */

  /* 답변 보내기 */
  const onClick = (e) => {
    let UserInfo = {
      question: QInfo.question,
      /*       question: QInfo.questionNum.toString(), */
      /*       question_text: QInfo.question, */
      content: answer,
    };

    /*    axios({
      url: `http://127.0.0.1:8000/publicfarewell`,
      method: "post",
      body: {
        UserInfo,
      },
    }) */
    axios
      .post("http://127.0.0.1:8000/publicfarewell/", {
        content: answer,
        question: QInfo.question,
      })
      .then((response) => {
        console.log("===================");
        console.log("UserInfo 전송");
        console.log(UserInfo);
        navigate("/user/:username/edit");
      })
      .catch((error) => {
        console.log("===================");
        console.log("UserInfo 에러");
        console.log(error);
        console.log("UserInfo");
        console.log(UserInfo);
        navigate("/user/:username/edit");
      });
  };

  useEffect(() => {
    getUserdata();
  }, []);

  return (
    <Wrapper>
      <Logo>
        <img src={christmastree} style={{ width: "42vw", height: "16vh" }} />
      </Logo>
      <img src={logo} style={{ display: "flex", padding: "5vh 0 0 7vw" }} />
      <TitleTxt1 onClick={onCheck}>{username}님에게 한마디</TitleTxt1>
      <Title>질문 작성하기</Title>
      <TitleTxt2>질문에 답변하여 {username}님의 회고록을 채워주세요.</TitleTxt2>
      <QuestionList>{QInfo.question}</QuestionList>
      <QuestionAnswer>
        <textarea
          type="text-area"
          name="answer"
          value={answer}
          onChange={onChangeAnswer}
          placeholder="답변을 작성해주세요."
          required
        />
      </QuestionAnswer>
      <SubmitButton
        onClick={onClick}
        style={{
          padding: "4vh 0vw 0vh 65vw",
          border: "none",
          background: "transparent",
        }}
      >
        <img src={checkbutton} style={{ width: "30vw", height: "10vh" }} />
      </SubmitButton>
    </Wrapper>
  );
};
export default OthersWritePage;
