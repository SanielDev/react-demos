import Add from "./component/Add";
import Array from "./component/Array";
import Array2 from "./component/Array2";
import Footer from "./component/Footer";
import Greet from "./component/Greet";
import Greeting from "./component/Greeting";
import Header from "./component/Header";
import JSXRules from "./component/JSXRules";
import MainContent from "./component/MainContent";
import ProductList from "./component/ProductList";
import ProductionInfo from "./component/ProductionInfo";
import UserList from "./component/UserList";
import WelcomeMessage from "./component/WelcomeMessage";

const App = () => {
    return (
        <div>
            {/* <Header />
            <MainContent />
            <Footer /> */}
            {/* <WelcomeMessage /> */}
            {/* <JSXRules /> */}
            <Greeting />
            <ProductionInfo />
            {/* <Array />
            <Array2 /> */}

            {/* Task */}
            <UserList />
            <ProductList />
        </div>  
    );
};

export default App;