// https://jsonplaceholder.typicode.com/users
import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

function UserList() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  const { data, loading, error } = useFetch("users");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUsers(data);
  //     });
  // }, []);

  const onShow = (id) => {
    console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };

  return (
    <div>
      {loading && <h1>Loading ...</h1>}
      {error && <p style={{ color: "red" }}>Something went wrong</p>}
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <pre style={{ display: "flex" }}>
              <p>{item.name}</p>
              <button onClick={() => onShow(item.id)}>show</button>
            </pre>
          </div>
        );
      })}
      {/* <hr />
      {user && (
        <div>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
          <h1>{user.phone}</h1>
          <h1>{user.website}</h1>
          <h6>
            {user.address.city} - {user.address.street}
          </h6>
        </div>
      )} */}
    </div>
  );
}

export default UserList;
