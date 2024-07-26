// import React from 'react'
// import { Span } from "next/dist/trace";
import "./Blog.css";
import Header from  '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import {Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
    <Header />
     <div id="all-containerr">
     <nav className="nav2">
        <ul className="scroll-bar">
            <li className="allpost">
                <Link to="https://www.thelearningscience.com/blog/dataanalystcourseforfreshers">All Post</Link>
                </li>
            <li className="govt-job">
                < Link to="https://www.thelearningscience.com/blog/categories/govt-job-post">Govt.job alert</Link>
            </li>
            <li className="campus-placement">
                <Link to="https://www.thelearningscience.com/blog/categories/placement-preparation">Campus Placement</Link>
            </li>
            <li className="biography">
      </li>
            <li className="interesting-fact">
           < Link to ="https://www.thelearningscience.com/blog/categories/interesting-facts"  >
           <span>Interesting-fact</span></Link>
            </li>
                   
            <li className="More">
                <span>More</span>
  </li>
  <li className="search-icon">
  <input placeholder="search" className="search-input" />
            <i className="fa-solid fa-magnifying-glass"></i>
            </li>
        </ul>
    </nav> 

        {/* ----------Container--------------------- */}
      <div className="container">
        
      <div className="left-div">
        <img src="https://static.wixstatic.com/media/594faf_cccf96c90ede44b9a830ac656e680fce~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/594faf_cccf96c90ede44b9a830ac656e680fce~mv2.webp" alt="Image" />
      </div>

      <div className="right-div">
        <div className="author">
        <div className="profile-icon">< img src="https://static.wixstatic.com/media/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg/v1/fill/w_32,h_32,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg" />
        </div>
        <div className="auth">
          <p>Admin<br/> July1</p>
        </div>
          
        </div>
        <Link to="https://www.thelearningscience.com/post/ssc-combined-graduate-level-cgl-examination-2024-apply-online-now"><h3>The Future of GPT: An Analysis</h3></Link>
        <div className="stats">
          <span>9 views</span>
          <span>0 comments</span>
        </div>
      </div>
    </div>
    
    {/* -------one----- */}
    <div className="container">
      <div className="left-div">
        <img src="https://static.wixstatic.com/media/594faf_3573b1bb99064d5a93651c0cc58f76a2~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/594faf_3573b1bb99064d5a93651c0cc58f76a2~mv2.jpg" alt="Image" />
      </div>

       <div className="right-div">
        <div className="author">
        <span className="profile-icon">< img src="https://static.wixstatic.com/media/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg/v1/fill/w_32,h_32,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg" /></span>
        <div className="auth">
          <p>Admin<br/> July1</p>
        </div>
        
        </div>
        <Link to="https://www.thelearningscience.com/post/ssc-combined-graduate-level-cgl-examination-2024-apply-online-now"><h3>SSC Combined Graduate Level (CGL) Examination 2024: Apply Online Now!</h3></Link>
        {/* <h1>The Future of GPT: An Analysis</h1> */}
        {/* <h1>The Future of GPT: An Analysis</h1> */}
        <div className="stats">
          <span>9 views</span>
          <span>0 comments</span>
        </div>
      </div>
    </div> 

{/* ---Two--- */}
    <div className="container">
      <div className="left-div">
        <img src="https://static.wixstatic.com/media/594faf_3573b1bb99064d5a93651c0cc58f76a2~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/594faf_3573b1bb99064d5a93651c0cc58f76a2~mv2.jpg" alt="Image" />
      </div>
      <div className="right-div">
        <div className="author">
        <span className="profile-icon">< img src="https://static.wixstatic.com/media/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg/v1/fill/w_32,h_32,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg" /></span>
        <div className="auth">
          <p>Admin<br/> July1</p>
        </div>
        </div>
        <Link to="https://www.thelearningscience.com/post/essential-details-and-guidelines-for-ssc-chsl-10-2-recruitment-2024"><h3>Essential Details and Guidelines for SSC CHSL 10+2 Recruitment 2024</h3></Link>
        <div className="stats">
          <span>9 views</span>
          <span>0 comments</span>
        </div>
      </div>
    </div>
    
    {/* ------Three------ */}
    <div className="container">
      <div className="left-div">
        <img src="https://static.wixstatic.com/media/594faf_cccf96c90ede44b9a830ac656e680fce~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/594faf_cccf96c90ede44b9a830ac656e680fce~mv2.webp" alt="Image" />
      </div>
      <div className="right-div">
        <div className="author">
        <span className="profile-icon">< img src="https://static.wixstatic.com/media/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg/v1/fill/w_32,h_32,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg" /></span>
        <div className="auth">
          <p>Admin<br/> July1</p>
        </div>
        </div>
        {/* <h1>The Future of GPT: An Analysis</h1> */}
        <div className="stats">
          <span>9 views</span>
          <span>0 comments</span>
        </div>
      </div>
    </div>

    {/* --------Four--------- */}
    <div className="container">
      <div className="left-div">
        <img src="https://static.wixstatic.com/media/11062b_9aeb82c30e9742bcadc79b3dc8eb9fdb~mv2.jpeg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/11062b_9aeb82c30e9742bcadc79b3dc8eb9fdb~mv2.jpeg" alt="Image" />
      </div>
      <div className="right-div">
        <div className="author">
        <span className="profile-icon">< img src="https://static.wixstatic.com/media/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg/v1/fill/w_32,h_32,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg" /></span>
        <div className="auth">
          <p>Admin<br/> July1</p>
        </div>
        </div>
        {/* <h1>The Future of GPT: An Analysis</h1> */}
        <div className="stats">
          <span>9 views</span>
          <span>0 comments</span>
        </div>
      </div>
    </div>

  {/* -----------Five---------- */}
<div className="container">
      <div className="left-div">
        <img src="https://static.wixstatic.com/media/594faf_e78fe4b5f26c4e179165c10df537afae~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/594faf_e78fe4b5f26c4e179165c10df537afae~mv2.jpg" alt="Image" />
      </div>
       <div className="right-div">
        <div className="author">
        <span className="profile-icon">< img src="https://static.wixstatic.com/media/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg/v1/fill/w_32,h_32,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg" /></span>
        <div className="auth">
          <p>Admin<br/> July1</p>
        </div>
        </div>
        {/* <h1>The Future of GPT: An Analysis</h1>  */}

        
        <div className="stats">
        <div className="line">
        </div>
          <span>9 views</span>
          <span>0 comments</span>
        </div>
      </div>
    </div>

    {/* -----Six------ */}
    <div className="container">
      <div className="left-div">
        <img src="https://static.wixstatic.com/media/594faf_b9cc0292a5f040b4a98a6c1458126418~mv2.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95,enc_auto/594faf_b9cc0292a5f040b4a98a6c1458126418~mv2.png" alt="Image" />
      </div>
       <div className="right-div">
        <div className="author">
        <span className="profile-icon">< img src="https://static.wixstatic.com/media/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg/v1/fill/w_32,h_32,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg" /></span>
        <div className="auth">
          <p>Admin<br/> July1</p>
        </div>
        </div>
        {/* <h1>The Future of GPT: An Analysis</h1>  */}
        <div className="stats">
          <span>9 views</span>
          <span>0 comments</span>
        </div>
      </div>
    </div>
    
</div>
    
<Footer />
    </>
  )
}

export default Blog;