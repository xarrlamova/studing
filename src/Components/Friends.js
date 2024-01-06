
const Friends = () => {
    const friends = [

    ]

    if (friends.length > 0)
        return (<div>
            {friends.map((el) => (<div key={el.id}>
                <h3>{el.firstname} {el.lastname}</h3>
                <p>{el.age}</p>
            </div>))}
        </div>)
    else
        return(<div>
            <h3>Друзей нет :(</h3>
        </div>)
}

export default Friends;