exports.checkAccountPayload = (req, res, next) => {

  console.log('checkaccountpayload middleware')
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {

  console.log('checkAccountNameUnique middleware')
  next()
}

exports.checkAccountId = (req, res, next) => {

  console.log('checkAccountId middleware')
  next()
}
