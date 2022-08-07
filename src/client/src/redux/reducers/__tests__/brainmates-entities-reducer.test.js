import brainmatesEntitiesReducer from "../brainmates-entities-reducer";
import { fetchBrainmatesSuccess } from "../../actions/fetch-brainmates-action";

const brainmates = {
  "likeBack": [
    {
      "userId": 18,
      "username": "Marcia43",
      "bestResultDescription": "90% correct in Film",
      "phoneNumber": "+972-53-680-09-40"
    },
    {
      "userId": 20,
      "username": "Nina91",
      "bestResultDescription": "75% correct in History",
      "phoneNumber": "+972-52-049-55-19"
    }
  ],
  "pending": [
    {
      "userId": 31,
      "username": "Maximus61",
      "bestResultDescription": "74% correct in Music",
      "phoneNumber": "*********"
    }
  ],
  "dislikeBack": [
    {
      "userId": 49,
      "username": "Orval15",
      "bestResultDescription": "9% correct in Celebrities",
      "phoneNumber": "*********"
    }
  ]
}

test('brainmatesEntitiesReducer should return the initial state', () => {
  expect(brainmatesEntitiesReducer(undefined, { type: undefined })).toEqual(
    {
      brainmates: {}
    }
  )
})

test('brainmatesEntitiesReducer should fetch brainmates', () => {
  const previousState = { brainmates: {} };
  expect(brainmatesEntitiesReducer(previousState, fetchBrainmatesSuccess(brainmates))).toEqual(
    { brainmates: brainmates }
  )
})
