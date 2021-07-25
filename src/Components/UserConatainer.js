import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/Users/userAction";

const UserConatainer = (props) => {
  useEffect(() => {
    props.fetchUsers();
    console.log(props)
  }, []);
  return props.userData.loading ? (
    <h2>Loading</h2>
  ) : props.userData.error ? (
    <h2>Somting went wrong{props.userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {props.userData &&
          props.userData.users &&
          props.userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserConatainer);
