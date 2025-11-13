// import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
// import { BaseUrl } from '../../../../BaseUrl';


// export const getTodos = createAsyncThunk(
//     "getTodos", async () => {
//         try {
//             // console.log("getAuthHeaders", getAuthHeaders())
//             const response = await BaseUrl.get(`/todos`);
//             // console.log("response.data", response.data)

//             return response.data;
//         } catch (error) {
//             throw error
//         }
//     })

// export const addTodos = createAsyncThunk("todos/addTodo", async (title) => {
//   const newTodo = { id: nanoid(), title, done: false };
//   const { data } = await BaseUrl.post("/todos", newTodo);
//   return data;
// });

// export const updateTodos = createAsyncThunk("todos/updateTodo", async (todo) => {
//   const { data } = await BaseUrl.put(`/todos/${todo.id}`, todo);
//   return data;
// });

// export const deleteTodos = createAsyncThunk("todos/deleteTodo", async (id) => {
//   await BaseUrl.delete(`/todos/${id}`);
//   return id;
// });

// const todosSlice = createSlice({
//   name: "todos",
//   initialState: {
//     items: [],
//     status: "idle",
//     error: null
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // fetch
//     .addCase(getTodos.pending, (state) => {
//         state.loading = true
//     })
//     .addCase(getTodos.fulfilled, (state, action) => {
//         state.loading = false
//         state.items = action.payload
//     })
//       .addCase(getTodos.rejected, (state, action) => {
//         state.status = false
//         state.error = action.error.message;
//       })
//       // add
//       .addCase(addTodos.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//       })
//       // update
//       .addCase(updateTodos.fulfilled, (state, action) => {
//         const idx = state.items.findIndex((t) => t.id === action.payload.id);
//         if (idx !== -1) state.items[idx] = action.payload;
//       })
//       // delete
//       .addCase(deleteTodos.fulfilled, (state, action) => {
//         state.items = state.items.filter((t) => t.id !== action.payload);
//       });
//   }
// });

// export default todosSlice.reducer;
// export const todosDataList = (state) => state.todos.items;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from '../../../../BaseUrl';

// Thunks
export const getTodos = createAsyncThunk(
    "getTodos", async () => {
        try {
            const response = await BaseUrl.get(`/todos`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

// export const addTodos = createAsyncThunk("todos/addTodo", async (title) => {
//   // ✅ Use Date.now() instead of nanoid() so ID is numeric like backend
//   const newTodo = { id: Date.now(), title, done: false };
//   const { data } = await BaseUrl.post("/todos", newTodo);
//   return data;
// });
export const addTodos = createAsyncThunk("todos/addTodo", async (title) => {
    const newTodo = { title, done: false };   // ❌ no id here
    const { data } = await BaseUrl.post("/todos", newTodo);
    return data;
  });
  

export const updateTodos = createAsyncThunk("todos/updateTodo", async (todo) => {
  const { data } = await BaseUrl.put(`/todos/${todo.id}`, todo);
  return data;
});

export const deleteTodos = createAsyncThunk("todos/deleteTodo", async (id) => {
  await BaseUrl.delete(`/todos/${id}`);
  return id;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      })
      // add
      .addCase(addTodos.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // update
      .addCase(updateTodos.fulfilled, (state, action) => {
        const idx = state.items.findIndex((t) => t.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
      })
      // delete
      .addCase(deleteTodos.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t.id !== action.payload);
      });
  }
});

export default todosSlice.reducer;
export const todosDataList = (state) => state.todos.items;

