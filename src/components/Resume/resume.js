import React from 'react';
import './resume.css'; // Import your CSS file
import rajuResume from "../../assets/rajuResume.pdf";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = rajuResume; // Path to the PDF file
    link.download = 'Raju_Resume.pdf'; // Specify the desired file name
    link.click();
  };

  return (
    <div className="resume-button-container">
      <button className="download-button" onClick={handleDownload}>
        <i className="fa fa-download"></i> Download Resume
      </button>
    </div>
  );
};

export default Resume;
