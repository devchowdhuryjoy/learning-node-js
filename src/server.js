require("dotenv").config();
const app = require("./app");
const db = require("./config/db"); 

const PORT = process.env.PORT || 5000;

// DB Connection
async function production() {
  try {
    const [rows] = await db.query("SELECT 1 + 1 AS result");
    console.log("✅ DB Connected");
  } catch (err) {
    console.error("❌ DB Connection Failed:", err.message);
  }
}

production();

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
