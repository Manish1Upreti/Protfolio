import Home from "../Home/Home";

function About(props){
    // instead of props we can destructure by {name, Salary} as About({name, Salary}) access them by just {name}
    
    return(
        <div>
            <h1>about me </h1>
            <h2> Name:{props.name}</h2>
            <h3>Salary:{props.Salary}</h3>
            {/* Home component inside about component */}
            <Home  value={props.price}/>
        </div>
    )   
}

const About1 = () => <h3>About Me 1</h3>;
const About2 = () => <h3>About Me 2</h3>;
const About3 = () => <h3>About Me 3</h3>;
const About4 = () => <h3>About Me 4</h3>;

export default About;
export {About1,About2,About3,About4};