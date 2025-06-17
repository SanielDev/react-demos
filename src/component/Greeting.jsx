
const Greeting = () => {
    const name = "John";
    const currentDate = new Date(); 

    return (
        <div>
            <h1>Welcome</h1>
            <h1>The name is: {name}</h1>
            <p>Today's date is: {currentDate.toDateString()}</p>
            <p>Today's date is: {currentDate.getDate()}</p>
        </div>
    );
};

export default Greeting;