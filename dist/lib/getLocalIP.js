const { networkInterfaces } = require('os');
const nets = networkInterfaces();
const getLocalIP = () => {
    const [ip] = Object.values(nets)
        .map((net) => net
        .filter(({ family, internal }) => family === 'IPv4' && !internal)
        .map(({ address }) => address))
        .flat();
    return ip;
};
module.exports = getLocalIP;
