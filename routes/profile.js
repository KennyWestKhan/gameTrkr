const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:platform/:gamertag', async (req, res) => {
    try {
        const headers = {
            'TRN-Api-Key': process.env.TRACKER_API_KEY
        }
        const { platform, gamertag } = req.params;
        const response = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`, {
            headers
        });
        const data = await response.json()
        if (data.errors && data.errors.length > 0){
            return res.status(404).json({
                message: `${gamertag} profile not found`,
            });
        }
        res.json(data);
    }catch (error){
        console.log(error)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

module.exports = router;