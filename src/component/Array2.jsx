
const Array2 = () => {
    const userInfo = [
        {
            username: "Alex",
            email: "alex@gmail.com",
            location: "India"
        },
        {
            username: "Saniel",
            email: "saniel@gmail.com",
            location: "Nepal"
        },
        {
            username: "Bob",
            email: "Bob@gmail.com",
            location: "Japan"
        },
    ];
  return (
    <div>
        {/* {userInfo.map((user) => (
            <ul key={user}>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.location}</li>
            </ul>
        ))} */}
        {/* Destructuring */}
        <h2>Traversing using Array Destructuring</h2>
        {userInfo.map(({username, email, location}) => (
            <ul key={Math.random}>
                <li>{username}</li>
                <li>{email}</li>
                <li>{location}</li>
            </ul>
        ))}
    </div>
  );
};

export default Array2;