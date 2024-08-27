const { MyService } = require("../services");module.exports = {
	get: async (req, res) => {
		const data = await MyService.doSomething();
	},
};
