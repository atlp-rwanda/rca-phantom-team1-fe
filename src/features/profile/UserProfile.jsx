import React, { useState } from 'react';


const UserProfile = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Make a request to update the user's profile with the new information
    }

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handleProfilePictureChange = (event) => {
        setProfilePicture(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} style={{
            position: 'absolute',
            width: '426px',
            height: '556px',
            left: '400px',
            top: '30px',
            background: '#FFFFFF',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

        }}>
            <div style={{
                position: 'absolute',
                // width: '155px',
                height: '30px',
                // left: '40px',
                top: '20px',
                fontWeight: '500',
                fontSize: '23px',
                lineHeight: '30px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',


                color: '#000000'
            }}>

                <p>Update Profile</p>

            </div>

            <div style={{
                position: 'absolute',
                left: '40px',
                top: '80px',


            }}>
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" type="text" value={fullName} placeholder="Enter Your Full Name" required onChange={handleFullNameChange} style={{
                    position: 'absolute',
                    width: '346px',
                    height: '56px',
                    top: '40px',
                    background: '#FFFFFF',
                    border: '2px solid #DEE2E6',
                    boxSizing: 'border-box',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    justifyContent: 'space-between',
                    marginBottom: '20px',


                }} />
            </div>
            <div style={{
                position: 'absolute',
                left: '40px',
                top: '200px',

            }}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={email} placeholder="Enter Your Email" required onChange={handleEmailChange} style={{
                    position: 'absolute',
                    width: '346px',
                    height: '56px',
                    top: '40px',
                    background: '#FFFFFF',
                    border: '2px solid #DEE2E6',
                    boxSizing: 'border-box',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    justifyContent: 'space-between',
                    marginBottom: '20px'
                }} />
            </div>
            <div style={
                {
                    position: 'absolute',
                    left: '40px',
                    top: '320px',
                }
            }>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input id="phoneNumber" type="tel" value={phoneNumber} placeholder="Enter Your Phone Number" required onChange={handlePhoneNumberChange} style={{

                    position: 'absolute',
                    width: '346px',
                    height: '56px',
                    top: '40px',
                    background: '#FFFFFF',
                    border: '2px solid #DEE2E6',
                    boxSizing: 'border-box',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    justifyContent: 'space-between',
                    marginBottom: '20px'
                }} />
            </div>
            {/* <div>
        <label htmlFor="profilePicture">Profile Picture</label>
        <input id="profilePicture" type="file" accept="image/*" onChange={handleProfilePictureChange} />
      </div> */}
            <button type="submit" style={{
                fontFamily: 'Roboto, sans-serif',
                backgroundColor: '#064E89',
                color: '#fff',
                border: 'none',
                padding: '20px',
                marginTop: '10px',
                cursor: 'pointer',
                position: 'absolute',
                width: '346px',
                height: '56px',
                left: '40px',
                top: '450px',
                borderRadius: '16px',
                fontSize: '16px',
                fontWeight: 'bold',
            }}>Save Changes</button>
        </form>
    );
}

export default UserProfile;