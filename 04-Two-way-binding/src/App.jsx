import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  // const [first, setFirst] = useState("")
  const submitHandle = (e) => {
    e.preventDefault();
    console.log("Form Submit by", name);
    setName("") 
    // setFirst(name)
    

  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandle(e)
        }}
      >
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
            
          }}
        />
        {/* <p>form Submit by {name}</p>

      {first &&  <p>Submit By : {first} </p>} */}
        
        <button> submit </button>
      </form>
    </div>
  );
};

export default App;
