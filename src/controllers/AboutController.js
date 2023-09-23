import express  from "express"
class AboutController{
    index (req, res){
        return res.render("layouts/main", 
        {
            data:{
                title: 'About website',
                content: "admin@abc.com.vn",
                page: "about"
                
            }
        })
    }
}
// module.exports = new aboutPage();
export default new AboutController;