import { RootState } from ".";
import { useSelector } from "react-redux";

// Actions
const INCREMENT = "INCREMENT";
interface IncrementAction {
  type: typeof INCREMENT;
  increment?: number;
}
const SQUARE = "SQUARE";
interface SquareAction {
  type: typeof SQUARE;
}
export type CounterActionTypes = IncrementAction | SquareAction;

// Reducer
interface CounterState {
  count: number;
}
const initialState: CounterState = {
  count: 5,
};
export default (state = initialState, action: CounterActionTypes) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case SQUARE:
      return { count: state.count ** 2 };
    default:
      return state;
  }
};

// Action creators
interface CounterActionCreator {
  (payload?: number): CounterActionTypes;
}
export const increment: CounterActionCreator = (payload: number = 1) => ({
  type: INCREMENT,
  payload,
});
export const square: CounterActionCreator = () => ({
  type: SQUARE,
});

// Selectors
const selectCount = (state: RootState) => state.counter.count;
export const useCount = () => useSelector(selectCount);
