# API
## GET
----
- getAllPersonalAnswers
  - `/matching/personal-answers`
  - **array** of objects with userId, questionId, chosenOption (for all users)
-----
- getUserPersonalAnswers
  - `/matching/personal-answers/:id`
  - **array** of objects with userId, questionId, chosenOption (for one user)
-----
- getAllTriviaAnswers
  - `/matching/trivia-answers`
  - **array** of objects with userId, {Topic}CorrectAnswers, {Topic}QuestionsAnswered for all the topics (for all users)
-----
- getUserTriviaAnswers
  - `/matching/trivia-answers/:id`
  - **object** with userId, {Topic}CorrectAnswers, {Topic}QuestionsAnswered for all the topics (for one user)
------
- getUserAchievements
  - `/matching/achievements/:id`
  - **object** with userId and topics (categories) for all the topics with the amount of correct answers and all answers (for one user)
------
- getAllDistances
  - `/matching/distances`
  - **array** of objects with firstUserId, secondUserId, triviaDifference, personalSimilarity (for all users)
------
- getUserDistances
  - `/matching/distances/:id`
  - **array** of objects with firstUserId, secondUserId, triviaDifference, personalSimilarity (for one user) WHERE triviaDifference < 1 and personalSimilarity > -1 (only for possible matches)
-----
- getSuggestionsForUser
  - `/matching/suggestions/:id`
  - **array** of 2 objects (closest and farthest by distance) with userId, username, gender, age, location, bestResultDescription, amountOfSamePersonalAnswers (for one user)
-----
- getIsLikeFromTo
  - `/brainmates/like/:from/:to`
  - **true or false** -- if the user with id ":from" likes the user with id ":to" (to check back likes and animate mutual likes when the user swipes suggestions)
-----
- getBrainmatesForUser
  - `/brainmates/:id`
  - **object of 3 objects**: "likeBack", "dislikeBack" or "pending" - of objects with userId, username, gender, age, location, bestResultDescription and status.
    - If "likeBack" there is also a real phoneNumber.
    - If "dislikeBack" we can not show the failed brainmate at all.
    - If "pending" we can show the card blurred or with *********** instead of phoneNumber.
-----
## POST
------
- postUserDistances
  - `/matching/postdistances/:id`
  - call it after the end of each quiz
----
- postAllUsersDistances
  - `/matching/postdistances`
  - **do not call it from client**, it is a developers' endpoint. And better do not call it when there are 500 users in db. It is not a real app case.
-----
- postUserLike
  - `/brainmates/like`
  - body:
  ```
  {
    "firstUserId": number,
    "secondUserId": number,
    "firstUserLikesSecondUser": boolean
  }
  ```
