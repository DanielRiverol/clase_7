import Order from '../dao/classes/orders.dao.js'
import User from '../dao/classes/users.dao.js'
import Business from '../dao/classes/business.dao.js'

const orderService = new Order()
const userService = new User()
const businessService = new Business()

export const getOrders = async (req, res) => {
  try {

    // trabajo con el servicio
    res.status(200).json({ status: "Success" });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
export const getOrderById = async (req, res) => {
  const { oid } = req.params;
  try {
    res.status(200).json({ status: "Success", payload: oid });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
export const createOrder = async (req, res) => {
  const {userId, businessId, products} = req.body;
  try {
    const userFound = userService.getUserById(userId)
    const businessFound = businessService.getBusinessById(businessId)
      
    res.status(201).json({ status: "Success", payload: order });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
export const resolveOrder = async (req, res) => {
  const order = req.body;
  try {
    res.status(200).json({ status: "Success", payload: order });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
