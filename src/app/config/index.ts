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
};
