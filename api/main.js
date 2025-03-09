const express = require("express");

const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, ".env") });

const passport = require("passport");

const session = require("express-session");

const mongoose = require("mongoose");

const router = require("./routes/index.js");

require("./routes/auth/googleAuth.js"); // Ensure passport config is imported
require("./routes/auth/facebookAuth.js");

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5001;
const app = express();

const cors = require("cors");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(passport.session());

// MongoDB Connection
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`MONGODB Connection Successful: ${MONGO_URI}`))
  .catch((error) => console.error(`MongoDB Connection Error: ${error}`));

mongoose.connection.on("disconnected", () =>
  console.log("MONGODB Connection is Disabled")
);
mongoose.connection.on("close", () =>
  console.log("MONGODB Connection is Closed")
);

// Routes
app.use("/api", router);

// Server Listening
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
