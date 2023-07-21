import { START_TIMER, RESET_TIMER } from "./actionTypes";

const _INITIAL_STATE_ = {
  timerReached: false,
  showPopup : false
};

function timer(state = _INITIAL_STATE_, action) {

  switch (action.type) {

    case START_TIMER:
      {
        return {
          ...state,
          timerReached : action.timerReached,
          showPopup : action.showPopup,
          smsPopUpShownDate : action.smsPopUpShownDate
        };
      }

    case RESET_TIMER:
      {
        return {
          ...state,
          timerReached : action.timerReached,
          showPopup : action.showPopup
        };
      }

    default:
      {
        return state;
      }

  }
}

export default timer;
