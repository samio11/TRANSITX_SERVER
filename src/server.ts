import { Server } from "http";
import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

let server: Server;

async function startServer() {
  try {
    await mongoose.connect(config.database as string);
    server = app.listen(config.port, () => {
      console.log(`Server runs port:- ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

(async () => {
  await startServer();
})();

process.on("unhandledRejection", (err) => {
  console.log(`UnHandled Rejection:- ${err}`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("uncaughtException", (err) => {
  console.log(`Uncaught Exception:- ${err}`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("SIGTERM", () => {
  console.log(`SIGNAL TERMINATION!!!`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
