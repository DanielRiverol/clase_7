import userModel from "../models/users.model.js";

export default class User {
  getUsers = async () => {
    try {
      const users = await userModel.find();
      return users;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  getUserById = async (id) => {
    try {
      const user = await userModel.findOne({ _id: id });
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  createUser = async (user) => {
    try {
      const newUser = await userModel.create(user);
      return newUser;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  updateUser = async (id, user) => {
    try {
      const updatedUser = await userModel.updateOne(
        { _id: id },
        { $set: user }
      );
      return updatedUser;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}
