const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db");

// router.post('/signup', function(req, res, next) {
//     res.send('I am in POST signup');
//   });
router.get("/signup",(req, res) => {
  connection.query("SELECT * from users", (err, results)=>{
      if(err){
          res.status(500).send("Error retrieving data");
      }else {
          if (results.length === 0){
              return res.status(404).send("no client");
          }else{
          res.status(200).json(results);
          }
      }
  })
})
router.post("/signup", (req, res, next) => {
    const { email, password, name, lastname } = req.body;
    connection.query(
      "INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)",
      [email, password, name, lastname],
      (err, result) => {
        if (err) {
          res.status(500).json({ flash: err.message });
        } else {
          return res.status(200).json({ flash: "User has been signed up!" });
        }
      }
    );
  })


module.exports = router;