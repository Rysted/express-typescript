import { Weather, Visibility } from './enums'

/* La interfaz `DiaryEntry` en el fragmento de código TypeScript define la estructura de un objeto de
entrada del diario. Especifica que una entrada del diario debe tener las siguientes propiedades: */
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiarywEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'> // Omit the comment property from DiaryEntry
export type NewDiaryEntry = Omit<DiaryEntry, 'id'> // Omit the id property from DiaryEntry
