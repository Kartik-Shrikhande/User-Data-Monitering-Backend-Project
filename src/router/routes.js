const express=require('express')
const router=express.Router()
const contactController=require('../controller/contactController')

router.post('/identify',contactController.userData)
router.all('/*',(req,res)=>{
res.status(404).send('Entered URL not Found,Enter Valid URL')
})

module.exports=router;
