import express from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo, getTodo } from '../controllers/todo.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.get('/edit/:id', getTodo);
router.post('/update/:id', updateTodo);
router.post('/delete/:id', deleteTodo);

export default router; 