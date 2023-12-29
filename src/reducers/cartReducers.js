const initialState = {
  id: "",
  name: "",
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default cartReducers;
