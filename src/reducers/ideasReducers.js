import ideasInitialState from './ideasInitialState'
import {
  ADD_IDEA,
  REMOVE_IDEA,
  UPDATE_IDEA
} from '../actions/ideasActions'

function timeNow() {
  const date = new Date()
  // const format = { hour: '2-digit', minute:'2-digit', hour12: true }
  const format = { hour12: true }
  return date.toLocaleTimeString([], format)
}

const ideasReducers = (state = ideasInitialState, action) => {
  switch (action.type) {
    case ADD_IDEA:
      const newIdeasArray = state.ideas.slice()
      newIdeasArray.push(action.id)
      return {
        ...state,
        ...{
          ideas: newIdeasArray,
          ideasById: {
            ...state.ideasById,
            ...{ [action.id]: { header: '', body: '', color: ''} }
            },
          lastStatus: `${timeNow()} Added a new idea`
        }
      }
    case REMOVE_IDEA:
      const removedIdeaArray = state.ideas.slice()
      const indexToRemove = removedIdeaArray.indexOf(action.id)
      removedIdeaArray.splice(indexToRemove, 1)
      return {
        ...state,
        ...{
          ideas: removedIdeaArray,
          ideasByID: {
              ...state.ideasById,
              ...{ [action.id]: { header: '', body: '', color: '' } }
            },
          lastStatus: `${timeNow()} Removed an idea`
        }
      }
    case UPDATE_IDEA:
      return {
        ...state,
        ...{
          ideasById: {
          ...state.ideasById,
          ...{
            [action.id]: {
                ...state.ideasById[action.id],
                ...action.newContent
              }
            }
          },
          lastStatus: `${timeNow()} Updated an idea
              (${Object.keys(action.newContent).toString()})`
        }
      }
    default:
      return state
  }
}

export default ideasReducers
