// Certifique-se de importar 'http' e 'HttpResponse' corretamente
import { http, HttpResponse } from 'msw'

import config from '../../.config'

const apiKey = config.REACT_APP_UNSPLASH_ACCESS_KEY
export const fotos = [
  {
    id: 'randomId0',
    alt_description: 'random image 1',
    urls: {
      regular: 'https://example.com/random1',
      small: 'https://example.com/random1-small',
    },
  },
  {
    id: 'randomId1',
    alt_description: 'random image 2',
    urls: {
      regular: 'https://example.com/random2',
      small: 'https://example.com/random2-small',
    },
  },
  {
    id: 'randomId2',
    alt_description: 'random image 3',
    urls: {
      regular: 'https://example.com/random3',
      small: 'https://example.com/random3-small',
    },
  },
  {
    id: 'randomId3',
    alt_description: 'random image 4',
    urls: {
      regular: 'https://example.com/random4',
      small: 'https://example.com/random4-small',
    },
  },
  {
    id: 'randomId4',
    alt_description: 'random image 5',
    urls: {
      regular: 'https://example.com/random5',
      small: 'https://example.com/random5-small',
    },
  },
  {
    id: 'randomId5',
    alt_description: 'random image 6',
    urls: {
      regular: 'https://example.com/random6',
      small: 'https://example.com/random6-small',
    },
  },
  {
    id: 'randomId6',
    alt_description: 'random image 7',
    urls: {
      regular: 'https://example.com/random7',
      small: 'https://example.com/random7-small',
    },
  },
  {
    id: 'randomId7',
    alt_description: 'random image 8',
    urls: {
      regular: 'https://example.com/random8',
      small: 'https://example.com/random8-small',
    },
  },
  {
    id: 'randomId8',
    alt_description: 'random image 9',
    urls: {
      regular: 'https://example.com/random9',
      small: 'https://example.com/random9-small',
    },
  },
  {
    id: 'randomId9',
    alt_description: 'random image 10',
    urls: {
      regular: 'https://example.com/random10',
      small: 'https://example.com/random10-small',
    },
  },
  {
    id: 'randomId10',
    alt_description: 'random image 11',
    urls: {
      regular: 'https://example.com/random11',
      small: 'https://example.com/random11-small',
    },
  },
  {
    id: 'randomId11',
    alt_description: 'random image 12',
    urls: {
      regular: 'https://example.com/random12',
      small: 'https://example.com/random12-small',
    },
  },
]
export const results = [
  {
    id: 'randomId9',
    alt_description: 'random image 10',
    urls: {
      regular: 'https://example.com/random10',
      small: 'https://example.com/random10-small',
    },
  },
  {
    id: 'randomId10',
    alt_description: 'random image 11',
    urls: {
      regular: 'https://example.com/random11',
      small: 'https://example.com/random11-small',
    },
  },
  {
    id: 'randomId11',
    alt_description: 'random image 12',
    urls: {
      regular: 'https://example.com/random12',
      small: 'https://example.com/random12-small',
    },
  },
]

export const localQuery = 'abcd'
export const setActivateSearchMock = true
const handlers = [
  http.get('https://api.unsplash.com/photos/random', () => {
    return new HttpResponse([...fotos], { status: 200 })
  }),

  http.get(
    `https://api.unsplash.com/search/photos`,
    ({ request }) => {
      return HttpResponse.json([...results])
    },
    { status: 200 }
  ),
]

export { handlers }
