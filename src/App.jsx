
import Menu from "./components/menu/menu";
import PagesNavBar from "./components/pagesNavbar/pagesNavBar";
import Customer from "./components/customer/customer";
import Header from "./components/header/header";
import Search from "./components/search/search";
function App() {
  return (
   <div className="container">
      <Customer name={'Jane Cooper'} company={'Microsoft'} number={'(225) 555-0118'} email={'jane@microsoft.com'} country={'United States'} status={'active'} />
      <Customer  />
      <Customer name={'Jane Cooper'} company={'Microsoft'} number={'(225) 555-0118'} email={'jane@microsoft.com'} country={'United States'} status={'inactive'} />
      <Header></Header>
      <Search/>
    </div>
  );
}

export default App;
