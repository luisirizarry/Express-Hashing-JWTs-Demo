require("dotenv").config(); // Load environment variables from .env file

const SECRET_KEY = process.env.SECRET_KEY || "default-secret-key";
const BCRYPT_WORK_FACTOR = parseInt(process.env.BCRYPT_WORK_FACTOR) || 12; // Parse to ensure it's an integer

module.exports = {
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};
