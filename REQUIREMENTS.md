# Pillars Project

## Overview

You are the lead engineer for Acme Tutors, an educational services company. Your job is to complete a tutoring dashboard for students and their mentors. Your team has already built a fully-functional front-end, as well as test specs for all the required server-side business features. Your fullstack expertise is required to complete the app. Before getting started, please carefully review the expectations.

## Requirements

The feature requirements detailed below will serve as your primary source of truth for attempting the project. The provided test specs are there to supplement your development process. However, your score will be based on the number of requirements implemented. **Code that does not pass the related test specs, but still accomplishes the required feature will receive credit.**

### FEATURES

#### Tier 1: Basic Fields, Class Methods, GET Routes (8 total)

- Sequelize: name Field

  - [ ] must be a string
  - [ ] may not be empty or null
  - [ ] must be unique

- Sequelize: userType Field

  - [ ] must be either STUDENT or TEACHER
  - [ ] must be STUDENT by default
  - [ ] may not be null

- Sequelize: User.findUnassignedStudents Class Method

  - [ ] returns all students who do not have a mentor

- Express: GET [`/api/users/unassigned`](http://localhost:3000/api/users/unassigned)

  - [ ] responds with all students who do not have a mentor

If you've finished all the Tier 1 requirements, now's a good time to commit your work and push to GitHub:

`git commit -am "Tier 1" && git push origin main`

#### Tier 2: Eager Loading, One-To-Many Associations (3 total)

- Sequelize: User.findTeachersAndMentees Class Method

  - [ ] returns all teachers
  - [ ] includes all teachers' mentees

- Express: GET [`/api/users/teachers`](http://localhost:3000/api/users/teachers)

  - [ ] responds with all teachers and their assigned mentees

If you've finished all the Tier 2 requirements, now's a good time to commit your work and push to GitHub:

`git commit -am "Tier 2" && git push origin main`

#### Tier 3: Virtual Fields, Route Parameters, DELETE Routes (5 total)

- Sequelize: Virtual Fields

  - [ ] isStudent is true if (and only if) the user is a STUDENT
  - [ ] isTeacher is true if (and only if) the user is a TEACHER
  - [ ] isStudent and isTeacher are both virtual fields (i.e. they do not appear in the database)

- Express: DELETE `/api/users/:id`

  - [ ] deletes a specific user by their id (e.g. DELETE `http://localhost:3000/api/users/5` would delete the user with id 5)
  - [ ] responds with the appropriate status codes (204 if user was successfully deleted, 404 if the user does not exist, 400 if id is not a valid number)

If you've finished all the Tier 3 requirements, now's a good time to commit your work and push to GitHub:

`git commit -am "Tier 3" && git push origin main`

#### Tier 4: POST Routes, Request Body (2 total)

- Express: POST `/api/users`

  - [ ] creates a new user based on the JSON data submitted in the request body
  - [ ] responds with the appropriate status codes (201 if user was successfully created, 409 if the provided name is already taken)

If you've finished all the Tier 4 requirements, now's a good time to commit your work and push to GitHub:

`git commit -am "Tier 4" && git push origin main`
