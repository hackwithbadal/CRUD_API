const express = require('express');
const router = express.Router();
const items = require('../models/itemschema')


// responce for all the items

router.get('/',async(req,res) =>{
    try{
        const posts = await items.find();
        res.json(posts);
    }
    catch(err){
        res.json({massage:err})
    }
});


// responce for perticuler one item

router.get('/:itemid', async(req,res) => {
    try{
        const item = await items.findById(req.params.itemid)
        res.json(item)
    }catch(err){   
        res.send('Error ' + err)
    }    
})    


//deleting perticiler item form database

router.delete('/:itemid',async(req,res) =>{
    try{
        const item = await items.remove({_id: req.params.itemid });
        res.json(item);
    }
    catch(err){
        res.json({massage:err})
    }
});

// modifying the items on the datasbe 
router.patch('/:itemid',async(req,res) =>{
    try{
        const item = await items.updateOne({_id: req.params.itemid},{$set:{name:req.body.name}});
        res.json(item);
    }
    catch(err){
        res.json({massage:err})
    }
});

router.post('/',async(req,res) =>{
// for reciveing the data into database for user

    const post = new items({
        name:req.body.name,
        location:req.body.location,
        number:req.body.number,
        payment:req.body.payment
    })    
    try{
        const a1 =  await post.save() 
        res.json(a1);
    }catch(err){
        res.send('Error' +err);
    }    
});    

module.exports = router;