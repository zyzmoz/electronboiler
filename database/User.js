const { Sequelize, sequelize, Op } = require('./database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    field: 'id',  
    primaryKey: true,
    autoIncrement: true
  }, 
  name: {
    type: Sequelize.STRING,
    allowNull: false  
  }
});

User.sync({force: false}).then(() => {

});

const findAll = async () => {
  return await User.findAll({raw: true});
}

const findById = async (id) => {
  return await User.findByPrimary(id, {raw: true});

}

const findByField = async (field, value) => {
  return await User.findOne({ raw: true, 
    where: {[field]: { [Op.like]: `%${value}%`}  }
  })
}

const save = async (obj) => {
  
  if (obj.id) {
    user = await findById(obj.id);
    await user.update(obj);
  } else {
    obj.id = null;
    await User.create(obj);
  }
}

const remove = async (id) => {
  user = await findById(id);
  await user.destroy();
}

module.exports = {
  findAll,
  findById,
  findByField,
  save,
  remove
};