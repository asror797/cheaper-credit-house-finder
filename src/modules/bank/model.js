const { Fetch } = require('../../utils/postgresql')


const AllBanks = `
   SELECT 
      *
   FROM
      banks
   
`

const CreatBank = `
   INSERT INTO banks(
      bank_name,
      max_kredit,
      kredit_duration
   )VALUES (
      $1,$2,$3
   )RETURNING *
`

const PickBank = ` 
SELECT 
   bank_id,
   bank_name,
   max_kredit,
   kredit_duration,
   CASE 
      WHEN kredit_duration = 10 
         THEN max_kredit/120 
      WHEN kredit_duration = 15 
         THEN max_kredit/180  
      WHEN kredit_duration = 20 
         THEN max_kredit/240  
      END monthPayment 
FROM  
   banks 
WHERE  max_kredit = (
         SELECT 
            min(max_kredit) 
         FROM 
            banks 
         WHERE 
            kredit_duration = $1 and max_kredit > $2)
`



const GetBanks = () => Fetch(AllBanks)

const NewBank = (bank_name,max_kredit,kredit_duration) => Fetch(CreatBank,bank_name,max_kredit,kredit_duration)

const GetCredit = (kredit_duration,max_kredit) => Fetch(PickBank,kredit_duration,max_kredit)



module.exports = {
   GetBanks,
   NewBank,
   GetCredit
}


