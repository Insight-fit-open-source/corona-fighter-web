import { all, fork } from 'redux-saga/effects';
import detailsSync from './details-sync';
import detailsUpdate from './details-update';
import invitationAdd from './invitation-add';
import invitationsSync from './invitations-sync';

export default function* rootSaga() {
  if (typeof window !== 'undefined') {
    yield all([
      fork(detailsSync),
      fork(detailsUpdate),
      fork(invitationsSync),
      fork(invitationAdd),
    ]);
  }
}
