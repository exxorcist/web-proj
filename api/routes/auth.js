const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    //const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const hashedPassword = req.body.password;

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/register", async (req, res) => {
//   const user = await new User({
//     Username: "john",
//     email: "john@gmail.com",
//     password: "123456",
//   });
//   await user.save();
//   res.send("ok");
// });
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("This user does not exist");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword &&
      res.status(400).json("You have entered the wrong password");

    //res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
