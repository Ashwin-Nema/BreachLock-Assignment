import {newlist} from '../actiontypes'
const UserNotesList = (state=[], action) => {
    if (action.type === newlist) {
        return action.payload
    }

    return state
}

export default UserNotesList