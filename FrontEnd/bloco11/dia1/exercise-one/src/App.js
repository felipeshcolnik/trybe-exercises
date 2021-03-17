impotr React from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <p> Estou aprendendo</p>
//     </div>
//   );
// }
const tasks = ['tomar banho', 'comer', 'estudar'];
const App = () => ( <ul>{ tasks.map(task => <li>{ task }</li>) }</ul> );


export default App;
