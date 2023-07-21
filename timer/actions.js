import { formatDateToISOString } from "lib/utils/DateTime/dateTimeUtils";
import { START_TIMER, RESET_TIMER } from "./actionTypes";

export function startTimer() {
  return {
    type : START_TIMER,
    timerReached : true,
    showPopup : true,
    smsPopUpShownDate : formatDateToISOString(new Date())
  };
}

export function resetTimer() {
  return {
    type: RESET_TIMER,
    showPopup : false,
    timerReached: false
  };
}


