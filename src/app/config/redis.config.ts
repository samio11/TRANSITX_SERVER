import { createClient } from "redis";
import config from ".";

export const RedisClient = createClient({
  username: config.RedisUserName,
  password: config.RedisPassword,
  socket: {
    host: config.RedisHost,
    port: Number(config.RedisPort),
  },
});

RedisClient.on("error", (err) => console.log("Redis Client Error", err));

// await client.connect();

// await client.set('foo', 'bar');
// const result = await client.get('foo');
// console.log(result)  // >>> bar

export const redisConnection = async () => {
  if (!RedisClient.isOpen) {
    await RedisClient.connect();
    console.log(`Redis is Connected`);
  }
};
