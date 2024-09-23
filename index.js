const express = require("express");
<<<<<<< HEAD
const path = require("path");
const cookieParser = require("cookie-parser");
const { connectTOMongoose } = require("./connect");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");
const URL = require("./models/url");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRoute");
const userRoute = require("./routes/user");
=======
const { connectTOMongoose } = require('./connect')
const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRoute')
const path = require('path')
const URL = require('./models/url');
>>>>>>> f17c5f7a765c8ae5e4388b9087e6bc472cf00d7b

const app = express();
const PORT = 8001;

<<<<<<< HEAD
connectTOMongoose(process.env.MONGODB ?? "mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
=======
connectTOMongoose('mongodb://127.0.0.1:27017/short-url')
.then (()=> console.log("MongoDB connected"))

app.set("view engine" , "ejs")
app.set("views" , path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended:false})) //for form data

app.use("/url" , urlRoute)
app.use("/" , staticRoute)

// Server Side Rendering -> 
// Write html on server side -> complicated
// For ease we use EJS
app.get('/test' , async(req , res)=>{
  const allUrls = await URL.find({});
  // return res.end(`
  //   <html>
  //     <head></head>
  //     <body>
  //       <ol>
  //         ${allUrls.map( url => `<li>
  //           ${url.shortId} - 
  //           ${url.redirectURL} - 
  //           ${url.visitHistory.length}</li>`
  //           ).join("")
  //           }
  //       </ol>
  //     </body>
  //   </html>`
    
  // )
  
  return res.render('home',{
    urls: allUrls,
  })
})



app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId : shortId,
      },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.redirectURL);
 });

app.listen(PORT , ()=> console.log(`Server started at port : ${PORT}`))
>>>>>>> f17c5f7a765c8ae5e4388b9087e6bc472cf00d7b
