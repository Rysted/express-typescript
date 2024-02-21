import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

/**
 * La función `parseComment` toma un comentario de una solicitud, verifica si es una cadena y devuelve
 * el comentario si es una cadena; de lo contrario, arroja un error.
 * @param {any} commentFromRequest - Se espera que el parámetro `commentFromRequest` sea una cadena que
 * contenga un comentario de una solicitud. La función `parseComment` comprueba si `commentFromRequest`
 * es una cadena y la devuelve si lo es; de lo contrario, arroja un error que indica que el comentario
 * es incorrecto o falta.
 * @returns La función `parseComment` devuelve el parámetro `commentFromRequest` después de realizar
 * una verificación de tipo para garantizar que sea una cadena. Si `commentFromRequest` no es una
 * cadena, se genera un error con el mensaje "Comentario incorrecto o faltante".
 */
const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }

  return commentFromRequest
}

/**
 * La función `parseDate` en TypeScript verifica si la entrada es una representación de cadena válida
 * de una fecha y la devuelve, o arroja un error si no lo es.
 * @param {any} dateFromRequest - Se espera que el parámetro `dateFromRequest` en la función
 * `parseDate` sea un valor de fecha que se pasa como argumento a la función. La función comprueba si
 * `dateFromRequest` es una cadena y un objeto de fecha válido. Si no es una cadena o no es válida
 * @returns La función `parseDate` devuelve el parámetro `dateFromRequest` como una cadena si es tanto
 * una cadena como una fecha válida. Si el parámetro `dateFromRequest` no es una cadena o no es una
 * fecha válida, se genera un error con el mensaje "Fecha incorrecta o faltante".
 */
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromRequest
}

/**
 * La función "parseWeather" toma datos meteorológicos de una solicitud, los valida y devuelve la
 * información meteorológica.
 * @param {any} weatherFromRequest - El parámetro `weatherFromRequest` son los datos recibidos de una
 * solicitud meteorológica, que se espera que sea una cadena que represente la información
 * meteorológica. La función "parseWeather" toma estos datos como entrada y devuelve un objeto
 * "Weather" analizado.
 * @returns La función `parseWeather` devuelve el objeto `weatherFromRequest` después de realizar
 * algunas comprobaciones de validación. Si "weatherFromRequest" no es una cadena o no coincide con el
 * tipo "Weather", se generará un error. De lo contrario, la función devolverá el objeto
 * `weatherFromRequest`.
 */
const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }

  return weatherFromRequest
}

/**
 * La función `parseVisibility` toma un valor de visibilidad de una solicitud, lo valida y lo devuelve
 * si es válido.
 * @param {any} visibilityFromRequest - Se espera que el parámetro `visibilityFromRequest` sea una
 * cadena que represente el valor de visibilidad de una solicitud. La función `parseVisibility`
 * comprueba si la entrada es una cadena y si es un valor de visibilidad válido. Si la entrada no es
 * una cadena o no es un valor de visibilidad válido, se producirá un error.
 * @returns La función `parseVisibility` devuelve el valor `visibilityFromRequest` si es una cadena
 * válida y también un tipo de visibilidad válido.
 */
const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }

  return visibilityFromRequest
}

/**
 * La función `isString` comprueba si la entrada es una cadena y devuelve un valor booleano.
 * @param {string} string - El parámetro `string` en la función `isString` es de tipo `string`. Este
 * parámetro se utiliza para comprobar si la entrada es una cadena o no comparando su tipo con el tipo
 * de cadena en JavaScript.
 * @returns La función `isString` devuelve un valor booleano que indica si la entrada `string` es de
 * tipo cadena o no.
 */
const isString = (string: string): boolean => {
  return typeof string === 'string'
}

/**
 * La función `isDate` comprueba si una cadena determinada se puede analizar en una fecha válida.
 * @param {string} date - El parámetro `fecha` es una cadena que representa una fecha que desea
 * verificar si es una fecha válida.
 * @returns La función `isDate` devuelve un valor booleano que indica si la cadena de entrada `date` se
 * puede analizar correctamente en un objeto de fecha válido.
 */
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

/**
 * La función `isWeather` comprueba si un parámetro dado es un valor válido en la enumeración
 * `Weather`.
 * @param {any} param - El `param` en la función `isWeather` es el valor que desea verificar si es un
 * tipo de clima válido. La función verifica si el `param` está incluido en los valores de la
 * enumeración `Weather`.
 * @returns La función `isWeather` comprueba si el parámetro `param` está incluido en los valores del
 * objeto `Weather`. Si se encuentra "param" en los valores del objeto "Tiempo", la función devolverá
 * "verdadero", lo que indica que el parámetro es un valor meteorológico válido. Si `param` no se
 * encuentra en los valores del objeto `Weather`, la función devolverá
 */
const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

/**
 * La función isVisibility comprueba si un parámetro determinado es un valor válido de la enumeración
 * Visibility.
 * @param {any} param - El parámetro "param" es un valor que se verifica para ver si está incluido en
 * la enumeración "Visibilidad".
 * @returns La función `isVisibility` devuelve un valor booleano. Comprueba si el parámetro de entrada
 * `param` está incluido en los valores de la enumeración `Visibility` y devuelve verdadero si lo está
 * y falso si no lo está.
 */
const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

/**
 * La función `toNewDiaryEntry` toma un objeto como entrada y devuelve un nuevo objeto de entrada del
 * diario con propiedades de comentario, fecha, clima y visibilidad analizadas.
 * @param {any} object - El parámetro `object` en la función `toNewDiaryEntry` es un objeto que
 * contiene propiedades como `comentario`, `fecha`, `clima` y `visibilidad`. Estas propiedades se
 * utilizan para crear un nuevo objeto de entrada de diario de tipo `NewDiaryEntry`.
 * @returns La función `toNewDiaryEntry` devuelve un nuevo objeto de entrada del diario con las
 * propiedades `comentario`, `fecha`, `clima` y `visibilidad` que se analizan a partir del objeto de
 * entrada.
 */
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
