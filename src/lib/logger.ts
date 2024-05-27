import log from "loglevel";
import prefix from "loglevel-plugin-prefix";

const colors = {
    TRACE: "#FF00FF",
    DEBUG: "#00FFFF",
    INFO: "#0000FF",
    WARN: "#FFFF00",
    ERROR: "#ff0000",
};

if (process.env.NODE_ENV == "development") {
    log.setLevel("debug");
}

prefix.reg(log);

prefix.apply(log);

export { log as logger };
