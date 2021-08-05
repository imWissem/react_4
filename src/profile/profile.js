import React from 'react';
import PropTypes from "prop-types";



const Profile =(props)=>{
 const{fullName, bio, profession, children, handleName} = props;
    return(
     <div className="Profile">
      
      <div  style={{width:"300px", height:"600px" ,textAlign:"reight", }}>  
        {children}
      <p style={{fontSize:"25px"}}>{fullName}</p>
      <p style={{fontSize:"20px"}}>{profession}</p>
      <p style={{fontSize:"15px"}}>{bio}</p>
      <button onClick={() => handleName(fullName)} style={{fontSize:"15px", color:"white", width:"100px",backgroundColor:"red"}}>Name</button>
      </div> 
      </div>
    )
}

Profile.defaultProps = {
  fullName: "Name",
  profession:"profession",
  bio: "bio",

}

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired
};


export default Profile;