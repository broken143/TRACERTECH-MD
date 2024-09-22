const { Sequelize } = require("sequelize");
require("dotenv").config();

const toBool = x => x === "true";
const DATABASE_URL = process.env.DATABASE_URL || "./database.db";

module.exports = {
    // Boolean Values (converted from Strings)
    LOGS: toBool(process.env.LOGS) || false,
    ANTILINK: toBool(process.env.ANTI_LINK) || false,
    HEROKU: toBool(process.env.HEROKU) || false,
    AUTO_READ: toBool(process.env.AUTO_READ) || false,
    AUTO_STATUS_READ: toBool(process.env.AUTO_STATUS_READ) || true,
    DELETED_LOG: toBool(process.env.DELETED_LOG) || true,
    STATUS_SAVER: toBool(process.env.STATUS_SAVER) || false,
    AUTO_REACT: toBool(process.env.AUTO_REACT) || false,

    // String Values
    SESSION_ID: process.env.SESSION_ID || "GuruBot~XJwSkv1T", // Put your session
    HANDLERS: process.env.HANDLER === "false" || process.env.HANDLER === "null" ? "^" : "[.]",
    BOT_INFO: process.env.BOT_INFO || "４ｐＦ๛Trappy;𝚃𝚁𝙰𝙲𝙴𝚁𝚃𝙴𝙲𝙷-𝙼𝙳;https://i.ibb.co/s2wCJ0p/AddText.png", // YourName;BotName;Image/VideoLink
    SUDO: process.env.SUDO || "254727472670",
    PRESENCE: process.env.PRESENCE || "recording", // "unavailable", "available", "composing", "recording", "paused"
    CAPTION: process.env.CAPTION || "©𝚃𝚁𝙰𝙲𝙴𝚁𝚃𝙴𝙲𝙷",
    TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi",
    ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
    BRANCH: "master",
    AUTHOR: process.env.AUTHOR || "４ｐＦ๛Trappy",
    ANTIWORD: process.env.ANTIWORD || "badword1,badword2,badword3",
    PACKNAME: process.env.PACKNAME || "begamd",
    WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome to @gname",
    GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
    RMBG_KEY: process.env.RMBG_KEY || "",
    WORK_TYPE: process.env.WORK_TYPE || "private",
    DELETED_LOG_CHAT: process.env.DELETED_LOG_CHAT || false,
    REMOVEBG: process.env.REMOVEBG || "",
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,

    // Number Values
    WARN_COUNT: 3,

    // Database Configuration
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === "./database.db" ?
        new Sequelize({
            dialect: "sqlite",
            storage: DATABASE_URL,
            logging: false,
        }) : new Sequelize(DATABASE_URL, {
            dialect: "postgres",
            ssl: true,
            protocol: "postgres",
            dialectOptions: {
                native: true,
                ssl: { require: true, rejectUnauthorized: false },
            },
            logging: false,
        }),
};
