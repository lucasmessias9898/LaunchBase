const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
  const about = {
    avatar_url: "https://avatars2.githubusercontent.com/u/36428045?s=400&u=75a364fd5cb9efb61aaa4cb9c8c297bb31537672&v=4",
    name: "Lucas Messias",
    role: "Desenvolvedor Júnior",
    description: 'Dev, Programador',
    links: [
      {
        name: "GitHub",
        url: "https://github.com/lucasmessias9898"
      },
      {
        name: "Twitter",
        url: ""
      }, 
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/lucas-maciel-messias-6a370a141/"
      }
    ]
  }
  return res.render("about", { about })
})

server.get("/portfolio", function(req, res) {

  return res.render("portfolio", { items: videos })
})

server.get("/video", function(req, res){
  const id = req.query.id

  const video = videos.find(function(video) {
      return video.id == id
  })

  if(!video){
    return res.send("Video not found")
  }

  return res.render("video", { item: video })
})

server.listen(5000, function() {
  console.log("server is running")
})