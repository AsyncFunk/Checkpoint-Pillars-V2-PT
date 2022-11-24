# Checkpoint - Pillars (Express/Sequelize)

This checkpoint is primarily to help us understand how well you've absorbed the material covered so far. It covers the main backend libraries you've learned in the curriculum so far: Express and Sequelize.

To this end — and perhaps it goes without saying — we ask that you don't help each other or cheat.

## Resources

Please read the Academic Integrity Policy (`pillars-academic-integrity-policy.md` at the root of this repo).

## Things we're checking

- Express Routing and Route Methods
- Express Route Parameters
- Express Status Codes
- Sequelize Model Configuration
- Sequelize Class Methods

## Starting

- **Fork** this repo to your own GitHub
- Read the REQUIREMENTS.md
- Clone your fork to your local machine.
- Make sure your Postgres database is running!
- Create database:
  - Test Database: `createdb pillars_test`
- `npm install`
- You can run `npm run test-dev` (windows users can run `npm run test-windows`) which will run the test suite continuously (`npm test` runs the tests only once).
- Start working through the tests in `test/`. You have to mark them as active (from pending) by changing `xit` to `it`
- Read through the project structure. You'll be working exclusively in `server/db/User.js` and `server/routes/users.js`.

## IMPORTANT TIPS FOR SUCCESS

- **READ ALL COMMENTS CAREFULLY.** Specs often assume you have read the comments.
- After you have correctly defined the User model's `name` and `userType` fields, you can probably run all the remaining model and route specs in _any order_ (note, not 100% guaranteed). So if you get stuck, **move on and try some other specs**.
- You should `git commit` and `git push` very frequently — even for each passing spec if you like! This will prevent you from losing work.
- If you are uncertain what a spec is doing or asking of you, or you've gotten stuck, _ask for help_. We may not be able to give you any hints, but you won't know if you don't ask, and sometimes the problem is technical rather than related to the checkpoint itself.
- Please don't submit `console.log`s and other debug code.
