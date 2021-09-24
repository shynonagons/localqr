var ServerType;
(function (ServerType) {
    ServerType["LOCAL"] = "local";
    ServerType["NGROK"] = "ngrok";
})(ServerType || (ServerType = {}));
const parseArgs = (args) => {
    let type = 'local';
    let port = 3000;
    let resource = '';
    args.forEach((arg) => {
        if (!Number.isNaN(+arg))
            port = +arg;
        if (arg.includes('/'))
            resource = arg;
        if (Object.values(ServerType).includes(arg))
            type = arg;
    });
    return { type, port, resource };
};
module.exports = { parseArgs };
