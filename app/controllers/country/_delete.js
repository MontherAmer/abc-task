const { Country } = require("../../models");

exports.delete = async (req, res) => {
  try {
    await Country.deleteOne({ _id: req.params.id });

    return res.send({ success: true, status: 200 });
  } catch (err) {
    return res.send({
      success: false,
      status: 500,
      message: "server side error",
    });
  }
};
