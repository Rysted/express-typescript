import express from 'express'

// importing the diaryRouter from the routes folder
import diaryRouter from './routes/diaries'

const app = express() // creates an instance of an Express application
app.use(express.json()) // middleware that transforms the raw string of req.body into a JSON object

const PORT = 3000 // port that the server will listen on

app.use('/api/diaries', diaryRouter) // tells the app to use the diaryRouter for any requests to /api/diaries

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// this is a catch-all route handler that will be used if no other route is matched
app.get('*', (_, res) => {
  res.send('Not found')
})
