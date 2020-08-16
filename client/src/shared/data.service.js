import * as axios from "axios";

const getGamerStats = async function(platform, gamertag, game) {
	try {
		//going to trkr server
		const response = await axios.get(
			`/api/v1/profile/${platform}/${gamertag}/${game}`
			// { timeout: 2 }
		);
		// .catch(err => {
		//  return err.message;
		// });
		let gamerStats = parseItem(response, 200);
		gamerStats = gamerStats.data;
		const legendName = sessionStorage.getItem("trkr-legendName");
		const activeLegendName = gamerStats.metadata.activeLegendName;
		if (legendName !== activeLegendName) {
			sessionStorage.setItem("trkr-legendName", activeLegendName);
		}
		return gamerStats;
	} catch (err) {
		return err.response.data.message;
	}
};

export const parseItem = (response, code) => {
	if (response.status !== code) throw Error(response.message);
	let item = response.data;
	return typeof item !== "object" ? undefined : item;
};

export const dataService = {
	getGamerStats,
};
