import ideasInitialState from './ideasInitialState'
import {
  ADD_IDEA,
  REMOVE_IDEA,
  UPDATE_IDEA
} from '../actions/ideasActions'

function timeNow () {
  const date = new Date()
  // const format = { hour: '2-digit', minute:'2-digit', hour12: true }
  const format = { hour12: true }
  return date.toLocaleTimeString([], format)
}

const ideasReducers = (state = ideasInitialState, action) => {
  switch (action.type) {
    /*
     * Add an idea:
     * - Push a new idea id in <array> of idea IDs
     * - Create a new object with empty content and the new ID in ideas object
     * - Update status
     */
    case ADD_IDEA:
      const newIdeasArray = state.ideas.slice()
      newIdeasArray.push(action.id)
      return {
        ...state,
        ...{
          ideas: newIdeasArray,
          ideasById: {
            ...state.ideasById,
            ...{ [action.id]: { header: '', body: '', color: '' } }
          },
          lastStatus: `${timeNow()} Added a new idea`
        }
      }
    /*
     * Remove an idea:
     * - Pop the idea id from <array> of idea IDs
     * - Empty the object with its content
     * - Update status
     *
     * @TODO I'm sure there must a better way to do this while
     * maintaining inmutability of objects
     */
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
    /*
     * Update an idea:
     * - Merge new content with content available for the updated idea
     * - Update status
     */
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
    /*
     * Default action
     * - Return state
     */
    default:
      return state
  }
}

export default ideasReducers
