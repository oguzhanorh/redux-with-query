import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { albumsApi } from './apis/albumsApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

window.store = store;

setupListeners(store.dispatch);

export * from './thunks/fetchUsers'; //merkezden dışara aktarmak için kullanıyoruz.
export * from './thunks/addUser';
export * from './thunks/removeUser';

export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from './apis/albumsApi';
