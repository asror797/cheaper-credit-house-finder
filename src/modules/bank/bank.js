const model = require('./model')

module.exports = {
   GET:async(_,res) => {
      try {
         res.json(await model.GetBanks())
      } catch (error) {
         res.sendStatus(500)
      }
   },
   CREATE:async(req,res)=>{
      const {bank_name,max_kredit,kredit_duration} = req.body
      try {
         res.json(await model.NewBank(bank_name,max_kredit,kredit_duration))
      } catch (error) {
         res.sendStatus(500)
      }
   },
   GET_CREDIT:async(req,res) => {
      const {kredit_duration,max_kredit} = req.body
      try {
         res.json(await model.GetCredit(kredit_duration,max_kredit))
      } catch (error) {
         res.sendStatus(500)
      }
   }
}