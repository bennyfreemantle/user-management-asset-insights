# Asset Insights Coding Test

## Original Brief

We would like you to create a web application that produces some kind of user management functionality. The application should be able to:

- Display the users in a list/table.
- Have the ability to create users.
- Have the ability to update users.
- Have the ability to delete users. The task gives you free rain on how the front end of the application will look, but it is important to note that it should mainly focus on producing a good working solution.

## Get It Running

### Setup

Create a .env file and paste your postgresql database url inside

```bash
echo DATABASE_URL="YOUR_POSTGRESQL_DB_STRING" > .env.local
```

Install dependencies

```bash
npm install
```

Create a Prisma migration

```bash
npm run migrate:dev
```

You'll be prompted for a migration name just call it **init**

```bash
✔ Enter a name for the new migration: init
```

Run the app

```bash
npm run dev
```

## Tech used

- Next.js for both front & node backend (api folder)
- Typescript
- Tailwind
