import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Get data submitted in request's body.

  if (req.method == "POST") {
    const body = req.body

    const bookData = req.body;
    const bookedData = await prisma.booking.create({
      data: bookData
    })


    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)

    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.date || !body.email) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Date or email or message name not found' })
    }

    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.date} ${body.email} ${body.message} ${body.approved}` })
  }

  if (req.method == "PUT") {
    const email = req.query.email;

    const { approved } = req.body;

    const record = await prisma.booking.update({
      where: {
        email: email,
      },
      data: {
        approved: approved,
      },
    });

    res.status(201).json({ message: "Updated" });
  }


}