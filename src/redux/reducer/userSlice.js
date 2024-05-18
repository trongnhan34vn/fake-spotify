import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authResponse: null
}

const userSlice = createSlice(
  {
    name: 'user',
    initialState: initialState,
    reducers: {
      getAuthResponse: (state, action) => {
        state.authResponse = action.payload
      }
    }
  }
)

export default userSlice.reducer;
export const { getAuthResponse } = userSlice.actions;
