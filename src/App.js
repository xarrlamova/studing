import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import {Avatar} from "./Components/Avatar";
import UserInfo from "./Components/UserInfo";
import User from "./Components/User";
import Friends from "./Components/Friends";

function App() {
  return (
      <div>
          <Avatar />
          <UserInfo name={User().name} lastName={User().lastname}/>
          <div className="addFriends"></div>
          <div className='friends'>
              <Friends />
          </div>
      </div>

  );
}

export default App;
