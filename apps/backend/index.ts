import express from "express";
import { preInterviewBody } from "./types";
import { scrapeGithub } from "./scrappers/github";
import {prisma} from "./db"
import cors from "cors";
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors())

app.post("/api/v1/pre-interview", async (req, res) => {
  const result = preInterviewBody.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      msg: "Incorrect body",
    });
  }

  const githubUrl = result.data.github.endsWith("/")
    ? result.data.github.slice(0, -1)
    : result.data.github;

  const githubUsername = githubUrl.split("/").pop()!;

  const userRepos = await scrapeGithub(githubUsername);

  return res.json({
    repos: userRepos,
  });
});

// 👇 OUTSIDE route
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});