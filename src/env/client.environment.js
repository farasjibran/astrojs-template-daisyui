import { clientSchema } from './schema.environment';

const clientEnvironment = clientSchema.parse({
  API_BASE_URL: import.meta.env.PUBLIC_API_BASE_URL,
});

export { clientEnvironment };
