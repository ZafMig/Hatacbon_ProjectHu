import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import {IToken} from "../../moduls/IToken";
interface UserSlice {
  user: string;
  role: string;
  loading: boolean;
  error: string;
  checkError: boolean
}

const initialState: UserSlice = {
  user: '',
  role: "user",
  loading: false,
  error: "",
  checkError: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerLoading(state) {
      state.error = ''
      state.loading = true
    },
    registerError(state, action) {
      state.loading = false
      state.error = action.payload
    },
    success(state, action: PayloadAction<any>) {
      const token: IToken = jwt_decode(action.payload.token)
      state.user = token.role
      localStorage.setItem('token', action.payload.token)
      state.error = ""
      state.loading = false
    },
    loginLoading(state) {
      state.error = ''
      state.loading = true
    },
    loginError(state, action: PayloadAction<any>) {
      state.loading = false
      state.error = action.payload
    },
    loginProcess(state, action: PayloadAction<any>) {
      state.role = action.payload.role;
    },
    check(state) {
      const token  = localStorage.getItem('token')
      if (token) {
        const decodedToken: IToken = jwt_decode(token)
        state.user = decodedToken.role
      } else {
        state.checkError = true
      }
      state.loading = false

    },
    checkError(state) {
      state.checkError = true
      state.loading = false
    },
  },
});
export default userSlice.reducer;