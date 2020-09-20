const lib = {}

lib.parseJsonToObject = function (str) {
	try {
		return JSON.parse(str)
	} catch (ignore) {
		return {}
	}
}

module.exports = lib
