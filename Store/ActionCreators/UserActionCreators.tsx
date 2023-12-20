import { Ilogin } from "../../moduls/moduls"
import { AppDispatch } from "../store";
import { userSlice } from "../Slice/UserSlice";
import { $host } from "../../hof/http";

export const registration = ({ userData }: { userData: Ilogin }) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.registerLoading());
    const { data } = await $host.post('api/user/registration', { number: userData.number, password: userData.password });
    dispatch(userSlice.actions.success(data));
  } catch (error) {
    const errorMessage = (error as Error).message || 'An error occurred';
    dispatch(userSlice.actions.registerError(errorMessage));
  }
};

export const check = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.loginLoading());
    // Assuming this is a synchronous action, replace this line with actual async logic if needed
    dispatch(userSlice.actions.check());
  } catch (error) {
    dispatch(userSlice.actions.checkError());
  }
};

export const login = ({ userData }: { userData: Ilogin }) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.loginLoading());
    const { data } = await $host.post('api/user/login', { number: userData.number, password: userData.password });
    dispatch(userSlice.actions.success(data));
  } catch (error) {
    const errorMessage = (error as Error).message || 'An error occurred';
    dispatch(userSlice.actions.loginError(errorMessage));
  }
};
