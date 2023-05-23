import { INestiaConfig } from '@nestia/sdk';

const config: INestiaConfig = {
  input: 'src/',
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
        url: 'http://localhost:3000',
        description: 'Local Server',
      },
    ],
  },
};
export default config;