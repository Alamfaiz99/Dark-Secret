// 1. Import express , axios & alert

import alert from "alert";
alert("To see secrets of different user refresh the page.");

import  express  from "express";
import axios from "axios";//imported the node module for using the api.

// 2. Create an express app and set the port number.

const Express = express();
const port = process.env.PORT || 3000;

// 3. Use the public folder for static files.

Express.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
// & Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

Express.get("/" , async(req , res) => {
    try{//basic syntax whenever using  the api.
    const result = await axios.get("https://secrets-api.appbrewery.com/random");//we have call the api from where we will access the secrets or the data which we need.
    const ans ={
        secret: result.data.secret, 
        user: result.data.username,
    };//we are fetching the username & the secret that the user has leak by using the api.
    res.render("index.ejs" , ans);
} catch(error){
    console.log(error.response.data);
    alert(error.response.data);
    res.status(500);
}
});

// 6. Listen on your predefined port and start the server.

Express.listen(port , function server_started(){
console.log(`Server started on port no ${port}`);
});