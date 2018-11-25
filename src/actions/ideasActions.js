/*
 * action types
 */

export const ADD_IDEA = 'ADD_IDEA'
export const REMOVE_IDEA = 'REMOVE_IDEA'
export const UPDATE_IDEA = 'UPDATE_IDEA'


/*
 * action creators
 */

 let nextIdeaId = 0

 export function addIdea () {
   return { type: ADD_IDEA, id: nextIdeaId++ }
 }

 export function removeIdea (id) {
   return { type: REMOVE_IDEA, id }
 }

 export function updateIdea (id, newContent) {
   return { type: UPDATE_IDEA, id, newContent }
 }
