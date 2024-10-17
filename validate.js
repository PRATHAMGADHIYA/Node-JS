const isvalid = (req, res) => {
    let { email, password, username } = req.body

    if (!email || !password || !username) {
        response.send("Please enter a valid data")
    }
    else {
        next()
    }

}
module.exports = isvalid