./node_modules/.bin/sequelize migration:create --name create-shops-table  迁移文件(给数据库添加表，修改文件都叫迁移文件)
./node_modules/.bin/sequelize db:migrate  执行迁移
./node_modules/.bin/sequelize db:migrate:undo 移除
./node_modules/.bin/sequelize seed:create --name init-shops  初始化