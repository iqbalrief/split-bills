Server split_bills

Setelah clone

--npm/yarn install

--setup .env
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
HOST=
PORT=

npx-sequelize db:create
npx-sequelize db:migrate
npx-sequelize db.seed:all