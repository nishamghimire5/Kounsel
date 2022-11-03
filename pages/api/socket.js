import { Server } from 'Socket.IO'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    const io = res.socket.server.io;
    console.log('Socket is already running')
    io.on('connection', socket => {
      socket.on('custom-event', (number, string, obj) => {
        console.log(number, string, obj)
      })
    })
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    
  }
  res.end()
}

export default SocketHandler
