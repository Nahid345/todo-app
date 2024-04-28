import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  title: string;
  discription: string;
  isCompleted?: boolean;
};

type initialTodo = {
  todos: TTodo[];
};

const initialState: initialTodo = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
