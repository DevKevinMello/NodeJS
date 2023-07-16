import { Router } from 'express';
import multer from 'multer';
import * as ApiController from '../controllers/apiController';

//const path = require('path');

/*const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./tmp');
    },
    filename: (req, file, cb) => {
        let randomName = Math.floor(Math.random() * 99999999);
        let extension = path.extname(file.originalname);
        cb(null, `${randomName+Date.now()}.${extension}`);
    }
});

const upload = multer({
    dest: './tmp'
    storage
});
*/
const upload = multer({
    dest: './tmp',
    fileFilter: (req, file, cb) => {
        const allowed: string[] = ['image/jpg','image/jpeg','image/png']
        cb(null, allowed.includes(file.mimetype));
    },
    limits: {
        fieldSize: 2000000,//tamenho arquivo em bytes ex: 5mb
        fieldNameSize: 100//qtd caracteres nome arquivo em bytes
    }
});
const router = Router();

router.get('/ping', ApiController.ping);
router.post('/upload', upload.single('txt_upload'), ApiController.uploadFile);

export default router;