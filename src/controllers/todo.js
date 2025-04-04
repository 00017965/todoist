import Todo from '../models/todo.js';

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.render('index', { todos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = new Todo({ title });
    await newTodo.save();
    res.redirect('/');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    
    todo.title = title || todo.title;
    todo.completed = completed !== undefined ? completed : todo.completed;
    
    await todo.save();
    res.redirect('/');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.render('edit', { todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getTodos, createTodo, updateTodo, deleteTodo, getTodo }; 