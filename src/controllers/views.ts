import express from 'express'
import {Response, Request} from 'express'

export const router = express.Router()

router.get('/',async(req : Request,res : Response)=>{
    try {
        res.render('pages/index')
    } catch (error) {
        res.render('pages/error/index')
    }
})