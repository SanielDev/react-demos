
const UserStatus = (props) => {

    if (props.loggedIn && props.isAdmin) {
        return <h1>Welcome Admin</h1>;
    }
    return <h1>Welcome User</h1>;
    // return (
    //     <div>
    //         {props.loggedIn && (
    //             <h1>Welcome {props.isAdmin}</h1>
    //         )}
    //     </div>
    // );
};

export default UserStatus;