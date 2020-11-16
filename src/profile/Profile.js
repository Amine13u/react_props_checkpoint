import React from "react";
import PropTypes from "prop-types";

const Profile = props => {
    return (   
    <React.Fragment> 
        <img className="photo" src={props.children} alt ='user_photo'/>   
        <h1>{props.fullName}</h1>
        <h3 style={{color : "rgb(55, 99, 114)"}}>{props.profession}</h3>
        <p>{props.bio}</p>
        <button style={{backgroundColor : "rgb(55, 99, 114)",
                        borderRadius : "5px",
                        color : "white",
                        padding : "5px"}} 
                onClick={() => props.handleName(props.fullName)}>Alert User</button> 
    </React.Fragment> 
    );
}

Profile.defaultProps = {
    profession : "Actor",
    bio : `John Doe was born on February 25, 1953 in Decatur, Illinois, USA as John Nommenson Duchac.
            He is an actor, known for Road House (1989), Ten Inch Hero (2007) and Pure Country (1992). 
            He has been married to Gigi Gonzalez since 1987. 
            They have three children. He was previously married to Exene Cervenka.`
};

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
};

export default Profile;