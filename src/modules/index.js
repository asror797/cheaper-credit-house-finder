const express = require('express')
const router = express.Router()


//modules 

const CompanyModel = require('./company/company')
const ComplexModel = require('./complex/complex')
const BankModel = require('./bank/bank')
const HouseModel = require('./house/house')

router
      .get('/companies',CompanyModel.GET)
      .get('/complexes',ComplexModel.GET)
      .get('/banks',BankModel.GET)
      .get('/houses',HouseModel.GET)
      .post('/company-complex',ComplexModel.GET_BY_ID)
      .post('/complex-house',HouseModel.GET_HOUSE)
      .post('/get-credit',BankModel.GET_CREDIT)
      .post('/new-company',CompanyModel.CRETATE)
      .post('/new-complex',ComplexModel.CREATE)
      .post('/new-bank',BankModel.CREATE)
      .post('/new-house',HouseModel.CREATE)


module.exports = router