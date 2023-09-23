
class HomeController {
    index(req, res) {
        return res.render("layouts/main", {
            data:
            {
                title: 'Home website',
                content: "admin@abc.com.vn",
                page: "home"
            }
        })
    }
    page(req, res) {
        return res.render("page/index", {
            data:
            {
                title: 'Home website',
                content: "admin@abc.com.vn"
            }
        })
    }

}
// module.exports = new homePage();
export default new HomeController;