const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const MONGO_URI = "mongodb+srv://project:project@cluster0.oxhzd.mongodb.net/Project";
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  ProfilePic: String,
  Category: String,
  comments: [{ content: String }],
});

const Article = mongoose.model("Article", articleSchema);

app.get("/api/articles", async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

app.get("/api/articles/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.json(article);
});

app.post("/api/articles", async (req, res) => {
  const newArticle = new Article(req.body);
  await newArticle.save();
  res.status(201).json(newArticle);
});

app.post("/api/articles/:id/comments", async (req, res) => {
  const article = await Article.findById(req.params.id);
  const newComment = { content: req.body.content };
  article.comments.push(newComment);
  await article.save();
  res.status(201).json(article);
});

app.put("/api/articles/:id/comments/:commentId", async (req, res) => {
  const article = await Article.findById(req.params.id);
  const comment = article.comments.id(req.params.commentId);
  comment.content = req.body.content;
  await article.save();
  res.json(article);
});

app.delete('/api/articles/:id/comments/:commentId', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    const comment = article.comments.id(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    article.comments.pull(req.params.commentId);
    await article.save();

    res.json({ message: "Comment deleted successfully", commentId: req.params.commentId });
  } catch (error) {
    console.error(error);
    let errorMessage = 'Server error';

    if (error.name === 'CastError') {
      errorMessage = 'Invalid article or comment ID';
    } else if (error.name === 'ValidationError') {
      errorMessage = 'Validation error';
    }

    res.status(500).json({ message: errorMessage });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});