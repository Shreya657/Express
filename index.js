import express from 'express'
const app=express();
import dotenv from 'dotenv';
dotenv.config();
 

 const githubData={ //api.github.com/users/Shreya657
  "login": "Shreya657",
  "id": 181844581,
  "node_id": "U_kgDOCta6ZQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/181844581?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Shreya657",
  "html_url": "https://github.com/Shreya657",
  "followers_url": "https://api.github.com/users/Shreya657/followers",
  "following_url": "https://api.github.com/users/Shreya657/following{/other_user}",
  "gists_url": "https://api.github.com/users/Shreya657/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Shreya657/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Shreya657/subscriptions",
  "organizations_url": "https://api.github.com/users/Shreya657/orgs",
  "repos_url": "https://api.github.com/users/Shreya657/repos",
  "events_url": "https://api.github.com/users/Shreya657/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Shreya657/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Shreya ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "let's code",
  "twitter_username": null,
  "public_repos": 18,
  "public_gists": 0,
  "followers": 6,
  "following": 1,
  "created_at": "2024-09-17T11:16:35Z",
  "updated_at": "2025-05-06T20:15:26Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//get a list of 5  jokes
app.get("/api/j",(req,res)=>{
  const joke=[
    {
      id:1,
      title:"A joke",
      content:'this is a joke'
    },
     {
      id:2,
      title:"Another joke",
      content:'this is another joke'
    },
    {
      id:3,
      title:"3rd joke",
      content:'this is 3rd joke'
    },
    {
      id:4,
      title:"4th joke",
      content:'this is 4th joke'
    },
    {
      id:5,
      title:"last joke",
      content:'this is last joke'
    },
  ]
  res.send(joke);
})

app.get('/x', (req, res) => {
  res.send('<h1>hey im shreya</h1>');
})
app.get('/c', (req, res) => {
  res.send('<h3>chai aur code</h3>')
})
app.get('/g', (req, res) => {
  res.json(githubData);
})
const port=process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
