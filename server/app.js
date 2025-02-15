const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postsRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();
const port = 6000;

app.use(cors());
app.use(express.json());

app.use("/api-users", userRoutes);
app.use("/api-posts", postRoutes);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
