import { useState, useReducer } from "react";

const INIT_USERS = [];

const ACTIONS = {
  ADD: "add",
  DELETE: "delete",
  MODIFY: "modify",
};

const reducer = (users, action) => {
  // console.log(users, action);
  switch (action.type) {
    case ACTIONS.ADD: {
      // console.log(Date.now());
      const newUser = {
        id: Date.now(),
        name: action.payload.name,
        active: false,
      };
      return [...users, newUser];
    }
    case ACTIONS.DELETE: {
      return users.filter((item) => item.id !== action.payload.id);
    }
    case ACTIONS.MODIFY: {
      return users.map((user) => {
        if (user.id === action.payload.id)
          return { ...user, active: !user.active };
        return user;
      });
    }
    default:
      return users;
  }
};

function App() {
  const [users, dispatch] = useReducer(reducer, INIT_USERS);
  const [name, setName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onAdd = () => {
    dispatch({ type: ACTIONS.ADD, payload: { name } });
  };

  const onDelete = (id) => {
    dispatch({ type: ACTIONS.DELETE, payload: { id } });
  };

  const onModify = (id) => {
    dispatch({ type: ACTIONS.MODIFY, payload: { id } });
  };

  return (
    <div>
      <input onChange={onChangeName}></input>
      <button onClick={onAdd}>add</button>
      <hr />
      <div>
        {users.map((item) => {
          return (
            <span key={item}>
              <p style={item.active ? { color: "green" } : { color: "red" }}>
                {item.name}
              </p>
              <button onClick={() => onDelete(item.id)}>delete</button>
              <button onClick={() => onModify(item.id)}>
                {item.active ? "deActive" : "active"}
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;

// users --> [{id:1233,name:"",active:false},...{}]
