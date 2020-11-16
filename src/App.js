import './App.css';
import Profile from "./profile/Profile";
import image from "./John-Doe.jpg";

const name = "John Doe"; // 25

const handleName = (name) => alert('User : ' + name);            

function App() {
  return (
    <Profile handleName={handleName} fullName={name}>{image}</Profile>
  );
}

export default App;
