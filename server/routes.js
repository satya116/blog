

const router = require('express').Router()

const Post = require('./schema/post-schemma')

router.get('/lol', (req,res)=>{
    res.send("<h1> hath maaro </h1>")
})

router.post('/create-post', async (req,res)=>{
    console.log(req.body)

    try{

      const post=  await new Post(req.body)
      post.save()

      res.status(200).json('blog saved succesfully')
        


    }catch(error){
        res.status(500).json({"error": "uyrfurfuyrfyu"})

    }

})

router.get('/posts', async (req,res)=>{

    try {

        let posts = await Post.find({})     // async await is important af
        res.status(200).json(posts)

        
    } catch (error) {

        res.status(500).json({error: error.message})
        
    }

})


router.get('/post/:id', async(req, res)=>{

    try{
       let post= await Post.findById(req.params.id)
       res.status(200).json(post)   
    }catch(error){

        res.status(500).json({error})

    }


})






module.exports = router;