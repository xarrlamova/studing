import './App.css';
import {Avatar} from "./Components/Avatar";
import {User} from "./Components/User";
import {Friends} from "./Components/Friends";
import {useState} from "react";
import {AddFriend} from "./Components/AddFriend";
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
        const id = Date.now();
        setFriends(prevState => ([...prevState, {id, ...friend}]))
    }

    const onEdit = info => {
        setUser(state => ({...state, [info.nameForm]: info.valueForm}))
    }


  return (
      <div>
          <Avatar />
          <User user={user} onEdit={onEdit}/>
          <div className="add-friends"><AddFriend onAdd={addFriend}/></div>
          <div className="friends">
              <Friends friends={friends}/>
          </div>
      </div>

  );

}

export default App;
