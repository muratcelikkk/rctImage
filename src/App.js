import { useState } from "react";
import Images from "./Images";
import "./styles.css";

function App() {
  const [first, setFirst] = useState(Images[0]);
  return (
    <div className="App">
      <div className="container">
        <img src={first} alt="selected" className="selected" />
      </div>
      <div className="imgContainer">
        {Images.map((img, index) => (
          <img
            src={img}
            key={index}
            alt="tan"
            onClick={()=>setFirst(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
