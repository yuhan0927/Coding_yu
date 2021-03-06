// mvc model
// mysql 数据 row => object
// orm sequelize
module.exports = (sequelize,DataTypes) => sequelize.define(
    {
        id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    thumb_url:DataTypes.STRING
    },
    {
        tableName:'shops'
    }
    
)