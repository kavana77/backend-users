const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const users = [
    {
      id: 1,
      username: 'octocat',
      name: 'The Octocat',
      repoCount: 8,
      location: 'San Francisco',
    },
    {
      id: 2,
      username: 'torvalds',
      name: 'Linus Torvalds',
      repoCount: 25,
      location: 'Portland',
    },
    {
      id: 3,
      username: 'gaearon',
      name: 'Dan Abramov',
      repoCount: 50,
      location: 'London',
    },
    {
      id: 4,
      username: 'addyosmani',
      name: 'Addy Osmani',
      repoCount: 42,
      location: 'Mountain View',
    },
    {
      id: 5,
      username: 'tj',
      name: 'TJ Holowaychuk',
      repoCount: 150,
      location: 'Victoria',
    },
  ];
app.get('/users',(req,res)=>{
    res.send(users)
})
app.get('/users/:id',(req,res)=>{
    let userId = parseInt(req.params.id);
    let user = users.find((user)=>user.id === userId)
    if(user){
        res.json({user})
    }else{
        res.status(404).json({message:"No user Found."})
    }
})
const games = [
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      genre: 'Action-adventure',
      platform: 'Nintendo Switch',
      releaseYear: 2017,
    },
    {
      id: 2,
      title: 'God of War',
      genre: 'Action-adventure',
      platform: 'PlayStation 4',
      releaseYear: 2018,
    },
    {
      id: 3,
      title: 'Cyberpunk 2077',
      genre: 'Role-playing',
      platform: 'PC',
      releaseYear: 2020,
    },
    {
      id: 4,
      title: 'Hollow Knight',
      genre: 'Metroidvania',
      platform: 'PC',
      releaseYear: 2017,
    },
    {
      id: 5,
      title: 'Minecraft',
      genre: 'Sandbox',
      platform: 'Multi-platform',
      releaseYear: 2011,
    },
  ];
app.get('/games',(req,res)=>{
    res.send(games)
})
app.get('/games/:id',(req,res)=>{
    const gameId = parseInt(req.params.id)
    const game = games.find((game)=>game.id === gameId)
    if(game){
        res.json({game})
    }else{
        res.status(404).json({message:"No game found"})
    }
})
const players = [
    {
      id: 1,
      name: 'Virat Kohli',
      country: 'India',
      role: 'Batsman',
      runs: 12000,
      wickets: 4,
    },
    {
      id: 2,
      name: 'James Anderson',
      country: 'England',
      role: 'Bowler',
      runs: 1243,
      wickets: 600,
    },
    {
      id: 3,
      name: 'Kane Williamson',
      country: 'New Zealand',
      role: 'Batsman',
      runs: 7000,
      wickets: 29,
    },
    {
      id: 4,
      name: 'Pat Cummins',
      country: 'Australia',
      role: 'Bowler',
      runs: 750,
      wickets: 250,
    },
    {
      id: 5,
      name: 'Ben Stokes',
      country: 'England',
      role: 'All-rounder',
      runs: 4500,
      wickets: 150,
    },
  ];
app.get('/players',(req,res)=>{
    res.send(players)
})
app.get('/players/:id',(req,res)=>{
    const playerId = parseInt(req.params.id)
    const player = players.find((player)=>player.id === playerId)
    if(player){
        res.json({player})
    }else{
        res.status(404).json({message:'No player found.'})
    }
})
const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})