# API
Endpoints are protected with auth (baerer token).
## GET
---
- getUserInfo
  - `/user/:email`
  - **object** with id, email, userName, phone, location, age,picture, gender, preferences (relation_type, gender, minAge, maxAge)
}
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
- getAllQuestions
  - `/quiz/questions`
  - **array of 10 objects**: shuffeled questions (4 personal and 6 trivia — 1 for each topic) with question, type (trivia/personal), topic, option1, ..., option4, correctOption (null for personal)
------
- getRandomQuote
  - `/quiz/quote`
  - **object** with quote, author and category (love)
-----
## POST
-----
- postUserInfo
  - `/user`
  - body:
  ```
  {
    "email": string,
    "userName": string,
    "phone": string,
    "location": string,
    "age": number,
    "picture": string,
    "gender": string (male/female/other),
    "preferences": {
        "relation_type": string (romantic/friends),
        "gender": string (male/female/any),
        "minAge": number,
        "maxAge": number
    }
  }
  ```
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
-----
- postAnswer
  - `quiz/answers`
  - body: array of answers where each answer has the following structure:
  ```
  {
    userId: number
    type: "personal"/"trivia"
    chosenOption: text
    isCorrect: boolean (null for personal)
    questionId: number
    topic: text
  }
  ```
