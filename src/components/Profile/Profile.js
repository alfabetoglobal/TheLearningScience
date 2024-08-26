// src/components/Profile/Profile.js
import React from "react";
import "./Profile.css";

const Profile = () => {
  // Replace with actual user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    imageUrl: "https://via.placeholder.com/150",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    phone: "+1 234 567 890",
    address: "123 Main St, Apt 4B, Anytown, CA 12345",
    socialMedia: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.imageUrl} alt="User" className="profile-image" />
        <h1>{user.name}</h1>
      </div>
      <div className="profile-details">
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
        <p>
          <strong>Bio:</strong> {user.bio}
        </p>
        <div className="social-media-links">
          <p>
            <strong>Social Media:</strong>
          </p>
          <ul>
            <li>
              <a
                href={user.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={user.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href={user.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
