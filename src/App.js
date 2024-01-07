import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import {Avatar} from "./Components/Avatar";
import UserInfo from "./Components/UserInfo";
import User from "./Components/User";
import Friends from "./Components/Friends";
import AddUser from "./Components/AddFriend";
// import { IoCreateOutline } from "react-icons/io5"; //редактировать
// import { IoClose } from "react-icons/io5"; //закрыть
// <IoClose />
// import { IoCheckmark } from "react-icons/io5"; //галочка
// <IoCheckmark />
function App() {
    console.log('2324')
  return (
      <div>
          <Avatar />
          <UserInfo name={User().name} lastName={User().lastname}/>

          <div className="addFriends"><AddUser /></div>
          <div className='friends'>
              <Friends />
          </div>
      </div>

  );
}

export default App;
