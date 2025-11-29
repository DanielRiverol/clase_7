import Business from "../dao/classes/business.dao.js";
const businessService = new Business();
export const getBusiness = async (req, res) => {
  try {
    const business = await businessService.getBusiness();
    res.status(200).json({ status: "Success", payload: business });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
export const getBusinessById = async (req, res) => {
  const { bid } = req.params;
  try {
    const business = await businessService.getBusinessById(bid);
    res.status(200).json({ status: "Success", payload: business });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
export const createBusiness = async (req, res) => {
  const business = req.body;
  try {
    const newBusiness = await businessService.createBusiness(business);
    res.status(201).json({ status: "Success", payload: newBusiness });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
export const addProduct = async (req, res) => {
  const product = req.body;
  const { bid } = req.params;
  try {
    const business = await businessService.getBusinessById(bid);
    // objetos de javascript
    business.products.push(product);

    await businessService.updateBusiness(business._id, business);
    res.status(200).json({ status: "Success", payload: business });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
