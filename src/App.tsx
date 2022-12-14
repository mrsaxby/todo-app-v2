import './App.css';

import { Routes, Route } from "react-router-dom";
import Header from './components/templates/Header';
import MainSection from './components/templates/main/MainSection';
import CreateTask from './components/templates/main/CreateTask';
import EditTask from './components/templates/main/EditTask';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainSection />}></Route>
        <Route
          path="/task/:itemId"
          element={<EditTask />}
        ></Route>
        <Route
          path="/task/create"
          element={<CreateTask />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

