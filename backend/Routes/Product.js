// Product.js
import express from 'express';
import multer from 'multer';
import { addProduct, deleteProduct, getProduct, getProductById, updateProduct } from '../controllers/Product.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), addProduct);
router.get('/', getProduct);
router.get('/:productId', getProductById);
router.put('/:productId', upload.single('image'), updateProduct); // Updated route for updating a product
router.delete('/:productId', deleteProduct);

export default router;
