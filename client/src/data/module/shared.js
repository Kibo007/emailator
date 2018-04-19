export const FETCH_USER = 'FETCH_USER';

export const userFetched = payload => ({
  type: FETCH_USER,
  payload,
});
