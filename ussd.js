const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/ussd', (req, res) => {
    const { serviceCode, sessionId, phoneNumber, text } = req.body;

    let response;

    if (text === "") {
        response = "CON what would you like to check \n";
        response += "1.  Check balance \n";
        response += "2. Make a payment \n";
    } else if (text === "1") {
        response = "CON choose account information u want to view \n";
        response += "1. Account number \n";
        response += "2. Account balance \n";
    } else if (text === "2") {
        response = "1. Please enter recipient's phone number \n";
    } else if (text === "1*1") {
        response = "END your account number is: XXX-XXX";
    } else if (text === "1*2") {
        response = "END your current balance is: yyyy";
    }

    res.status(200)
       .set('Content-Type', 'text/plain')
       .send(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

