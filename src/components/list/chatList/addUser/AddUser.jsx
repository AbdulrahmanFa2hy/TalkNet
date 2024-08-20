import "./addUser.css";

const AddUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="add-user">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" name="username" />
        <button>Search</button>
      </form>
      <div className="users">
        <div className="user">
          <div className="user-avatar">
            <img src="./avatar.jpeg" alt="avatar" />
            <div className="name">Lorem, ipsum.</div>
          </div>
          <button>Add user</button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
