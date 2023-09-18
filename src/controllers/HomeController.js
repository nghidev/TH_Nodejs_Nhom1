// import express from "express"
// const aboutPage = (req, res) => {
//     return res.render("home", 
//     { data: 
//         { title: 'About website', 
//         content: "admin@abc.com.vn" 
//     } })
// }
class homePage {
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
module.exports = new homePage();