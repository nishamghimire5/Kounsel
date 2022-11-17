import { PrismaClient } from "@prisma/client";
import prisma from "../../prisma";

export default async function userRegister(req, res) {
    if (req.method == "POST") {
        const body = req.body
    
        const userData = req.body;
        const upsertUser = await prisma.user.upsert({
            where: {
                email: userData.email
            },
            update: {},
            create: {
                email: userData.email,
                name: userData.name,
                bookings: userData.bookings,
                sessions: userData.sessions,
            }
        });

        res.status(201).json({ message: "Updated" });
      }

      if (req.method == "PUT") {
        const email = req.query.email;
    
        const bookData = req.body;
    
        const record = await prisma.user.update({
          where: {
            email: email,
          },
          data: bookData
        });
    
        res.status(201).json({ message: "Updated" });
      }
    
}