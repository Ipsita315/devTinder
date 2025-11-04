const express = require("express");

const app = express();

app.use(express.json());  //middleware

// app.use("/user", (req, res) => {
//     res.send("HAHAHA !!!!")
// });

app.get("/user", (req, res) => {
    res.send({
        firstName: "Ipsita",
        lastName: "Rakshit"
    })
});

app.post("/user", (req, res) => {
    console.log("Req: ", req.body);
    res.send("Data successfully saved to DB");
});

app.delete("/user", (req, res) => {
    res.send("Data deleted successfully !!!")
})

app.use("/test", (req, res) => {
    res.send("Test")
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})