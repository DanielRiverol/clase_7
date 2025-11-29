export const getBusiness = async (req, res) => {
  try {
    res.status(200).json({ status: "Success" });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
export const getBusinessById = async (req, res) => {
  const { bid } = req.params;
  try {
    res.status(200).json({ status: "Success", payload: bid });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
export const createBusiness = async (req, res) => {
  const business = req.body;
  try {
    res.status(201).json({ status: "Success", payload: business });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
export const addProduct = async (req, res) => {
  const product = req.body;
  try {
    res.status(200).json({ status: "Success", payload: product });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
