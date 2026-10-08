import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "First Joke",
      content: "This is first Joke",
    },
    {
      id: 2,
      title: "Second Joke",
      content: "This is Second Joke",
    },
    {
      id: 3,
      title: "Third Joke",
      content: "This is Third Joke",
    },
    {
      id: 4,
      title: "Fourth Joke",
      content: "This is Fourth Joke",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
