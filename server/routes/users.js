const router = require('express').Router();
const { route } = require('../app');
const {
  models: { User },
} = require('../db');

/**
 * All of the routes in this are mounted on /api/users
 * For instance:
 *
 * router.get('/hello', () => {...})
 *
 * would be accessible on the browser at http://localhost:3000/api/users/hello
 *
 * These route tests depend on the User Sequelize Model tests. However, it is
 * possible to pass the bulk of these tests after having properly configured
 * the User model's name and userType fields.
 */

// Add your routes here:

router.get('/unassigned', async (req, res, next) => {
  try {
    const response = await User.findUnassignedStudents();
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});

router.get('/teachers', async (req, res, next) => {
  try {
    const teachers = await User.findTeachersAndMentees();
    res.send(teachers);
  } catch (error) {
    res.sendStatus(404);
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    if (isNaN(req.params.id)) {
      res.sendStatus(400);
    }

    const deletee = await User.findByPk(req.params.id);
    deletee.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(404);
    next();
  }
});

router.post('/', async (req, res, next) => {
  const { name } = req.body;
  const userWithSameName = await User.findOne({ where: { name: name } });
  console.log(userWithSameName);

  if (userWithSameName) {
    res.sendStatus(409);
  } else {
    const newUser = await User.create({ name: name });
    res.status(201).send(newUser);
  }
});

module.exports = router;
