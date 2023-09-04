//-------------------------------Validation for Email ---------------------------------------------------//

function validEmail(email) {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z-]+\.[a-zA-Z-.]+$/
    return emailRegex.test(email)
  }

  
//-------------------------------Validation for Phone Number -------------------------------------------//

function validPhone(phone) {
    const phoneRegex = /^\d+$/
    return phoneRegex.test(phone)
  }


module.exports={validEmail,validPhone}