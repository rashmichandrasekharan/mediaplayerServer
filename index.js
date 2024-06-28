// step:1-import json server-library
const jsonServer = require('json-server')

//2:create path for db.json file using router function for storing data
const router=jsonServer.router("db.json")

//3:create middleware to convert json to js-defaults()
const middleware=jsonServer.defaults()

//4:create json server
const mediaplayerServer=jsonServer.create()

//5:server should use middleware and router
// first middleware should be used then router if we used it opposite it dosen't convert(json-js)
mediaplayerServer.use(middleware)
mediaplayerServer.use(router)

//6:set port for server
// if the port 3000 is consumed process.env will give arrange anothr port (env-environment variable)
const PORT=3000 || process.env

//7.run server
mediaplayerServer.listen(PORT,()=>{
    console.log(`server running succesfully at port number ${PORT}`);
})
