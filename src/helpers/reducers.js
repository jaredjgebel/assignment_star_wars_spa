import {
   GET_ENTRIES,
   GET_ENTRIES_SUCCESS,
   GET_ENTRIES_FAILURE,
   GET_SINGLE_ENTRY,
   GET_SINGLE_ENTRY_SUCCESS,
   GET_SINGLE_ENTRY_FAILURE,
   PREV_PAGE,
   NEXT_PAGE
} from './actions'

const initialState = {
   entriesType: "",
   entries: [],
   pages: {},
   singleEntry: null,
   ui: {
      error: null,
      isFetching: false,
   }
}

export default function encyclopediaApp(state = initialState, action) {
   switch (action.type) {
      case GET_ENTRIES:
      case GET_SINGLE_ENTRY:
         return {
            ...state,
            ui: {
               ...state.ui,
               isFetching: true,
               error: null,
            }
         }
      case GET_ENTRIES_SUCCESS:
         return {
            ...state,
            entriesType: action.data.entriesType,
            entries: action.data.entries,
            pages: {
               ...state.pages,
               ...action.data.pages,
            },
            singleEntry: null,
            ui: {
               ...state.ui,
               error: null,
               isFetching: false,
            }
         }
      case GET_ENTRIES_FAILURE:
         return {
            ...state,
            entries: [],
            pages: {},
            ui: {
               ...state.ui,
               error: action.error,
               isFetching: false,
            }
         }
      case GET_SINGLE_ENTRY_SUCCESS:
         return {
            ...state,
            entriesType: action.data.entriesType,
            entries: action.data.entries,
            pages: {
               ...state.pages,
               ...action.data.pages,
            },
            singleEntry: true,
            ui: {
               ...state.ui,
               error: null,
               isFetching: false,
            }
         }
      case GET_SINGLE_ENTRY_FAILURE:
         return {
            ...state,
            entries: [],
            pages: {},
            singleEntry: true,
            ui: {
               ...state.ui,
               error: true,
               isFetching: false,
            }
         }
      case PREV_PAGE:
      case NEXT_PAGE:
         return {
            ...state,
            pages: {
               ...state.pages,
               next: action.data.pages.next,
               previous: action.data.pages.previous,
            }
         }
      default:
         return state
   }
}