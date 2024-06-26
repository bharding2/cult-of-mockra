import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./app/schema.ts",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    host: process.env.POSTGRES_HOST!,
    user: process.env.POSTGRES_USER!,
    password: process.env.POSTGRES_PASSWORD!,
    database: process.env.POSTGRES_DATABASE!,
    ssl: true,
  },
  verbose: true,
  strict: true,
})
