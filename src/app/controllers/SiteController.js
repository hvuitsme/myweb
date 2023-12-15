class SiteController {
  // [GET] '/test'
  index(req, res) {
    res.render("home");
  }

  // [GET] '/test/:slug'
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
