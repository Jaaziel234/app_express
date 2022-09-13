const getUsers = () => {
    const obj = [
    {
        nombre: "Juan",
        apellido:"Perez",
        email:"carlos@gmail.com",
    },
    {
        nombre: "Jaaziel",
        apellido:"Martinez",
        email:"jaaziel@gmail.com",
    }
];
    return obj;
};
const getUserById = (id) => {};

module.exports = { getUsers, getUserById };
