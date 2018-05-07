/*
State Shape
Actions
GET_ENTRIES
GET_ENTRIES_SUCCESS
GET_ENTRIES_FAILURE
GET_SINGLE_ENTRY
GET_SINGLE_ENTRY_SUCCESS
GET_SINGLE_ENTRY_FAILURE
PREV_PAGE
NEXT_PAGE

{
   entriesType: "planets",
   entries: [
      {
         name: "Alderaan",
         population: "2000000000",
         climate: "temperate",
         terrain: "grasslands, mountains",
      },
      {
         "name": "Tatooine", 
         "population": "200000", 
         "climate": "arid", 
         "terrain": "desert", 
      },...
   ],
   pages: {
      count: 61,
      next: "https://swapi.co/api/planets/?page=2", 
      previous: null
   },
   singleEntry: null,
   ui: {
      error: null,
      isFetching: false,
   }
}

{
   entriesType: "planets",   
   entries: [],
   pages: {},
   singleEntry: {
      name: "Alderaan",
      population: "2000000000",
      climate: "temperate",
      terrain: "grasslands, mountains",
      rotation_period: "24",
      orbital_period: "364",
      diameter: "12500",
      gravity: "1 standard",
      surface_water: "40",
      url: "https://swapi.co/api/planets/1/"
      next: "https://swapi.co/api/planets/2/"
      previous: null,
   },
   error: null,
}
*/
// Action constants
export const GET_ENTRIES = "GET_ENTRIES"
export const GET_ENTRIES_SUCCESS = "GET_ENTRIES_SUCCESS"
export const GET_ENTRIES_FAILURE = "GET_ENTRIES_FAILURE"
export const GET_SINGLE_ENTRY = "GET_SINGLE_ENTRY"
export const GET_SINGLE_ENTRY_SUCCESS = "GET_SINGLE_ENTRY_SUCCESS"
export const GET_SINGLE_ENTRY_FAILURE = "GET_SINGLE_ENTRY_FAILURE"
export const PREV_PAGE = "PREV_PAGE"
export const NEXT_PAGE = "NEXT_PAGE"
export const GET_NEW_PAGE = "GET_NEW_PAGE"

export function getEntries() {
	return {
		type: GET_ENTRIES,
	}
}

export function getEntriesSuccess(data) {
	return {
		type: GET_ENTRIES_SUCCESS,
		data,
	}
}

export function getEntriesFailure(error) {
	return {
		type: GET_ENTRIES_FAILURE,
		error,
	}
}

export function previousPage(data) {
	return {
		type: PREV_PAGE,
		data,
	}
}

export function getInitialData() {
	return (dispatch) => {
		dispatch(getEntries())

		const resourceType = 'planets'
		const url = `https://swapi.co/api/${resourceType}`

		fetch(`${url}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`${response.status} ${response.statusText}`)
				}
				return response.json()
			})
			.then(json => {
				dispatch(getEntriesSuccess(json))
			})
			.catch(error => {
				dispatch(getEntriesFailure(error))
			})
	}
}

// "https://swapi.co/api/planets/?page=2"
export function getNewPage(resourceType, page) {
	return (dispatch) => {
		const url = `https://swapi.co/api/${resourceType}/?page=${page}`

		fetch(`${url}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`${response.status} ${response.statusText}`)
				}
				return response.json()
			})
			.then(json => {
				dispatch(getEntriesSuccess(json))
			})
			.catch(error => {
				dispatch(getEntriesFailure(error))
			})
	}
}