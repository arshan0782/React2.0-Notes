import React from 'react'
import { useParams } from 'react-router-dom';


const ArshanDetails = () => {

  const params = useParams() 

console.log(params);
  return (
    <div className="details-container">
      <div className="card">
        <h2 className="name">Mohd Arshan</h2>
        <p className="role">Mern Stack Developer</p>

        <div className="info">
          <p><strong>🎓 College:</strong> ICFAI University (BCA)</p>
          <p><strong>📍 Location:</strong> Dehradun,India</p>
          <p><strong>💻 Skills:</strong> HTML, CSS, JavaScript, React.js, UI/UX,SQL</p>
          <p><strong>📧 Email:</strong> arshan@example.com</p>
        </div>

        <div className="about">
          <h2>About Me</h2>
          <p>
            I’m a passionate frontend developer who loves building modern, responsive
            web applications. I focus on creating clean UI and smooth user experiences
            using React and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ArshanDetails
