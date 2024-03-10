const asyncHandler = (requestHandler) =>{
    // directly return in form of promise.
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler};


// below is the syntax of passing function to a function and the below function is async.
// const asyncHandler = (fn) => async(req,res,next) => {
//     try {
//         await fn(req,res,next);
//     } catch (error) {
//         res.status(error.code || 5000).json({
//             success: false,
//             message: error.message
//         })
//     }
// }