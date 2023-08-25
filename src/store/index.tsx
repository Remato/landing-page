import { configureStore, createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',

  initialState: {
    name: '',
    email: '',
    isOpenedModal: false,
    isLoggedIn: false,
  },

  reducers: {
    closeModal: (state) => {
      state.isOpenedModal = false
    },

    loginIntent: (state) => {
      state.isOpenedModal = true
    },

    login: (state, action) => {
      state.isLoggedIn = true
      state.isOpenedModal = false
      state.name = action.payload.name
      state.email = action.payload.email
    },

    logout: (state) => {
      state.name = ''
      state.email = ''
      state.isLoggedIn = false
      google.accounts.id.disableAutoSelect()
      FB.logout()
    },
  },
})

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})

export const { login, loginIntent, logout, closeModal } = userSlice.actions

export type UserStore = ReturnType<typeof store.getState>
