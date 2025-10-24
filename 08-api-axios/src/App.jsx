import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([])
 const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setData(response.data);
    console.log(response.data);
    
    
  }

  return (
    <div className="btn">
      <button onClick={getData}>Get Data </button>

      <div>
        {
          data.map(function(el,idx){
            return <div key = {idx}>{el.id} {el.name}   {el.website}</div>
          })
        }
      </div>
    </div>
    
  );
};
export default App;
