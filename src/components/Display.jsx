function Display({ cvData }) {
    return (
      <div className="display">
        <h2>CV Preview</h2>
        <div className="output">
          <h3>General Information</h3>
          <p><strong>Name:</strong> {cvData.generalInfo.name}</p>
          <p><strong>Email:</strong> {cvData.generalInfo.email}</p>
          <p><strong>Phone:</strong> {cvData.generalInfo.phone}</p>
  
          <h3>Education</h3>
          <p><strong>School:</strong> {cvData.education.school}</p>
          <p><strong>Title of Study:</strong> {cvData.education.title}</p>
          <p><strong>Date of Study:</strong> {cvData.education.date}</p>
  
          <h3>Experience</h3>
          <p><strong>Company:</strong> {cvData.experience.company}</p>
          <p><strong>Position:</strong> {cvData.experience.position}</p>
          <p><strong>Responsibilities:</strong> {cvData.experience.responsibilities}</p>
          <p><strong>From:</strong> {cvData.experience.from}</p>
          <p><strong>Until:</strong> {cvData.experience.until}</p>
        </div>
      </div>
    );
  }
  
  export default Display;
  