import React from "react";
import "./learning.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from 'styled-components';
import { learningData } from "../../data/learningLink";


const Learning = () => {
 
   const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
   }
  return (
    <div id="contact" className="reachme-container">
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1 className="contactPageTitle">Learning</h1>
    <ButtonGroupContainer>
        {learningData &&
          learningData.map((learning) => (
            <Button onClick={()=>{openInNewTab(learning.link)}}>{learning.contentName}</Button>
          ))}
    </ButtonGroupContainer>
    </div>
  );
};


const ButtonGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 20px;
`;

const Button = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;
  min-width: 150px;
  margin: 5px;
  text-align: center;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004494;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

export default Learning;
