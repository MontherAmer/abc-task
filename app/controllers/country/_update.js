const { Country } = require("../../models");

exports.update = async (req, res) => {
  try {
    let image = req.file ? req.file.location : null;

    let allowedFields = ["name", "arabicName", "phoneCode", "timeZone"];

    const countryObject = await Country.findById(req.params.id);

    if (!countryObject)
      return res.send({
        success: false,
        status: 404,
        message: "Country not found",
      });

    if (image) countryObject.image = image;
    countryObject.active = req.body.active;

    for (let key in req.body)
      allowedFields.includes(key) ? (countryObject[key] = req.body[key]) : null;

    await countryObject.save();

    let data = await Country.findById(countryObject._id);

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
