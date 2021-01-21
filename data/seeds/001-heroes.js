
exports.seed = async function(knex) {
	await knex("heroes").truncate()
	await knex("heroes").insert([
		{ name: "Izuku Midoriya" },
		{ name: "Shoto Todoroki" },
		{ name: "Katsuki Bakugo" },
		{ name: "Ochako Uraraka" },
		{ name: "Shota Aizawa" },
		{ name: "Endeaver" },
	])
}

