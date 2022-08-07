# Quizy Smart Dating

Live app: [https://quizy-smart-dating.herokuapp.com/](https://quizy-smart-dating.herokuapp.com/)

The goal of this app is to match people according to their interests and knowledge.

[![DEMO](https://img.youtube.com/vi/wLQVGUw8hUY/0.jpg)](https://www.youtube.com/watch?v=wLQVGUw8hUY)

## The main flow:
1. The user answers 10 questions:
    - 6 knowledge questions from different categories (Film, Sports, Computers, Celebrities, History, Music),
    - 4 personality questions.
1. The algorithm calculates how close is this this user to another users.
    - Mean difference between percentages of right answers for each topic. This is first priority, smaller difference means closer.
    - Amount of equal answers to personality questions. This is second priority, greater amount means closer.
1. The user receives two suggestions, which (1) correspond to user's request (age, gender ect), (2) were not disliked or liked by the user before, (3) did not dislike the user:
    - the closest user (supposed to be someone very similar),
    - the farthest user (supposed to be someone completely different).
1. The user likes or dislikes the suggested users according to the given information.
1. The liked suggestions are moved to potential brainmates.
1. If a potential brainmate likes the user back, this brainmate becomes active - their picture and phone number are shown.

This is a summary of the flow for the sake of readability. There are much more details in the actual app :)
