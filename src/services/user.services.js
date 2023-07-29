const bcrypt = require('bcrypt')
const { Users: UserModel } = require('../db/models');
const { ConflictException } = require('../tools');

const findById = (id) => UserModel.findById(id);

const findByEmail = (email) => UserModel.findOne({ where: { email } });

const createUser = async (userPayload) => {
  const user = await UserModel.findOne({ where: { email: userPayload.email } });

  if(user) throw new ConflictException('User Already exist')

  const hashedPassword = bcrypt.hashSync(userPayload.password, Number(process.env.AUTH_SALT_AMOUNT));

  userPayload.password = hashedPassword;

  return UserModel.create(userPayload, {
    returning: true,
  });
};

module.exports = {
  findById,
  findByEmail,
  createUser,
}