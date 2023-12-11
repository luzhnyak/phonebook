import { RootState } from "./store";

export const getFilter = (state: RootState) => state.filter;
export const getOpenModal = (state: RootState) => state.openModal;
export const getUser = (state: RootState) => state.auth;

// export const getIsLoading = state => state.contacts.isLoading;
// export const getError = state => state.contacts.error;
