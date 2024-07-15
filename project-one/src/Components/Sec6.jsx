// // import React from 'react'
import './Sec6.css'

// const Sec6 = () => {
//   return (
//     <>
//     <div className="sec6">
//       <h1>Our Offerings</h1>
//       <div className="containerr">
//  <div className="flex-box6">
//         <h3>Professional Certificates in Machine Learning</h3>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolor.</p>
//     </div>
//     <div className="flex-box6">
//         <h3>Professional certificates in Full Stack Developer</h3>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, quibusdam.</p>
//     </div>
//     </div>
//       </div>
//     </>
//   )
// }

// export default Sec6



function Sec6() {
  return (

    <div className="container">
      <div className="row m-5">
        <h1 className="mb-5">Our Offerings</h1>
        <div className="col-6">


          <div className="card" style={{ width: "22rem" }}>
            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary">
              1
              <span className="visually-hidden">unread messages</span>
              
            </span>
            <div className="card-body">
              <h5 className="card-title">Professional Certification in Data Science & Machine Learning</h5>
              <p className="card-text">Explore out Data Science Certification Program, tailor made for aspring data scientists. Dive into specialized areas like machine and deep learning</p>
              <ul style={{ listStyleType: "none" }}>

                <li><input
                    type="checkbox"
                    // id="full-stack-development"
                    // value="Full Stack Development"
                    // checked={selectedCourse.includes("Full Stack Development")}
                    // onChange={handleCourseChange}
                  />
                  <label> Live Online Sessions</label></li>
                <li><input type="checkbox" />Live Online Sessions</li>
                <li><input type="checkbox" /> Earn a professional Certificate</li>
                <li><input type="checkbox" /> 5 & 8 Months customized designed curriculum</li>
                <li><input type="checkbox" /> Comprehessive interview preparation</li>
                <li><input type="checkbox" />  Access to 50+ hiring partners</li>
                {/* <li><i className="bi bi-check-square-fill text-success"></i> Access to 50+ hiring partners</li> */}

              </ul>
              <a href="#" className="btn btn-primary">More Info</a>

            </div>
          </div>

        </div>

        {/* <div className="col-6">


          <div className="card" style={{ width: "22rem" }}>
            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary">
              2
              <span className="visually-hidden">unread messages</span>
            </span>
            <div className="card-body">
              <h5 className="card-title">Professional Certification in Full Stack Developement </h5>
              <p className="card-text">Unlock top software developement opportunities with our Full Stack Developement course, emphasizing DSA skills</p>
              <ul style={{ listStyleType: "none" }}>

                <li><i className="bi bi-check-square-fill text-success"></i> Live Online Sessions</li>
                <li><i className="bi bi-check-square-fill text-success"></i> Earn a professional Certificate</li>
                <li><i className="bi bi-check-square-fill text-success"></i> 5 & 8 Months customized designed curriculum</li>
                <li><i className="bi bi-check-square-fill text-success"></i> Comprehessive interview preparation</li>
                <li><i className="bi bi-check-square-fill text-success"></i> Access to 50+ hiring partners</li>

              </ul>
              <a href="#" className="btn btn-primary">More Info</a>

            </div>
          </div>

        </div> */}

      </div>
    </div>
  );
}

export default Sec6;
