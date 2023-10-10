import { serverSchema } from './schema.environment';

const serverEnvironment = serverSchema.parse({
  API_BASE_URL: import.meta.env.PUBLIC_API_BASE_URL,
});

export { serverEnvironment };
