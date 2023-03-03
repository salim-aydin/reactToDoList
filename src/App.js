import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [liste, setListe] = useState([]);

  const handleSubmit = () => {
    if (name.trim() !== "") { // boşluklar hariç, name değişkeninin içeriği boş değilse
      setListe([...liste, name]);
      setName("");
    }
  };

  const tetiklenen = (e) => {
    setName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleDelete = (index) => {
    // 1. Kopyala
    const newList = [...liste];
    // 2. Sil
    newList.splice(index, 1);
    // 3. Ayarla
    setListe(newList);
  };

  return (
    <div className="App">
        <div id="formum">
        <input onChange={tetiklenen} onKeyDown={handleKeyDown} value={name} />
      <button onClick={handleSubmit}>+</button>
        </div>
      <div id="listem">
      <ul>
        {liste.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>-</button>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  );
}

export default App;