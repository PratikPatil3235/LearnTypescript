"use strict";
var LogLevel;
(function (LogLevel) {
    LogLevel["error"] = "ERROR";
    LogLevel["debug"] = "DEBUG";
    LogLevel["warn"] = "WARN";
    LogLevel["info"] = "INFO";
})(LogLevel || (LogLevel = {}));
let details = LogLevel.info;
console.log(details);
