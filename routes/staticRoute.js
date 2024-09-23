<<<<<<< HEAD
const express = require("express");
const URL = require("../models/url");

const router = express.Router();

router.get("/", async (req, res) => {
  if (!req.user) return res.redirect("/login");
  const allurls = await URL.find({ createdBy: req.user._id });
  return res.render("home", {
    urls: allurls,
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});
=======
const express = require('express')

const router = express.Router();

router.get('/' , async(req, res)=>{
    const allUrls = await URL.find({})
    return res.render("home",{
        urls: allUrls,
    })
})
>>>>>>> f17c5f7a765c8ae5e4388b9087e6bc472cf00d7b

module.exports = router;