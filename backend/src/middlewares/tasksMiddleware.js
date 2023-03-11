const validateBody = (request,response,next)=>{
    const { body } = request;
    
    if(body.title === undefined){
        return response.status(400).json({message: 'the field "title" is required'});
    }
   
    if(body.title === ''){
        return response.status(400).json({message: 'title cannot be empty'});
    }
  
    next();
};

module.exports = {
    validateBody,
};