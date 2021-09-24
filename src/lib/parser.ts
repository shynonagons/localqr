enum ServerType {
  LOCAL = 'local',
  NGROK = 'ngrok',
}

type ParsedArgs = {
  type: ServerType;
  port: number;
  resource: string;
};

const parseArgs = (args: string[]): ParsedArgs => {
  let type = 'local' as ServerType;
  let port = 3000;
  let resource = '';
  args.forEach((arg) => {
    if (!Number.isNaN(+arg)) port = +arg;
    if (arg.includes('/')) resource = arg;
    if (Object.values(ServerType).includes(arg as ServerType))
      type = arg as ServerType;
  });
  return { type, port, resource };
};

module.exports = { parseArgs };
