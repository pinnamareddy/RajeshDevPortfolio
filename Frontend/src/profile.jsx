import ProfileImage from './assets/profile.jpg';
import Resume from '/public/Resume.pdf';


const profile = () => {
  const openPdf = () => {
  window.open(Resume, "_blank");
};
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Hello! I am</h1>
        <h1>P M V S RAJESH</h1>
        <p>Full Stack Developer. Delivering Innovative Solutions, Powered by Technology.</p>
        <div className='resume-button' onClick={openPdf}>Get resume</div>
      </div>
      <div >
        <img src={ProfileImage} className="profile-image" alt="Profile Picture" />
      </div>
    </div>
  );
}

export default profile;