import { INestiaConfig } from '@nestia/sdk';

const config: INestiaConfig = {
  input: 'src/modules',
  swagger: {
    output: 'src/swagger.json',
    security: {
      bearer: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Local Server',
      },
    ],
  },
};
export default config;
