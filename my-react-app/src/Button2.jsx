import Button from "./Button";


function Buttons() {
     
    // const handleClick = () => console.log("OUCH");
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);


    // return(<button onClick={() => handleClick2("Adina")}>Click me</button>) 

// Another
    let count = 0;

    const handleClick = (name) => {
        if(count < 3) {
            count ++;
            console.log(`${name} you clicked me ${count} time/s`);
        }

        else {
            console.log(`${name} stop clicking you idoit`);
        }
    };

    return(<button onClick={() => handleClick("Raju")}>Click me</button>)

// Event Parameter
        // const handleClick = (e) => e.target.textContent ="OUCH!";

        // return (<button onDoubleClick={(e) => handleClick(e)}>Click me</button>)


}

export default Buttons