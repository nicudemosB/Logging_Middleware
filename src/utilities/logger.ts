import express from 'express'

const logger = (req: express.Request, res: express.Response, next: Function):
void => {  // return void since we're only logging to the console
    let url = req.url;
    console.log(`${url} was visited`);
    next();
    
}

export default logger; 