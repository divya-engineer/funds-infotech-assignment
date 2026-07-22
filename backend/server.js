const Challan = require("./models/Challan");
const Product = require("./models/Product");
const Customer = require("./models/Customer");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const app = express();
app.use(cors());
app.use(express.json());
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
app.post("/auth/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Registration failed"
    });
  }
});
const jwt = require("jsonwebtoken");

app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      "secretkey"
    );

    res.json({
      message: "Login successful",
      token,
      role: user.role
    });

  } catch (error) {
    res.status(500).json({
      message: "Login failed"
    });
  }
});
app.post("/customers", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Add Product
app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// Get Products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Update Product
app.put("/products/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(product);
});
app.post("/challans", async (req,res)=>{
  try {

    const {
      customer,
      products,
      status
    } = req.body;


    // check stock
    for(let item of products){

      const product = await Product.findById(item.productId);

      if(!product){
        return res.status(404).json({
          message:"Product not found"
        });
      }


      if(status==="Confirmed" && product.currentStock < item.quantity){

        return res.status(400).json({
          message:"Insufficient stock"
        });

      }

    }


    // reduce stock if confirmed
    if(status==="Confirmed"){

      for(let item of products){

        await Product.findByIdAndUpdate(
          item.productId,
          {
            $inc:{
              currentStock:-item.quantity
            }
          }
        );

      }

    }


    const challan = new Challan({

      challanNumber:
      "CH-"+Date.now(),

      customer,

      products,

      totalQuantity:
      products.reduce(
        (sum,p)=>sum+p.quantity,0
      ),

      status

    });


    await challan.save();

    res.json(challan);


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello from Backend 🎉");
});
