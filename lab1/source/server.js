const express = require('express')

const app = express()

app.get('/', (req, res) => {
	let sentMessage = '';
	if (req.query.audioFile) {
		sentMessage += `<audio id = "audioPlayer" src = ${req.query.audioFile}></audio>`;
	}
	if (req.query.videoFile) {
		sentMessage += `</br> <video id = "videoPlayer" src = ${req.query.videoFile}></video>`;
	}
    res.send(sentMessage);
})

app.get('/', (req, res) => {
	res.send("Hello World!");
})

app.listen(4080)
