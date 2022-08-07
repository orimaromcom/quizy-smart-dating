import profileEntitiesReducer from "../profile-entity-reducer";
import { fetchProfileSuccess } from "../../actions/fetch-profile-action";
import { updateProfileSuccess } from "../../actions/update-profile-action";

const profileInitialState = {
  id: null,
  email: null,
  userName: null,
  age: null,
  phone: null,
  location: null,
  picture: null,
  gender: null,
  preferences: {
    relation_type: null,
    gender: null,
    minAge: null,
    maxAge: null,
  },
};

const oldProfile = {
  id: 1,
  email: "example@gmail.com",
  userName: "Gal",
  age: 25,
  phone: "+123-456-789",
  location: "Tel Aviv",
  picture: "https://i1.lensdump.com/i/120JPz.jpg",
  gender: "female",
  preferences: {
    relation_type: "friends",
    gender: "any",
    minAge: 20,
    maxAge: 30,
  },
};

const newProfile = {
  ...oldProfile,
  location: "Haifa",
};

test('profileEntitiesReducer should return the initial state', () => {
  expect(profileEntitiesReducer(undefined, { type: undefined })).toEqual(
    {
      profile: profileInitialState
    }
  )
})

test('profileEntitiesReducer should fetch a profile', () => {
  const previousState = { profile: {} };
  expect(profileEntitiesReducer(previousState, fetchProfileSuccess(oldProfile))).toEqual(
    { profile: oldProfile }
  )
})

test('profileEntitiesReducer should update a profile', () => {
  const previousState = { profile: oldProfile };
  expect(profileEntitiesReducer(previousState, updateProfileSuccess(newProfile))).toEqual(
    { profile: newProfile }
  )
})
