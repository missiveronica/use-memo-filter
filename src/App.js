
import { useMemo, useState } from 'react';
import './App.css';

const fruits = [
  {id: "1", item: "Peach" },
  {id: "2", item: "Apple" },
  {id: "3", item: "Banana" },
  {id: "4", item: "Pineapple" },
  {id: "5", item: "Plum" },
]

function App() {

  const [text, setText] = useState ("");
  const [search, setSearch] = useState ("");

  const handleText = (e) => {
setText(e.target.value);
  }

  const handleSearch = () => {
setSearch(text);
  }

  //since it renders all the time when we insert a letter in search, the logic below is not optimal
  //const filteredFruits = fruits.filter((fruit) => {
   // return fruit.item.toLowerCase().includes(search.toLowerCase())
  //})

  //hook useMemo instead

  const filteredFruits = useMemo( () => fruits.filter((fruit) => {
    return fruit.item.toLowerCase().includes(search.toLowerCase())
  }), [search])
  
  return (
    <div className="App">
      <h1>Filtering...</h1>
      <input type = "text" onChange={handleText}/>
      <button type = "button" onClick={handleSearch}>Search</button>
      <div>
        {filteredFruits.map((filteredFruit) => (
<p key={filteredFruit.id}>{filteredFruit.item}</p>
        ))}

      </div>
  
    </div>
  );
}

export default App;
