const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/:platform/:gamertag/:game", async (req, res) => {
	try {
		const headers = {
			"TRN-Api-Key": process.env.GG_TRACKER_API_KEY,
		};
        const { platform, gamertag, game } = req.params;
        let url = ''
        switch (game) {
            case 'apex':
                url = process.env.APEX_TRACKER_API_URL;
                break;
            case 'cod':
                url = url
                break;
        }
		const response = await fetch(
			`${url}/profile/${platform}/${gamertag}`,
			{
				headers,
			}
		);
		const data = await response.json();
		if (data.errors && data.errors.length > 0) {
			return res.status(404).json({
				message: `${gamertag} profile not found`,
			});
		}
		res.json(data);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: "Server error",
		});
	}
});

module.exports = router;
