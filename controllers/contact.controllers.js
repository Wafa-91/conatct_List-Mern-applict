const Contact=require('../models/Contact')


//post new contact
exports.postcontact=async(req,res)=>{

    try
   {  
       const newcontact=new Contact({...req.body})
       if(!req.body.email){res.status(400).send({msg:"email is required check again"});return;}

const contact=await Contact.findOne({email:req.body.email})
if(contact){res.status(400).send({msg:"contact already exist"}); console.log(contact)
 return;}

 const response=await newcontact.save()
 res.send({response:response,msg:"new contact is saved"})}
   
   catch(error)
   {
   res.status(400).send(`can not save it ${error}`)
   }}
   


// get all contacts

exports.getallcontact=async(req,res)=>{
  try
  {
const result=await Contact.find()
res.send({response:result,msg:"successful getting contacts"})
  }

  catch(error)
  {
res.status(400).send({msg:"can not get contacts"})
  }
}


// get contact by id

exports.getcontactactByid=async(req,res)=>
{
try
{
const result=await Contact.findOne({_id:req.params.id})
res.send({response:result,msg:"getting contact succfl"})
}
catch(error)
{
    res.status(400).send({msg:"can not get a contact"})

}
}

//delete contact by id 
exports.deletecontactactByid=async(req,res)=>
{
    try
    {
  const result =await Contact.deleteOne({_id:req.params.id})
  result.n?res.send({msg:"deleted contact"}):  res.send({msg:"there is no contact with this id"})

    }
    catch(error)
    {
res.status(400).send({msg:"there is no id "})
    }
}


//updatecontact by id 
exports.updatecontactactByid=async(req,res)=>{
  try
  {
const result=await Contact.updateOne({ _id:req.params.id },{ $set: {...req.body} })
console.log(result)
result.nModified?res.send({msg:"updated"}):res.send({msg:"contact already updated"})
  }
  catch(error)
  {
res.status(400).send({msg:"there is no contact with this id"})
  }
}