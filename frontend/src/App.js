import './App.css';
import FetchPersons from './filterUser';
import FetchUsers from './fetchUser';


function App() {
  return (
    <div className="App">
      <h1>User Management System</h1>
      <FetchUsers />
      {/* <FetchPersons /> */}
    </div>
  );
}

export default App;
