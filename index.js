const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;
const cors = require("cors");
const AdminModel=require("./adminLogin/Login.model")
// connection
const connection = require("./db");
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors for multiple origin

var allowedOrigins = ["https://client-bhk4.vercel.app"]

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true)
  }
}));
// route import
const authRouter = require("./adminLogin/Login.route");
const EmployeeRouter=require("./employee/Employee.route")
// routes
app.use("/auth", authRouter);
app.use("/data",EmployeeRouter)

app.get("/", (req, res) => {
  res.send("user info")
});

// initial user data
app.get("/admins", async (req, res) => {
  const admin = await AdminModel.find();
  res.send(admin);
});

// server
app.listen(port, async () => {
  try {
    await connection;
    console.log("connected to db successfully");
  } catch {
    console.log("something went wrong while connecting to db");
  }
  console.log(`Server listening on localhost:${port}`);
});
