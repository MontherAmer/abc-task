const { Country } = require("../../models");

exports.list = async (req, res) => {
  try {
    let data = await Country.find({});

    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return res.send({
      success: false,
      status: 500,
      message: "server side error",
    });
  }
};
