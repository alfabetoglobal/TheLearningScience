//  src/components/Blog/Blog.js

import React, { useState, useEffect } from "react";
import "./Blog.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = () => {
  const [moreOptionsVisible, setMoreOptionsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

  const toggleMoreOptions = () => {
    setMoreOptionsVisible(!moreOptionsVisible);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="blog">
        <div className="blog-container">
          <header className="blog-header">
            <nav>
              <ul>
                <li>
                  <Link to="/Blog">
                    <button className="nav-button">All Posts</button>
                  </Link>
                </li>
                <li>
                  <Link to="/govt-job">
                    <button className="nav-button">Govt. Job Alerts</button>
                  </Link>
                </li>
                <li>
                  <Link to="/campus">
                    <button className="nav-button">Campus Placement</button>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.thelearningscience.com/blog/categories/biography">
                    <button className="nav-button">Biography</button>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.thelearningscience.com/blog/categories/interesting-facts">
                    <button className="nav-button">Interesting Facts</button>
                  </Link>
                </li>
                {isMobile && (
                  <li className="more" onClick={toggleMoreOptions}>
                    <button className="nav-button">More</button>
                    {moreOptionsVisible && (
                      <ul className="dropdown">
                        <li>
                          <Link to="/option1">R Programming Language</Link>
                        </li>
                        <li>
                          <Link to="/option2">Lifestyle</Link>
                        </li>
                        <li>
                          <Link to="/option3">Competitive Exams</Link>
                        </li>
                        <li>
                          <Link to="/option4">Misc</Link>
                        </li>
                        <li>
                          <Link to="/option5">World History | UPSC</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                )}
                <li>
                  <FaSearch />
                </li>
              </ul>
            </nav>
          </header>
          <main className="blog-main">
            <article className="blog-post">
              <img
                src="https://static.wixstatic.com/media/594faf_cccf96c90ede44b9a830ac656e680fce~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/594faf_cccf96c90ede44b9a830ac656e680fce~mv2.jpg"
                alt="Future of GPT"
              />
              <div className="blog-post-content">
                <div className="blog-post-meta">
                  <span>Admin</span>
                  <span>Jul 1</span>
                </div>
                <h2>The Future of GPT: An Analysis</h2>
                <div className="blog-post-stats">
                  <span>14 views</span>
                  <span>0 comments</span>
                </div>
              </div>
            </article>
            <article className="blog-post">
              <img
                src="https://static.wixstatic.com/media/594faf_3573b1bb99064d5a93651c0cc58f76a2~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/594faf_3573b1bb99064d5a93651c0cc58f76a2~mv2.jpg"
                alt="SSC CHSL Recruitment 2024"
              />
              <div className="blog-post-content">
                <div className="blog-post-meta">
                  <span>Admin</span>
                  <span>Jun 24</span>
                </div>
                <h2>
                  SSC Combined Graduate Level (CGL) Examination 2024: Apply
                </h2>
              </div>
            </article>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
