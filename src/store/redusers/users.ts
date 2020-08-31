export const actionTypes = {
  SET: `USERS_SET`,
}

const initState: any = []

export default function userReducer(state = initState, action: any) {
  switch (action.type) {
    case actionTypes.SET:
      return [...action.payload]
    default:
      return state
  }
}