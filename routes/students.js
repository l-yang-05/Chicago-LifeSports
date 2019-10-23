const router = require('express').Router();
let Students = require('../models/student.model');


// get all students
// GET /
// ========================================
// router.get()

// sort students by last name
// GET /
// ========================================

router.get('/', async (req, res) => {
    const sort = await Students.find().sort({last_name: 1})
    console.log(sort)
    res.send(sort)
})

router.post('/new', async (req, res) => {
    const student = new Students(req.body);
    await student
      .save()
      .then(result => {
        console.log(result);
        res.send(student);
      })
      .catch(err => {
        console.log(err);
      });
  });


module.exports = router