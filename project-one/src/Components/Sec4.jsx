// // import React from 'react'
// // import './Sec4.css'
// // const Sec4 = () => {
// //   return (
// //     <>
// //     <div className="sec4">
// //     <h3>LEARN WHAT THE INDUSTRY DEMANDS</h3>
 
    
// //     </div>

// //     </>
// //   )
// // }

// // export default Sec4
// import React, { useState } from 'react';

// import './Sec4.css';

// function Sec4() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     courses: []
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setFormData((prevState) => {
//         if (checked) {
//           return { ...prevState, courses: [...prevState.courses, value] };
//         } else {
//           return { ...prevState, courses: prevState.courses.filter(course => course !== value) };
//         }
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Full Name (Required)</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <br/>

//         <label htmlFor="email">Email (Required)</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
// <br/>
//         <label htmlFor="phone">Contact Number (Required)</label>
//         <input
//           type="tel"
//           id="phone"
//           name="phone"
//           placeholder="Enter your phone number"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//         />
//         <br/>

//         <div className="checkbox-group">
//           <label>Select Course (Required)</label>
//           <div>
//             <input
//               type="checkbox"
//               id="fullstack"
//               name="course"
//               value="Full Stack Development"
//               checked={formData.courses.includes('Full Stack Development')}
//               onChange={handleChange}
//             />
//             <label htmlFor="fullstack">Full Stack Development</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="cloud"
//               name="course"
//               value="Cloud Computing"
//               checked={formData.courses.includes('Cloud Computing')}
//               onChange={handleChange}
//             />
//             <label htmlFor="cloud">Cloud Computing</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="ai"
//               name="course"
//               value="Artificial Intelligence"
//               checked={formData.courses.includes('Artificial Intelligence')}
//               onChange={handleChange}
//             />
//             <label htmlFor="ai">Artificial Intelligence</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="blockchain"
//               name="course"
//               value="Blockchain Technology"
//               checked={formData.courses.includes('Blockchain Technology')}
//               onChange={handleChange}
//             />
//             <label htmlFor="blockchain">Blockchain Technology</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="datascience"
//               name="course"
//               value="Data Science"
//               checked={formData.courses.includes('Data Science')}
//               onChange={handleChange}
//             />
//             <label htmlFor="datascience">Data Science</label>
//           </div>
//         </div>

//         <button type="submit" className="submit-btn">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Sec4;
