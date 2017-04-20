import { ACTIONS } from 'src/constants';
import api from 'src/api';

function fetchRecords(records: Array<Object>): Object {
  return {
    type: ACTIONS.FETCH_RECORDS,
    payload: { records },
  };
}

export function getRecords(): Promise {
  return async (dispatch) => {
    const response = await api.get('/ai/recording/list/');

    dispatch(fetchRecords(response.data.results));
  };
}

export function setRating(id: string, value: number): Object {
  return {
    type: ACTIONS.SET_RATING,
    payload: {
      id,
      value,
    },
  };
}
