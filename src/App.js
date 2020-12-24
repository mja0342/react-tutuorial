// import Demo from "./Components/Demo";
// import FunctionalDemo1 from "./Components/FunctionalDemo1";
// import FunctionalDemo2 from "./Components/FunctionalDemo2";
// import FunctionalDemo3 from "./Components/FunctionalDemo3";
import './App.css';
import TodoList from "./Components/TodoList";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
// import Sample from "./Components/Sample";
// import Parent from "./Components/Parent";
library.add(faTrash, faEdit, faPlus);

function App() {
  return (
    <div className="App">
        <TodoList/>
    </div>
  );
}

export default App;
