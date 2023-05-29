const express = require('express')

const app = express()

app.get('/', (req, res) => {
	let sentMessage = '';
	if (req.query.audioFile) {
		sentMessage += `<audio id = "audioPlayer" src = ${req.query.audioFile}></audio>`;
		sentMessage += `<button type="button" id = "audioCancel">cancel audio</button>`;
		sentMessage += `<button type="button" id = "audioAdd">Add audio</button>`;
		sentMessage += `<script>document.getElementById("audioCancel").addEventListener('click', 
		() => document.getElementById("audioPlayer").src = "cancel.mp3")</script>`;
		sentMessage += `<button id = "audioPlay" onclick="() => {
			let audio = document.getElementById("audioPlayer");
			audio.play();
		}">Play Audio</button>`;

		sentMessage += `<button id = "audioPause" onclick="() => {
			let audio = document.getElementById("audioPlayer");
			audio.pause();
		}">Pause Audio</button>`;

	}
	if (req.query.videoFile) {
		sentMessage += `</br> <video id = "videoPlayer" src = ${req.query.videoFile}></video>`;
		sentMessage += `<button type="button" id = "videoCancel">cancel video</button>`;
		sentMessage += `<button type="button" id = "videoAdd">Add video</button>`;
		sentMessage += `<script>document.getElementById("videoCancel").addEventListener('click', 
		() => document.getElementById("videoPlayer").src = "cancel.mp4")</script>`
		sentMessage += `<button id = "videoPlay" onclick="() => {
			let video = document.getElementById("videoPlayer");
			video.play();
		}">Play Video</button>`;

		sentMessage += `<button id = "videoPause" onclick="() => {
			let video = document.getElementById("videoPlayer");
			video.pause();
		}">Pause Video</button>`;
	}
	if (req.query.imgFile) {
		sentMessage += `<img src=${req.query.imgFile} id = "posterImage">`;
		sentMessage += `<button type="button" id = "imgCancel">cancel image</button>`;
		sentMessage += `<button type="button" id = "imgAdd">Add img</button>`;
		sentMessage += `<script>document.getElementById("imgCancel").addEventListener('click', 
		() => document.getElementById("posterImage").src = "cancel.jpg")</script>`
	}
	sentMessage += `<table id = 'playlist_table'> 
					  <tr>
    					<th>No.</th>
    					<th>URL</th>
    				  	<th>Type</th>
    				  	<th>Action</th>th>
  					  </tr>
					</table>`

	sentMessage += `
	<script>
	let addDeleteToDeleteButtons = () => {
        		const deleteButtons = document.querySelectorAll('.removeRowButton')
		deleteButtons.forEach( (button) => {
            
            button.addEventListener('click', () => {
                const row = button.parentElement.parentElement;
                row.remove();
            })
		})
	}
	</script>
	`

	sentMessage += `
	<script>
	let addMoveRowUpToUpButton = (button) => {
            const row = button.parentElement.parentElement;
			let prevRow = row.previousElementSibling;
			if (prevRow.rowIndex > 0) {
				row.parentNode.insertBefore(row, prevRow)
			}
			else {
				row.parentNode.appendChild(row);
			}
	}
	</script>
	`

	sentMessage += `
	<script>
		let insertAfter = (newNode, referenceNode) => {
			referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
		}
	</script>`

	
	sentMessage += `
	<script>
	let addMoveRowDownToDownButton = (button) => {
            
                const row = button.parentElement.parentElement;
				let prevRow = row.nextElementSibling;
				let firstRow = document.querySelector('tr');
				if (row.rowIndex < document.querySelectorAll('tr').length - 1) {
					insertAfter(row, prevRow);
				}
				else if (firstRow) {
					insertAfter(row, firstRow);
				}
	}
	</script>
	`

	if (req.query.audioFile) {
		sentMessage += `<script>document.getElementById("audioAdd").addEventListener('click',
		() => {
    			let table = document.getElementById('playlist_table');
                let row = table.insertRow(table.rows.length);
    			let cell1 = row.insertCell(0);
				let cell2 = row.insertCell(1);
            	let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
            	
            	cell1.innerHTML = table.rows.length - 1;
            	cell2.innerHTML = document.getElementById('audioPlayer').src;
            	cell3.innerText = 'Audio';
                cell4.innerHTML = '<button type="button" class="removeRowButton">Delete</button> <button type="button" class="moveRowUpButton" onclick="addMoveRowUpToUpButton(this)">Up</button> <button type="button" class="moveRowDownButton" onclick="addMoveRowDownToDownButton(this)">Down</button>';
                addDeleteToDeleteButtons();
		})</script>`
	}

	if (req.query.videoFile) {
		sentMessage += `<script>document.getElementById('videoAdd').addEventListener('click',
		() => {
    		let table = document.getElementById('playlist_table');
            let row = table.insertRow(table.rows.length);
			let cell1 = row.insertCell(0);
			let cell2 = row.insertCell(1);
			let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
			cell1.innerHTML = table.rows.length - 1;
			cell2.innerHTML = document.getElementById('videoPlayer').src
			cell3.innerText = 'Video';
            cell4.innerHTML = '<button type="button" class="removeRowButton">Delete</button> <button type="button" class="moveRowUpButton" onclick="addMoveRowUpToUpButton(this)">Up</button> <button type="button" class="moveRowDownButton" onclick="addMoveRowDownToDownButton(this)">Down</button>';
            addDeleteToDeleteButtons();
		})</script>`
	}

	if (req.query.imgFile) {
		sentMessage += `<script>document.getElementById("imgAdd").addEventListener('click',
		() => {
    			let table = document.getElementById('playlist_table');
                let row = table.insertRow(table.rows.length);
    			let cell1 = row.insertCell(0);
				let cell2 = row.insertCell(1);
            	let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
            	cell1.innerHTML = table.rows.length - 1;
            	cell2.innerHTML = document.getElementById('posterImage').src;
            	cell3.innerText = 'Image';
                cell4.innerHTML = '<button type="button" class="removeRowButton">Delete</button> <button type="button" class="moveRowUpButton" onclick="addMoveRowUpToUpButton(this)">Up</button> <button type="button" class="moveRowDownButton" onclick="addMoveRowDownToDownButton(this)">Down</button>';
                addDeleteToDeleteButtons();
		})</script>`
	}



    res.send(sentMessage);
})

app.get('/', (req, res) => {
	res.send("Hello World!");
})

app.listen(4080)
