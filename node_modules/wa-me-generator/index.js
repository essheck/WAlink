/**
 * Create a wa.me link from a phone number
 * @param {string} number The phone number to be converted, must be a full number including country code
 * @param {string} [countryCode] The default country code which should be applied if the number begins with a 0
 */
exports.createFromNumber = (number, countryCode) => {
  if (countryCode) {
    number = number.replace(/^0/, countryCode);
  }
  number = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${number}`;
};

/**
 * Create a wa.me link from a phone number with a pre-filled message
 * @param {string} number The phone number to be converted, must be a full number including country code
 * @param {string} message The message to be encoded into the link
 * @param {string} [countryCode] The default country code which should be applied if the number begins with a 0, e.g. 49 for Germany
 */
exports.createFromNumberWithMessage = (number, message, countryCode) => {
  if (countryCode) {
    number = number.replace(/^0/, countryCode);
  }
  number = number.replace(/[^0-9]/g, "");
  message = encodeURIComponent(message);
  return `https://api.whatsapp.com/send/?phone=${number}&text=${message}`;
};
