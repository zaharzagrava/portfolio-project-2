
// Action Types
export const ClientActionTypes = {
  CLIENT_INFO_LOADED: "CLIENT_INFO_LOADED"
}

// Inittial State
const InitialState = {
  byIds: {},
  allIds: []
};

// Reducer
export default function ClientReducer(state = InitialState, action) {

  switch (action.type) {
    case ClientActionTypes.CLIENT_INFO_LOADED:
      // console.log("INSIDE")

      let allIds = [...state.allIds];
      if(!state.allIds.includes(action.payload.id)){
        allIds.push(action.payload.id)
      }

      const newState = {
        byIds: {
          ...state.byIds,
          [action.payload.id]: {
            ...state.byIds[action.payload.id],
            ...action.payload
          }
        },
        allIds: allIds
      }

      // console.log(newState);

      return newState;
  
    default:
      return state
  }
}

// Action Creators
export const ClientActionCreators = {
  clientLoaded: function(client) {
    return {
      type: ClientActionTypes.CLIENT_INFO_LOADED,
      payload: client
    }
  }
}