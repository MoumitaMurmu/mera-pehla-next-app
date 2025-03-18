const Dashboard = async () => {
  const myData = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await myData.json();

  return (
    <div>
      <h2>User Details</h2>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
