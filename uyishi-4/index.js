const http =require("http")
const {read_file, write_file} = require("./file-manager/file-manager")

const app = http.createServer((req,res) =>{
    // user
    if (req.url === "/get_all_cars" && req.method==="GET"){
        const fileDate = read_file("user.json")

        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify(fileDate))
    }

    // praduct
    if(req.url === "/get_all_fruit." && req.method ==="GET"){
        const fileDate =read_file("fruit..json")
    
        res.writeHead(200,{"contet-type":"application/json"})
        res.end(JSON.stringify(fileDate))
    
    }
  if(req.url==="/add fruit" && req.method ==="POST"){
    req.on("data",(chank)=>{
        const data = JSON.parse(chank)
        const fileDate = read_file("fruit.json")

        fileDate.push(data)
        write_file("fruit..json", fileDate)

        res.writeHead(201,{"content-type": "application/json"})
        res.end(JSON.stringify({
            message:"Added newpraduct"
        }))
    })
  }
  
  // post
    if (req.url ==="/add_animal"&& req.method === "POST"){
        req.on("data",(chank)=>{
            const data =JSON.parse(chank)
            const fileDate =read_file("animal.json")
            
            fileDate.push(data)
            write_file("animal.json",fileDate)

            res.writeHead(201,{"content-type": "application/json"})
            res.end(JSON.stringify({
                message: "Added new user"
         }))
        })
        
    }


})
app.listen(3000, ()=>{
    console.log("serveris ranning at: 3000");
    
})