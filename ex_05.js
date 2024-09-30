const firstname = "John"
const lastname = "Doe"
const cardholderFirstName = "John"
const cardholderLastName = "Doe"
const cardNumber = "1111 2222 3333 4444"
const expiryDateMonth = "21"
const expiryDateYear = "2042"

let computedBankInfo = cardholderFirstName + "," + cardholderLastName + "," + cardNumber + "," + expiryDateMonth + "/" + expiryDateYear

displayInCard(computedBankInfo);
