const Course = require("../models/Course")

class NewsController {
  // [GET] '/news'
  //promises
  async index(req, res, next) {
    const courses = await Course.find({})
      .exec()
      .then((courses) => {
        courses = courses.map(courses => courses.toObject())
        res.render('news', {courses})
      })
      .catch(next)
      // res.json(courses)
      // .catch((error) => next(error))
  }

  // callback
  // async index(req, res, next) {
  //   try {
  //     const courses = await Course.find({}).exec();
  //     res.json(courses);
  //   } catch (err) {
  //     next(err)
  //     // res.status(400).json({ error: 'ERROR!!!' });
  //   }
  // }
}

module.exports = new NewsController()