import logo from './logo.svg';
import './App.css';
import HVK_calasComp from './components/HVK_Classcomp'
import HVK_funcdemo from './components/HVK_funcdemo';

function App() {
  const users = {
    userName:"k22cnt4",
    password:"123456@",
    firstname:"hoangvan",
    lastname:"khai"
  }
  function formatName(user){
    return <h2>Xin Chao,{user.firstname} {user.lastname } </h2>;
  }
  return (
    <div className="App">
    <div>
      <p>Full name: {users.firstname} {users.lastname} </p>
      {formatName(users)}
    </div>
    <div>
      <HVK_funcdemo/>
      <HVK_funcdemo userName="HVk" fullName="Hoang Van Khai" age="20" />
    </div>
    <div>
      <HVK_calasComp/>
      <HVK_calasComp company="Fit_NTU - K22CNT4 " course="ReactJs" />
    </div>
    </div>
  );
}

export default App;
