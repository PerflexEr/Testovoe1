
import Menu from "./components/menu/menu";
import Header from "./components/header/header";
import Customers from "./components/customers/customers";

function App() {
  return (
    <div className="app">
      <Menu/>
      <div className="container">
        <Header className='header'/>
        <Customers/>
      </div>
    </div>
  );
}

export default App;
