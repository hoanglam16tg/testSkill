const initialState = {
  list: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_API": {
      const newData = [...state.list];
      newData.push(action.payload);

      return {
        ...state,
        list: newData,
      };
    }
    default: {
      return state;
    }
  }
};

export default homeReducer;
