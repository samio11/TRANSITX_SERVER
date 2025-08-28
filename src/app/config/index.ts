import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database: process.env.DATABASE,
  jwt_access_token: process.env.JWT_ACCESS_TOKEN,
  jwt_access_expire: process.env.JWT_ACCESS_TOKEN_EXPIRES,
  jwt_refresh_token: process.env.JWT_REFRESH_TOKEN,
  jwt_refresh_expires: process.env.JWT_REFRESH_TOKEN_EXPIRES,
  default_admin_email: process.env.DEFAULT_ADMIN_EMAIL,
  default_admin_password: process.env.DEFAULT_ADMIN_PASSWORD,
  NODE_ENV: process.env.NODE_ENV,
  bcrypt_salt: process.env.BCRYPT_SALT,
  CLUDINARY_NAME: process.env.CLUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  RedisUserName: process.env.RedisUserName,
  RedisPassword: process.env.RedisPassword,
  RedisHost: process.env.RedisHost,
  RedisPort: process.env.RedisPort,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_FORM: process.env.SMTP_FORM,
  SMTP_PASS: process.env.SMTP_PASS,
};
