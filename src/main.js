import dotenv from "dotenv";
dotenv.config();
import express from "express";
const server = express();
import bodyParser from "body-parser";
server.use(bodyParser.json());
/*API LOAD*/

import api from "./routes/index.js";
server.use("/api", api);

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function test() {
  try {
    let user = await prisma.user.delete({
      where: {
        id: 1,
      },
    });
  } catch (err) {}
}
test();
server.listen(process.env.PORT, () => {
  console.log(`Server on at: http://${process.env.HOST}:${process.env.PORT}`);
});
