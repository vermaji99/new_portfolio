import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Development Intern</h4>
                <h5>DevTown</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Created responsive web pages using HTML, CSS, and JavaScript. Developed 10+ UI components including navigation bars and cards, while optimizing page load performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ServiceNow Platform Intern</h4>
                <h5>ServiceNow</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed hands-on labs on ServiceNow fundamentals and ITSM workflows. Configured workflows and modules to understand enterprise data handling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>AKTU</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Technology with a focus on Data Structures, Algorithms, DBMS, and Web Development. Maintained a GPA of 7.3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
