import React, {useState} from "react"; //useState = Hook (for using React features without class)
import Advertisment from "./Advertisment";

function handleAdd() {
    console.log("Clicked");
}

function SideBar({ads}) { //{ads} = object destructuring
    const [count, setCount] = useState(0); //0 = initial value, bei Object = {}, bei Array []
    const countClicked = () => {
        setCount(count + 1);
    }

    //JS in JSX in {}
    const adlist = ads.map((ad, index) => {
        return <Advertisment key={index} ad={ad} />
    });
    
    return (
        <div className="sidebar">
            {adlist}
            <button onClick={handleAdd}>Add</button>
            <button onClick={countClicked}>Count</button>
            <div>{count} times clicked</div>
        </div>
    );
}
 
export default SideBar;