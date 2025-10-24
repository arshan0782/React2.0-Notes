const App = () => {

  // Save data
// localStorage.setItem("key", "value");

// // Get data
// let data = localStorage.getItem("key");

// // Delete one item
// localStorage.removeItem("key");

// // Clear all data
// localStorage.clear();


 const userData = JSON.parse(localStorage.getItem("user"))

console.log(userData);


  return (
       <>
        <h1>My Name is {userData.username}</h1>
         <h2>age is {userData.age}</h2>
    </>
   
    
  )
}
export default App