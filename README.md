# k8s-postgres-schema

Migration files for the local Postgres instance that is running in my Kubernetes home lab

## How to use

Create `config/config.json` folder and file and populate it as follows (used for local development):

```JSON
{
  "development": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "postgres",
    "ssl": "false",
    "dialectOptions": {
      "ssl": {
        "required": false,
        "rejectUnauthorized": false
      }
    }
  }
}
```

Then run migrations using

```npx sequelize-cli db:migrate```