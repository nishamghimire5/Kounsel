import { PrismaClient } from "@prisma/client";
import prisma from "../../prisma";

export default async function busyHandler(req, res) {
  if (req.method === "PUT") {
    const id = parseInt(req.query.id);

    const bookData = req.body;

    const record = await prisma.busy.update({
      where: {
        id: id,
      },
      data: bookData
    });

    res.status(201).json({ message: "Updated" });
  }

  if (req.method === "GET") {
    const id = parseInt(req.query.id);
    const status = await prisma.busy.findUnique({
      where: {
        id: id,
      }
    });
    console.log("got to api");
    console.log(status);
    res.status(200).json({status});
  }
}