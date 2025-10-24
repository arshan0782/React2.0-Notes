import React from "react";

const App = () => {
  const submitHandle = (e) => {
    e.preventDefault();
    console.log("Form Submit ho gya");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandle(e);
        }}
      >
        <input type="text" placeholder="Enter your name" />
        <button> submit </button>
      </form>
    </div>
  );
};

export default App;
