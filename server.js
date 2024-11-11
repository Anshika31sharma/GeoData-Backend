const express = require("express");
const multer = require("multer");
const mysql = require("mysql2");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database");
});


app.post("/api/files/upload", upload.single("file"), async (req, res) => {
  try {
    const filePath = path.join(__dirname, "uploads", req.file.filename);
    const fileName = req.file.originalname;
    const fileType = req.file.mimetype;

    console.log("File details:", { filePath, fileName, fileType });

    db.query(
      "INSERT INTO files (file_path, file_name, file_type) VALUES (?, ?, ?)",
      [filePath, fileName, fileType],
      (err, results) => {
        if (err) {
          console.error("Database error:", err);
          return res.status(500).send("Error uploading file");
        }
        res.status(200).send("File uploaded successfully");
      }
    );
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send("Error uploading file");
  }
});


app.post("/api/users", async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).send("All fields (username, password, email) are required.");
  }

  db.query(
    "SELECT * FROM users WHERE username = ? OR email = ?",
    [username, email],
    (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).send("Error checking user existence.");
      }

      if (results.length > 0) {
        return res.status(400).send("Username or email already exists.");
      }

      db.query(
        "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
        [username, password, email],
        (err, results) => {
          if (err) {
            console.error("Database error:", err);
            return res.status(500).send("Error creating user.");
          }
          res.status(201).send("User created successfully.");
        }
      );
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
