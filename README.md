This app contains both front end and backend
backend folder contains Nodejs and 
task_frontend contains React frontend 
There is no database for this app since its a demo 
launch the node server at port 5000 and launch react server
the react server will open a login page 
login using the following credentials
username:Admin
pass:password
after successfull login node server sets a header with key (auth-token) which is used for the next requests
when the header is set , when ever the user requests the server verifies the jwt token and responds with the data , if the token doesnt verify it sends a 403 status code 
when he logs out the headers are removed so that he has to login again in order to use the APIs