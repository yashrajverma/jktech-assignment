const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  searchBlogs,
} = require("../controller/blogController");
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  logoutUser,
} = require("../controller/userController");
const router = express.Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Generate a JWT for React app session handling
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Send token and user data back to React app
    res.redirect(
      `${
        process.env.REACT_APP_URL
      }/google-auth-success?token=${token}&user=${encodeURIComponent(
        JSON.stringify(req.user)
      )}`
    );
  }
);

// Blog Routes
router.post("/blogs", createBlog);
router.get("/blogs", getAllBlogs);
router.get("/blogs/:id", getBlogById);
router.put("/blogs/:id", updateBlog);
router.delete("/blogs/:id", deleteBlog);

// Search Route
router.get("/blogs/search", searchBlogs);

// User Routes
router.post("/users/register", registerUser); // Register a user
router.post("/users/login", loginUser); // Login a user
router.put("/users/:id", updateUser); // Update a user
router.delete("/users/:id", deleteUser); // Delete a user
router.post("/users/logout", logoutUser); // Logout a user

// Facebook Login Route
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

// Facebook Callback Route
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.redirect(
      `${
        process.env.REACT_APP_URL
      }/google-auth-success?token=${token}&user=${encodeURIComponent(
        JSON.stringify(req.user)
      )}`
    );
  }
);

module.exports = router;
