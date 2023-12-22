// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB URI)
mongoose.connect('your-mongodb-uri', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Blog schema
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Blog = mongoose.model('Blog', blogSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/blogging-service.html');
});

app.post('/submit', async (req, res) => {
  const { blogTitle, blogContent } = req.body;

  // Create a new blog entry in the database
  try {
    const newBlog = new Blog({ title: blogTitle, content: blogContent });
    await newBlog.save();
    res.json({ message: 'Blog submitted successfully' });
  } catch (error) {
    console.error('Error saving blog:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/recent-blogs', async (req, res) => {
  try {
    // Retrieve recent blogs from the database
    const recentBlogs = await Blog.find().sort({ _id: -1 }).limit(5);
    res.json(recentBlogs);
  } catch (error) {
    console.error('Error fetching recent blogs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
