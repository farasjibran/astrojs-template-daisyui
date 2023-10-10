import zod from 'zod';

const serverSchema = zod.object({
  API_BASE_URL: zod.string(),
});

const clientSchema = zod.object({
  API_BASE_URL: zod.string(),
});

export { clientSchema, serverSchema };
