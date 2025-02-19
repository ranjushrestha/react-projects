import profilePic from './assets/ball.png'

function Card() {
    return(
        <div className="card">
            <img className= "card-image" src={profilePic} alt="profile picture" />
            <h2 className= "card-title" >Ranju shrestha</h2>
            <p className= "card-text">I work in a compliance department</p>

        </div>
    );
}

export default Card