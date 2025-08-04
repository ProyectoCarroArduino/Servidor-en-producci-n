
export function auth(req, res, next){
    if(req.user?.id) {
        return next();
    }else{
        return res.sendStatus(401);
    }
}