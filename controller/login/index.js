const getLoginPage = (req, res) => {
    res.render('./login/login.html');
}


module.exports = {
    getLoginPage,
}