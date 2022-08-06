import achievementsEntitiesReducer from "../achievement-entities-reducer";
import { fetchAchievementsSuccess } from "../../actions/fetch-achievements-action";

const newAchievements = {
  "userId": 54,
  "categories": {
      "Film": {
          "correct": 2,
          "answers": 10
      },
      "Sports": {
          "correct": 3,
          "answers": 10
      },
      "Computers": {
          "correct": 1,
          "answers": 10
      },
      "Celebrities": {
          "correct": 9,
          "answers": 10
      },
      "History": {
          "correct": 2,
          "answers": 10
      },
      "Music": {
          "correct": 8,
          "answers": 10
      }
  }
}

test('achievementsEntitiesReducer should return the initial state', () => {
  expect(achievementsEntitiesReducer(undefined, { type: undefined })).toEqual(
    { achievements: {} }
  )
})

test('achievementsEntitiesReducer calculates score right', () => {
  const previousState = { achievements: {} };
  expect(achievementsEntitiesReducer(previousState, fetchAchievementsSuccess(newAchievements))).toEqual(
    { achievements: newAchievements }
  )
})
