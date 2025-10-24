const App = () => {

  async function getData(){
   const response = await fetch('https://jsonplaceholder.typicode.com/users')

   const data = await response.json()
   console.log(data);
   
  }
  return (
    <div>
      <button onClick={getData}>Data Nikalo</button>
    </div>

  )
}
export default App
