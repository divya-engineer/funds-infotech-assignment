import Challan from "./pages/Challan";
import Login from "./pages/login";
import Customers from "./pages/Customers";
import Products from "./pages/Products";

function App(){

return(
<div>

<h1>Mini ERP CRM Portal</h1>

<Login/>

<hr/>

<Customers/>

<hr/>

<Products/>
<hr/>

<Challan/>

</div>

)

}

export default App;