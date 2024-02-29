from flask import Flask, request

app = Flask(__name__)

@app.route('/ussd', methods=['POST'])
def ussd_callback():
    service_code = request.form.get('serviceCode')
    session_id = request.form.get('sessionId')
    user_phone = request.form.get('phoneNumber')
    text = request.form.get('text')

    if text == "":
        response = "CON what would you like to check \n"
        response += "1.  Check balance \n"
        response += "2. Make a payment \n"
    elif text == "1":
        response = "CON choose account information u want to view \n"
        response += "1. Account number \n"
        response += "2. Account balance \n"
    elif text == "2":
        response = "1. Please enter recipient's phone number \n"
    elif text == "1*1":
        response = "END your account number is: XXX-XXX"
    elif text == "1*2":
        response = "END your current balance is: yyyy"

    return response, 200, {'Content-Type': 'text/plain'}

if __name__ == '__main__':
    app.run(debug=True)
