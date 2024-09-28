const express = require("express");
const dbConnection = require("./db");
const cors = require("cors");
const path = require("path");
const productRoutes = require("./route/productRoutes");
const authenticateToken = require("./middleware/authenticateToken");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));



dbConnection();


// app.use("/api/class/bookClass", authenticateToken);

app.use("/api", productRoutes);
app.use("/api/class", require("./route/booking_routes"));
app.use("/api/notifications", require("./route/notifications"));
// app.use("/api/users", require("./route/userRoutes"));
app.use("/api/admin", require("./route/adminRoutes"));
app.use("/api/users", require("./route/user_route"));
app.use("/api/members", require("./route/member_route"));
app.use("/api/class", require("./route/class_route"));
app.use("/api/plans", require("./route/plans_route"));
app.use("/api/cart", require("./route/cartRoutes"));
app.use("/api/order", require("./route/orderRoutes"));
app.use("/api/feedback", require("./route/feedbackRoute"));
// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`);
});
