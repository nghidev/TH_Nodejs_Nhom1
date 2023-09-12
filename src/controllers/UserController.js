import express  from "express"
class aboutPage{
    index (req, res){
        return res.render("about", 
        {
            data:{
                title: 'About website',
                content: "admin@abc.com.vn"
            }
        })
    }
}
module.exports = new aboutPage();