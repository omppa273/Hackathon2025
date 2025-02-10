
const user = require('../Module/usermodel');

// Register
const regiforusernamecheck = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the username is already taken
    const existingUser = await user.findOne({ username });
    if (existingUser) return res.status(400).json({ message: "Username is already taken." });

    // Check if the email is already taken
    const existingEmail = await user.findOne({ email });
    if (existingEmail) return res.status(400).json({ message: "Email is already registered." });

    // Save the user with the plain text password
    const newUser = new user({ username, email, password });
    await newUser.save();
    res.json({ newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
const userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Query the database to find the user by email
    const existingUser = await user.findOne({ email });

    // Check if the user exists
    if (!existingUser) {
      return res.status(400).send("Invalid email or password");
    }

    // Check if the password matches
    if (existingUser.password !== password) {
      return res.status(400).send("Invalid email or password");
    }

    // Successful login
    res.status(200).send("Login successful");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  regiforusernamecheck,
  userlogin
};
