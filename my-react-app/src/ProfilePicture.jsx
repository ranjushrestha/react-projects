
function ProfilePicture() {

    const imageUrl = './src/assets/ball.png';

    // const handleClick = () => console.log("OUCH!");

    // return(<img onClick={handleClick} src={imageUrl}></img>);

    // Event Parameter (event objects)
        const handleClick = (e) => e.target.style.display = "none";
        
        return(<img onClick={(e) => handleClick(e)} src= {imageUrl}></img>)


}

export default ProfilePicture