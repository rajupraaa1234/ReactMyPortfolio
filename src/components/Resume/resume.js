import React from 'react';
import './resume.css'; // Import your CSS file
import sanjeetResume from "../../assets/sanjeet_resume.pdf";

const Resume = () => {
  const handleDownload = () => {
    // Implement your download logic here
    // Create an anchor element
    const link = document.createElement('a');
    link.href = sanjeetResume; // Path to the PDF file
    link.download = 'Sanjeet_Resume.pdf'; // Specify the desired file name

    // Simulate a click on the anchor to trigger the download
    link.click();
  };

  return (
    <div className="resume-button-container">
        <button className="download-button" onClick={handleDownload}>
            <i className="fa fa-download"></i> Download Resume
        </button>
    </div>

    // <button className="download-button" onClick={handleDownload}>
    //   <i className="fa fa-download"></i> Download Resume
    // </button>
  );
};

export default Resume;
