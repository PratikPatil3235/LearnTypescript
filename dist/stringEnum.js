var LogLevel;
(function (LogLevel) {
    LogLevel["error"] = "ERROR";
    LogLevel["debug"] = "DEBUG";
    LogLevel["warn"] = "WARN";
    LogLevel["info"] = "INFO";
})(LogLevel || (LogLevel = {}));
var details = LogLevel.info;
console.log(details);
