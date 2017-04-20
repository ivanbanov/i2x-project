import { ACTIONS } from 'src/constants';

type State = {
  records: Array<Object>,
  ratings: Object,
};

const initialState: State = {
  records: [],
  ratings: {},
};

export default function loggin(
  state: State = initialState,
  action: Object = {}
): State {
  switch (action.type) {
    case ACTIONS.FETCH_RECORDS: {
      const nextState = { ...state };
      const { payload } = action;
      nextState.records = payload.records;

      return nextState;
    }

    case ACTIONS.SET_RATING: {
      const nextState = { ...state };
      const { payload } = action;

      nextState.ratings = {
        ...state.ratings,
        [payload.id]: payload.value,
      };

      return nextState;
    }

    default: {
      return state;
    }
  }
}
