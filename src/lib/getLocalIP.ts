const { networkInterfaces } = require('os');

const nets = networkInterfaces();

const getLocalIP = () => {
  console.log(Object.values(nets))
  const [ip] = Object.values(nets)
    .map((net: any[]) =>
      net
        .filter(({ family, internal }) => [4, 'IPv4'].includes(family) && !internal)
        .map(({ address }) => address)
    )
    .flat();
  return ip;
};

module.exports = getLocalIP;
