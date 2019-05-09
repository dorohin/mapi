import express from "express";
import App from "./app";

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

// define a route handler for the default home page
App.get("/", (req, res) => {
    res.send("Hello world!");
});

// start the Express server
App.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
