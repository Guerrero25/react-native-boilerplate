import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

export function useActions<A extends ActionFunction>(
  actions: A | A[],
  deps?: any[]
): A extends ActionFunction ? A : A[];

export function useActions<A extends ActionFunction>(
  actions: A | A[],
  deps?: any[]
): A | A[] {
  const dispatch = useDispatch();

  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch]
  );
}
