
import Menu from "./components/menu/menu";
import PagesNavBar from "./components/pagesNavbar/pagesNavBar";
import Customer from "./components/customer/customer";
function App() {
  return (
   <div className="">
      <Customer name={'Jane Cooper'} company={'Microsoft'} number={'(225) 555-0118'} email={'jane@microsoft.com'} country={'United States'} status={'active'} />
      <Customer  />
      <Customer name={'Jane Cooper'} company={'Microsoft'} number={'(225) 555-0118'} email={'jane@microsoft.com'} country={'United States'} status={'inactive'} />
    </div>
  );
}

export default App;
