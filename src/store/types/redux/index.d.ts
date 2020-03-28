import { Store } from 'redux';

declare module 'redux' {
  interface Store<S = any, A extends Action = AnyAction> {
    sagaTask?: any;
  }
}
