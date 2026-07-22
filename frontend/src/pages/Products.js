import {useState} from "react";
import axios from "axios";

function Products(){

const [name,setName]=useState("");
const [stock,setStock]=useState(0);


const addProduct=async()=>{

await axios.post(
"http://localhost:5000/products",
{
productName:name,
currentStock:stock
}
);

alert("Product Added");

};


return(
<div>

<h2>Products</h2>

<input
placeholder="Product Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Stock"
onChange={(e)=>setStock(e.target.value)}
/>


<button onClick={addProduct}>
Add Product
</button>


</div>
)

}

export default Products;