import {useState} from "react";
import axios from "axios";

function Customers(){

const [name,setName]=useState("");
const [mobile,setMobile]=useState("");

const addCustomer=async()=>{

await axios.post(
"http://localhost:5000/customers",
{
customerName:name,
mobile:mobile,
status:"Active"
}
);

alert("Customer Added");

};


return(
<div>

<h2>Customers</h2>

<input 
placeholder="Customer Name"
onChange={(e)=>setName(e.target.value)}
/>

<input 
placeholder="Mobile"
onChange={(e)=>setMobile(e.target.value)}
/>

<button onClick={addCustomer}>
Add Customer
</button>

</div>
)

}

export default Customers;