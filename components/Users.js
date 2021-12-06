import Router  from "next/router";

const Users = (props) => {
  return (
    <ul className="list-group">
      <li>
        {props.users.map((user) => (
          <li
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            key={user.id}
            onClick={e => Router.push('/users/[id]',`/users/${user.id}`)}
          >
            <div>
              <h5>
                {user.first_name} - {user.last_name}
              </h5>
              <p>{user.email}</p>
            </div>
            <img
              src={user.avatar}
              alt={user.first_name + user.last_name}
              style={{ borderRadius: "50%" }}
            ></img>
          </li>
        ))}
      </li>
    </ul>
  );
};

export default Users;
