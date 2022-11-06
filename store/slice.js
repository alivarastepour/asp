import { createSlice } from "@reduxjs/toolkit";
import { DATA } from "../utills/data";

const slice = createSlice({
  name: "appSlice",
  initialState: {
    all: DATA,
    selected: [],
  },
  reducers: {
    select: (state, action) => {
      return {
        ...state,
        selected: state.selected.concat(action.payload),
        all: state.all.filter(
          (el) => !action.payload.map((a) => a.uniqueId).includes(el.uniqueId)
        ),
      };
    },
    remove: (state, action) => {
      return {
        ...state,
        selected: state.selected.filter(
          (el) => !action.payload.map((a) => a.uniqueId).includes(el.uniqueId)
        ),
        all: state.all.concat(action.payload),
      };
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
