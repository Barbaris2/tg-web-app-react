import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    tg.ready()
  },[])
  

  return (
    <div className="App">
     <p>work</p>
    <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
