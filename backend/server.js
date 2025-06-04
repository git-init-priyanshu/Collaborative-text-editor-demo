const WebSocket = require("ws")

const wss = new WebSocket.Server({ port: 8000 });

wss.on("connection", (ws) => {
  console.log("client connected!")

  ws.on("message", (msg) => {
    console.log(msg.toString())
  })

  ws.on("close", ()=>{
    console.log("Client disconnected.")
  })

  ws.on("error", (error)=>{
    console.log("Websocket error:", error)
  })
})
