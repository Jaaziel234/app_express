const { getUsers, getUserById } = require ("./service");
const userController = {
    getUsers: (req, res) =>{
        const result = getUsers();
        res.send(result);
    },
    getUserById:(req,res)=>{
        const {
            params: { id },
        } = req;
        res.send(id);
    },
};   
module.exports = { userController };