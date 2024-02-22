import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router() // creates an instance of an Express router

router.get('/', (_, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const id = +req.params.id // the "+" sign converts the string to a number
  const diary = diaryServices.findById(id)
  return (diary != null) ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addendDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.status(201).json(addendDiaryEntry)
  } catch (e) {
    const { message } = e as Error
    res.status(400).send(message)
  }
})

export default router
