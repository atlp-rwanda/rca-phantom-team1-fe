import React, { useState } from "react";

function ProfileUpdateForm({ user }) {
  // const [fullName, setFullName] = useState(user.fullName);
  // const [email, setEmail] = useState(user.email);
  // const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  // const [profilePicture, setProfilePicture] = useState(user.profilePicture);

  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("John@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("0788657897");
  // const [profilePicture, setProfilePicture] = useState(user.profilePicture);

  const handleSubmit = (event) => {
    event.preventDefault();
    // logic for updating user profile
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="full-name-input">Full Name</label>
        <input
          type="text"
          id="full-name-input"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email-input">Email</label>
        <input
          type="email"
          id="email-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone-number-input">Phone Number</label>
        <input
          type="tel"
          id="phone-number-input"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>
      {/* <div>
        <label htmlFor="profile-picture-input">Profile Picture</label>
        <input
          type="file"
          id="profile-picture-input"
          onChange={(event) => setProfilePicture(event.target.files[0])}
        />
      </div> */}
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default ProfileUpdateForm;
