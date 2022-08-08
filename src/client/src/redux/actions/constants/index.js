const QUIZ_ACTIONS = {
  FETCH_QUESTIONS_REQUEST: "fetch_questions_request",
  FETCH_QUESTIONS_SUCCESS: "fetch_questions_success",
  FETCH_QUESTIONS_FAILURE: "fetch_questions_failure",

  UPDATE_QUOTE: "update_quote",

  INCREMENT_QUESTION_INDEX: "increment_question_index",
  CLEAR_QUESTION_INDEX: "clear_question_index",
  CLEAR_QUESTIONS_ARRAY: "clear_questions_array",

  QUIZ_ONGOING: "quiz_ongoing",
  QUIZ_FINISHED: "quiz_finished",

  INCREMENT_ANSWER_INDEX: "increment_answer_index",
  CLEAR_ANSWERS_ARRAY: "clear_answers_array",

  FETCH_ACHIEVEMENTS_REQUEST: "fetch_achievements_request",
  FETCH_ACHIEVEMENTS_SUCCESS: "fetch_achievements_success",
  FETCH_ACHIEVEMENTS_FAILURE: "fetch_achievements_failure",

  FETCH_BRAINMATES_REQUEST: "fetch_brainmates_request",
  FETCH_BRAINMATES_SUCCESS: "fetch_brainmates_success",
  FETCH_BRAINMATES_FAILURE: "fetch_brainmates_failure",

  FETCH_SUGGESTIONS_REQUEST: "fetch_suggestions_request",
  FETCH_SUGGESTIONS_SUCCESS: "fetch_suggestions_success",
  FETCH_SUGGESTIONS_FAILURE: "fetch_suggestions_failure",

  CLEAR_SUGGESTIONS: "clear_suggestions",
  UPDATE_SUGGESTION_OR_BRAINMATES: "update_suggestion_or_brainmates",

  UPDATE_PROFILE_REQUEST: "update_profile_request",
  UPDATE_PROFILE_SUCCESS: "update_profile_success",
  UPDATE_PROFILE_FAILURE: "update_profile_failure",

  FETCH_PROFILE_REQUEST: "fetch_profile_request",
  FETCH_PROFILE_SUCCESS: "fetch_profile_success",
  FETCH_PROFILE_FAILURE: "fetch_profile_failure",

  POST_DISTANCES_REQUEST: "post_distances_request",
  POST_DISTANCES_SUCCESS: "post_distances_success",
  POST_DISTANCES_FAILURE: "post_distances_failure",

  POST_ANSWERS_REQUEST: "post_answers_request",
  POST_ANSWERS_SUCCESS: "post_answers_success",
  POST_ANSWERS_FAILURE: "post_answers_failure",

  SET_TRIVIA_REQUEST: "set_trivia_request",
  SET_TRIVIA_SUCCESS: "set_trivia_success",
  SET_TRIVIA_FAILURE: "set_trivia_failure",

  POST_USER_LIKE_REQUEST: "post_user_like_request",
  POST_USER_LIKE_SUCCESS: "post_user_like_success",
  POST_USER_LIKE_FAILURE: "post_user_like_failure",

  UPDATE_PAGE_BUTTON: "update_page_button",

  USER_LOGOUT: "user_logout",

  ADD_ANSWER: "add_answer",

  SHOW_ERROR: "show_error",

  SHOW_SUCCESS: "show_success",

  HIDE_TOASTER: "hide_toaster",

  TOGGLE_AUDIO: "toggle_audio",

  TOGGLE_IS_BROKEN: "toggle_is_broken",

  INCREMENT_SCORE: "increment_score",
};

export default QUIZ_ACTIONS;
