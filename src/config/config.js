require("dotenv").config();

const Config = {
    port: process.env.PORT,
    mongo_uri:process.env.MONGO_URI,
    nameDB:process.env.NAMEDB,
};
module.exports = { Config };
