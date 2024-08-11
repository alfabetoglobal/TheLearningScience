import React, { useState } from "react";
import "./Blog.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = () => {
  const [moreOptionsVisible, setMoreOptionsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVisible, setSearchVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const blogPosts = [
    {
      img: "https://static.wixstatic.com/media/594faf_cccf96c90ede44b9a830ac656e680fce~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/594faf_cccf96c90ede44b9a830ac656e680fce~mv2.jpg",
      title: "The Future of GPT: An Analysis",
      meta: "Admin, Jul 1",
      stats: "14 views, 0 comments",
    },
    {
      img: "https://static.wixstatic.com/media/594faf_3573b1bb99064d5a93651c0cc58f76a2~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/594faf_3573b1bb99064d5a93651c0cc58f76a2~mv2.jpg",
      title: "SSC Combined Graduate Level (CGL) Examination 2024: Apply",
      meta: "Admin, Jun 24",
      stats: "20 views, 3 comments",
    },
    {
      img: "https://static.wixstatic.com/media/594faf_3573b1bb99064d5a93651c0cc58f76a2~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/594faf_3573b1bb99064d5a93651c0cc58f76a2~mv2.jpg",
      title:
        "Essential Details and Guidelines for SSC CHSL 10+2 Recruitment 2024",
      meta: "Admin, Apr 10",
      stats: "38 views, 0 comments",
    },
    {
      img: "https://static.wixstatic.com/media/11062b_9aeb82c30e9742bcadc79b3dc8eb9fdb~mv2.jpeg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/11062b_9aeb82c30e9742bcadc79b3dc8eb9fdb~mv2.jpeg",
      title: "Unveiling Tomorrow: Navigating Data Mines for Future Insights",
      meta: "Admin, Feb 16",
      stats: "11 views, 0 comments",
    },
    // Add more blog posts here...
  ];

  const toggleMoreOptions = () => {
    setMoreOptionsVisible(!moreOptionsVisible);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <li className="more" onClick={toggleMoreOptions}>
                  <button className="nav-button" onClick={toggleDropdown}>
                    More
                  </button>
                  {isDropdownOpen && (
                    <div
                      className={`fullscreen-dropdown ${
                        isDropdownOpen ? "show" : ""
                      }`}
                    >
                      <div className="dropdown-options">
                        <span className="close-button" onClick={closeDropdown}>
                          &times;
                        </span>
                        <a href="#option1">R Programming Language</a>
                        <a href="#option2">Lifestyle</a>
                        <a href="#option3">Competitive Exams</a>
                        <a href="#option4">Misc</a>
                        <a href="#option5">World History | UPSC</a>
                      </div>
                    </div>
                  )}
                </li>
                <li onClick={toggleSearch} className="search9">
                  <FaSearch />
                </li>
                {searchVisible && (
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    className="search-input"
                  />
                )}
              </ul>
            </nav>
          </header>
          <main className="blog-main">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <article className="blog-post" key={index}>
                  <img src={post.img} alt={post.title} />

                  <div className="blog-post-content">
                    <div className="blog-post-meta">
                      <span>{post.meta}</span>
                    </div>
                    <h2>{post.title}</h2>
                    <div className="blog-post-stats">
                      <span>{post.stats}</span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="Blog-last">
                <h4 className="next-line">
                  Looks like we couldn’t find what you’re looking for. Try
                  another search.
                </h4>
              </div>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
