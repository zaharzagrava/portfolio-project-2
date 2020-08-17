
// Action Types
export const ClientActionTypes = {
  CLIENT_LOADED: "CLIENT_LOADED"
}

// Inittial State
const InitialState = {
  byIds: {},
  allIds: []
};

// Reducer
export default function ClientReducer(state = InitialState, action) {
  switch (action.type) {
    case ClientActionTypes.CLIENT_LOADED:
      return {
        byIds: {
          ...state.byIds,
          [action.payload.id]: action.payload
        },
        allIds: [...state.allIds, action.payload.id]
      }
  
    default:
      return state
  }
}

// Action Creators
export const ClientActionCreators = {
  clientLoaded: function(client) {
    return {
      type: ClientActionTypes.CLIENT_LOADED,
      payload: client
    }
  }
}