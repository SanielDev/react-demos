const Greetings = (props) => {


//   Ternary Operator
  return (
    <div>
        {props.timeOfDay === "morning" ? <p>Good Morning!</p> : <p>Good Afternoon</p>}
    </div>
  );
};

export default Greetings;