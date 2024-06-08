import React , { useState } from 'react';
import './resume.css'; // Import your CSS file
import rajuResume from "../../assets/rajuResume.pdf";
import Learning from '../Learning/Learning';
import styled from 'styled-components';
import Modal from 'react-modal';

import {
  PASSWORD
} from "../../utils/constants";
const Resume = () => {
  const [isVisible,setVisible] = useState(false)
  const [isOpen,setOpen] = useState(false)
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = rajuResume; // Path to the PDF file
    link.download = 'Raju_Resume.pdf'; // Specify the desired file name
    link.click();
  };

  const onClick = () =>{
    //setVisible(!isVisible)
    setOpen(true);
  }


  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password) {
      if(PASSWORD === password){
        setVisible(true)
        onCancel(true)
      }else{
        setError('Incorrect Password');
      }
    } else {
      setError('Password cannot be empty');
    }
  };

  const onCancel = (fromSubmit = false) => {
    fromSubmit == true ? setVisible(true) : setVisible(false)
    setPassword('')
    setError('')
    setError('')
    setOpen(false)
  }

  return (    
    <div>
      <div class="btn-group" style={{width:'100%'}}>
        <button className="download-button" onClick={handleDownload}>
            <i className="fa fa-download"></i> Download Resume
        </button> 
        <button className="download-button" onClick={onClick}>
            <i></i> Learning
        </button> 
      </div>
    {isVisible && <Learning/>}

    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      style={customStyles}
      contentLabel="Password Verification"
    >
      <h2><Title>Enter Password</Title></h2>
      <form onSubmit={handleSubmit}>
        <label>
          <Input
            type="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Verify</Button>
        <Button type="button" onClick={onCancel} style={{ marginLeft: '10px', backgroundColor: '#6c757d' }}>
          Cancel
        </Button>
      </form>
    </Modal>

     </div>
  );
};



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,.05)',
  },
};

const Button = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
`;
const Title = styled.h2`
  color: #333;  // Set the text color for "Enter Password" here
  font-size: 20px;
`;





export default Resume;
