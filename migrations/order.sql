CREATE TYPE order_duration AS ENUM ('monthly', 'yearly', 'lifetime');

CREATE TABLE IF NOT EXISTS "public"."order" (
    "id" SERIAL PRIMARY KEY,
    "user_id" UUID NOT NULL,
    "duration" order_duration NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
    "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
);
