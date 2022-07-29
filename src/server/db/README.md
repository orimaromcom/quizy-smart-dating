Set desired amount of Users in
`seeders/20220728095941-user-seeds-loop.js`,
line 5: `const AMOUNT_OF_USERS = ...`.

To update the db:
```
 npx sequelize-cli db:migrate:undo:all
 npx sequelize-cli db:migrate
 npx sequelize-cli db:seed:all
```

To post get brainmates for User 1:
- GET: `/brainmates/1`

To get new suggestions, first you need to calculate distances:
- POST: `/matching/postdistances/1`
- GET: `/matching/suggestions/1`
