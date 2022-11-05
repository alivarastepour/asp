import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "appSlice",
  initialState: {
    all: [],
    selected: [],
  },
  reducers: {
    select: (state, action) => {
      return {
        all: state.all.filter((item) => item.uniqueId != action.payload),
        selected: state.selected.concat(action.payload),
      };
    },
    remove: (state, action) => {
      return {
        all: state.all.concat(action.payload),
        selected: state.selected.filter(
          (item) => item.uniqueId != action.payload
        ),
      };
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
