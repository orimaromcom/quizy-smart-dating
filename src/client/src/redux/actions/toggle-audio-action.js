import actionTypes from "./constants";
const toggleAudio = () => ({
  type: actionTypes.TOGGLE_AUDIO,
});

export const toggleAudioAction = () => {
  return async (dispatch) => {
    dispatch(toggleAudio());
  };
};
