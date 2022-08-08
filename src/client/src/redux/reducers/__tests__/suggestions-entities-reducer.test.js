import suggestionsEntitiesReducer from "../suggestions-entities-reducer";
import { fetchSuggestionsSuccess } from "../../actions/fetch-suggestions-action";
import { clearSuggestions } from "../../actions/clear-suggestions-action";
import { updateSuggestionsOrBrainmates } from "../../actions/update-suggestions-distance-value-action";

const suggestions = {
  "closest": {
      "userId": 43,
      "likeBack": true
  },
  "farthest": {
      "userId": 10,
      "likeBack": true
  }
}
const initialState = {
  suggestions: {},
  suggestionsOrBrainmates: "brainmates",
}

test('suggestionsEntitiesReducer should return the initial state', () => {
  expect(suggestionsEntitiesReducer(undefined, { type: undefined })).toEqual(
    {
      ...initialState
    }
  )
})

test('questionsEntitiesReducer should fetch suggestions', () => {
  const previousState = { ...initialState };
  expect(suggestionsEntitiesReducer(previousState, fetchSuggestionsSuccess(suggestions))).toEqual(
    { ...initialState, suggestions: suggestions }
  )
})

test('questionsEntitiesReducer should clear suggestions', () => {
  const previousState = { ...initialState, suggestions: suggestions };
  expect(suggestionsEntitiesReducer(previousState, clearSuggestions())).toEqual(
    { ...initialState }
  )
})

test('questionsEntitiesReducer should update suggestionsOrBrainmates', () => {
  const previousState = { ...initialState };
  expect(suggestionsEntitiesReducer(previousState, updateSuggestionsOrBrainmates("closest"))).toEqual(
    { ...initialState, suggestionsOrBrainmates: "closest",
  }
  )
})
