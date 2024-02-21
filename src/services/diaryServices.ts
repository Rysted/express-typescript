import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
// .ts | .js | .json  <-- this is the priority order for the file extensions
import diaryData from './diaries.json'

// Declare array (Array<DiaryEntry> or DiaryEntry[])
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

/**
 * Esta función devuelve una matriz de objetos DiaryEntry.
 */
export const getEntries = (): DiaryEntry[] => diaries

/**
 * La función `findById` en TypeScript recupera una entrada del diario por su ID y devuelve una versión
 * no confidencial de la entrada.
 * @param {number} id - El parámetro `id` es un número que representa el identificador único de una
 * entrada del diario que queremos encontrar en la matriz `diaries`.
 * @returns La función `findById` devuelve un objeto `NonSensitiveInfoDiaryEntry` con la propiedad de
 * comentario eliminada, o `indefinido` si no se encuentra ninguna entrada con la identificación dada
 * en la matriz `diaries`.
 */
export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id) // find the entry with the given id
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }

  return undefined
}

/**
 * La función `getEntriesWithoutSensitiveInfo` devuelve una serie de entradas del diario sin
 * información confidencial.
 * @returns La función `getEntriesWithoutSensitiveInfo` devuelve una matriz de objetos
 * `NonSensitiveInfoDiaryEntry`. Cada objeto contiene las propiedades `id`, `date`, `weather` y
 * `visibility` extraídas de la matriz `diaries`.
 */
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility }
  })
}

/**
 * La función `addDiary` agrega una nueva entrada de diario a una serie de diarios con una
 * identificación única.
 * @param {NewDiaryEntry} newDiaryEntry - El parámetro `newDiaryEntry` es un objeto que representa una
 * nueva entrada del diario. Debe tener la siguiente estructura:
 * @returns La función `addDiary` devuelve el objeto `DiaryEntry` recién agregado después de insertarlo
 * en la matriz `diaries`.
 */
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1, // generate a new id that is one larger than the current largest id
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
