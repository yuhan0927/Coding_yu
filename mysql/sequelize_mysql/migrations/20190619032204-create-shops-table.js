'use strict';

module.exports = {
  // 新增
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'shops',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      // 表名
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      thumb_url: Sequelize.STRING,
      created_at: Sequelize.DATE,
      uptated_at: Sequelize.DATE
    }
  ),
// 取消
  down: queryInterface => queryInterface.dropTable("shops")
};
