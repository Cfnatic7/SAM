const express = require('express')

const app = express()

app.get('/:videoFile/:audioFile', (req, res) => {
    res.send(`<audio id = "audioPlayer" src = ${audioFile}></audio> </br> <video id = "videoPlayer" src = ${videoFile}></video>`);
})

app.listen(4080)
