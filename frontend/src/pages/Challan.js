import {useState} from "react";
import axios from "axios";

function Challan(){

const [customer,setCustomer]=useState("");
const [productId,setProductId]=useState("");
const [quantity,setQuantity]=useState(1);


const createChallan=async()=>{

await axios.post(
"http://localhost:5000/challans",
{
customer,
status:"Confirmed",
products:[
{
productId,
quantity:Number(quantity),
productName:"Product"
}
]
}
);

alert("Challan Created");

};


return(
<div>

<h2>Create Challan</h2>

<input
placeholder="Customer Name"
onChange={(e)=>setCustomer(e.target.value)}
/>

<input
placeholder="Product ID"
onChange={(e)=>setProductId(e.target.value)}
/>

<input
placeholder="Quantity"
onChange={(e)=>setQuantity(e.target.value)}
/>

<button onClick={createChallan}>
Generate Challan
</button>

</div>
)

}

export default Challan;