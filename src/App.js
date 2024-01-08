import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import {Avatar} from "./Components/Avatar";
import User from "./Components/User";
import Friends from "./Components/Friends";
import {useState} from "react";
import AddFriend from "./Components/AddFriend";
// import { IoCreateOutline } from "react-icons/io5"; //редактировать
// import { IoClose } from "react-icons/io5"; //закрыть
// <IoClose />
// import { IoCheckmark } from "react-icons/io5"; //галочка
// <IoCheckmark />
function App() {
    const [friends, setFriends] = useState([
        {
            id: 1,
            firstname: 'Руслан',
            lastname: 'Набеев',
            age: 25,
        },
        {
            id: 2,
            firstname: 'Ангелина',
            lastname: 'Харламова',
            age: 27,
        }
    ])

    const [user, setUser] = useState({
        firstname: 'Алиса',
        lastname: 'Харламова',
    })

    const addFriend = (friend) => {
        const id = friends.length + 1;
        let copy = Object.assign([], friends);
        copy.push({id, ...friend});
        setFriends(copy)
    }

  return (
      <div>
          <Avatar />
          <User user={user}/>
          <div className="addFriends"><AddFriend onAdd={addFriend}/></div>
          <div className='friends'>
              <Friends friends={friends}/>
          </div>
      </div>

  );

}

export default App;
