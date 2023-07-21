# TimerRN
Timer for React Native

## Overview
Features included:
- Timer implementation which shows popup after a certain time
- Stores last popup shown date in redux
- Resets timer on app background and app kill

## Getting Started

- Add timer folder under redux folder of your RN project
- Use below code where you want to handle event

  setTimeout( () => {
    dispatch(startTimer());
  },popup_interval_in_milliseconds);

  Mention time in milliseconds after which you want to handle popup display
- Use below code to resetTimer in case application goes to background or is killed

  const subscription = AppState.addEventListener("change", nextAppState => {
      if (nextAppState !== "active") {
          dispatch(resetTimer());
      }
      });
      return () => {
        subscription.remove();
      };
  }, [isScreenFocused]);

