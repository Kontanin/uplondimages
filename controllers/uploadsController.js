const path=require('path')
const{StatusCodes}=require('http-status-codes');
const CustomError =require('../errors')
const uploadProductImage = async (req, res) => {
    if(!req.files){
        throw new CustomError.BadRequestError('no files')
    }
    const productImage=req.files.image;
    if(!productImage.mimetype.startsWith('')){
        throw new CustomError.BadRequestError('Please upload image')
    }
    const maxSize= 1024 
    if (productImage.size>maxSize){
        throw new CustomError.BadRequestError('Please upload image semeller')

    }
    const imagePath=path.join(__dirname,'../pubulic/uploads/'+`${productImage.name}`
    );
    await productImage.mv(imagePath);
    return res.status(StatusCodes.OK).json({image:{src:`/upload/
    ${productImage.name}`}})
}


module.exports ={
    uploadProductImage

}