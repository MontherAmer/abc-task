const { Country } = require("../../models");

exports.store = async (req, res) => {
  try {
    let { name, arabicName, phoneCode, timeZone } = req.body;
    let image = req.file ? req.file.location : null;

    // * check for missing data
    if (!name || !arabicName || !phoneCode || !timeZone || !image)
      return res.send({ success: false, status: 400,message:'missing fields' });

    let country = new Country({ ...req.body, flag: image });

    let data = await country.save();

    return res.send({ success: true, status: 200, data });
  } catch (err) {
    console.log(err);
    return res.send({
      success: false,
      status: 500,
      message: "server side error",
    });
  }
};
