
const getRegisterPage = (req, res) => {
    res.render('./register/register.html');
}

const postRegitser = (req, res) => {
    console.log(req.body);

    
    res.send('ㅇㅅㅇ');
}

module.exports = {
    getRegisterPage,
    postRegitser
}