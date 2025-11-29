export const getOrders = async (req, res) => {
  try {
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
  const order = req.body;
  try {
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
