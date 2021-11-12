import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: "",
  },
  reducers: {
    changeValue: (state, action) => {
        state.value = action.payload
    },
    addValue: state => {
      state.value += "f"
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeValue, addValue } = counterSlice.actions

export default counterSlice.reducer