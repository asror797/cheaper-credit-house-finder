const model = require('./model')


module.exports = {
   GET:async(_,res)=>{
      try {
         res.json(await model.GetHouse())
      } catch (error) {
         res.sendStatus(500)
      }
   },
   CREATE:async(req,res)=>{
      const {house_room,house_price,complex_id} = req.body
      try {
         res.json(await model.NewHouse(house_room,house_price,complex_id))
      } catch (error) {
         res.sendStatus(500)
      }
   },
   GET_HOUSE:async(req,res)=>{
      const {complex_id}= req.body
      try {
         res.json(await model.GetComplexHouse(complex_id))
      } catch (error) {
         res.sendStatus(500)
      }
   }
}