const getAllUsers = async(req, res) =>{
    let userList = await userModel.getAllUsers()
    res.render("layouts/main",
    {
        data: {
            users: userList
        }
    }
    )
}