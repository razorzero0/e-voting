const route = (app) =>{
app.get('/a',(req,res)=>{
res.sendFile(__dirname + "/index.html")
})
app.get('/',(req,res)=>{
res.sendFile(__dirname + "/vote.html")
})
}
const a = "halo";
module.exports  = {route,a};