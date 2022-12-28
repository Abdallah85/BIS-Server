const multer = require('multer');
const ApiError = require('../utils/ApiErrors');

const multerOptions = () => {

  const multerStorage = multer.memoryStorage();

  const multerFilter = function (req, file, cb) {
    if (file.mimetype.startsWith('image')) {
   // To accept the file pass `true`, like so:
      cb(null, true);
    } else {
      // pass an error if something goes wrong:
      cb(new ApiError('Only Images allowed', 400), false);
    }
  };

  const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

  return upload;
};

exports.uploadSingleImage = (fieldName) => multerOptions().single(fieldName);

exports.uploadMixOfImages = (arrayOfFields) =>
  multerOptions().fields(arrayOfFields);
