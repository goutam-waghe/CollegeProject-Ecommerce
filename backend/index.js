const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json()); //
app.use(cors());
//connect Db with mongoDB
mongoose
  .connect(
    "mongodb+srv://goutamwaghe:ecommerce@cluster0.iulg2q8.mongodb.net/Ecommerce"
  )
  .then(() => {
    console.log("db connected");
  });

// API creation
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

//Image Storage Engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//Creating Upload EndPoint for Images

app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//schema for creating products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avilable: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  // console.log(products);
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    // console.log(last_product.id);

    id = last_product.id + 1;
    // console.log(id);
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    // id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("product Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//Creating API for deleting product

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("remove");
  res.json({
    success: true,
    name: req.body.name,
  });
});

// creating Api to get all product
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  // console.log("all product fetched");
  res.send(products);
});

//Creating Schema for user

const Users = mongoose.model("User", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//creating endpoint for register User

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      error: "Error:this email is already exist",
    });
  }

  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, "secret_ecom");

  res.json({
    success: true,
    token,
  });
});

//creating endPoint for user Login
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({
        success: true,
        token,
      });
    } else {
      res.json({
        success: false,
        error: "Password is wrong",
      });
    }
  } else {
    res.json({
      success: false,
      error: "Wrong email",
    });
  }
});

//Creating endPoint for new collection
app.get("/newcollection", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  // console.log("newCOllection fetched ");
  res.send(newcollection);
});

//Creating endPoint for Popular in Women
app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let popularinwomen = products.slice(0, 4);
  // console.log("populer in women in fetched");
  res.send(popularinwomen);
});

app.listen(port, (error) => {
  if (!error) {
    console.log("server running on Port", port);
  } else {
    console.log("ERROR :", error);
  }
});
