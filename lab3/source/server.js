const express = require('express')

const app = express()

app.get('/', (req, res) => {
	let sentMessage = '';
	if (req.query.audioFile) {
		sentMessage += `<audio id = "audioPlayer" src = ${req.query.audioFile}></audio>`;
		sentMessage += `<button type="button" id = "audioCancel">cancel audio</button>`;
		sentMessage += `<button type="button" id = "audioAdd">Add audio</button>`;
		sentMessage += `<script>document.getElementById("audioCancel").addEventListener('click', 
		() => document.getElementById("audioPlayer").src = "cancel.mp4")</script>`

	}
	if (req.query.videoFile) {
		sentMessage += `</br> <video id = "videoPlayer" src = ${req.query.videoFile}></video>`;
		sentMessage += `<button type="button" id = "videoCancel">cancel video</button>`;
		sentMessage += `<button type="button" id = "videoAdd">Add video</button>`;
		sentMessage += `<script>document.getElementById("videoCancel").addEventListener('click', 
		() => document.getElementById("videoPlayer").src = "cancel.mp4")</script>`
	}
	if (req.query.imgFile) {
		sentMessage += `<img src=${req.query.imgFile} id = "posterImage">`;
		sentMessage += `<button type="button" id = "imgAdd">Add img</button>`;
	}
	sentMessage += `<table id = 'playlist_table'> 
					  <tr>
    					<th>No.</th>
    					<th>URL</th>
    				  	<th>Type</th>
  					  </tr>
					</table>`

	if (req.query.audioFile) {
		sentMessage += `<script defer>document.getElementById("audioAdd").addEventListener('click', 
		() => {
    		let table = document.getElementById("playlist_table");
    		let row = table.insertRow(table.rows.length);
    		let cell1 = row.insertCell(0);
			let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            cell1.innerHTML = "${table.rows.length + 1}"
            cell2.innerHTML = "${document.getElementById("audioPlayer").src}"
            cell3.innerText = "Audio"
		}</script>`
	}

	if (req.query.videoFile) {
		sentMessage += `<script defer>document.getElementById("videoAdd").addEventListener('click', 
		() => {
    		let table = document.getElementById("playlist_table");
    		let row = table.insertRow(table.rows.length);
    		let cell1 = row.insertCell(0);
			let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            cell1.innerHTML = "${table.rows.length + 1}"
            cell2.innerHTML = "${document.getElementById("audioPlayer").src}"
            cell3.innerText = "Audio"
		}</script>`
	}



    res.send(sentMessage);
})

app.get('/', (req, res) => {
	res.send("Hello World!");
})

app.listen(4080)
