function fetchAndInstantiate(fileurl, importObject)
{
	return fetch(fileurl).then(response =>
		response.arrayBuffer()).then(bytes =>
		WebAssembly.instantiate(bytes, importObject)).then(results =>
		results.instance);
}

function fetchAndCompile(fileurl)
{
	return fetch(fileurl).then(response =>
		response.arrayBuffer()).then(bytes =>
		WebAssembly.compile(bytes));
}

function vidplay()
{
	var video = document.getElementById("video13");

	video.play();
}

function restart()
{
	var video = document.getElementById("video1");
	video.currentTime = 0;
}

function skip(second)
{
	var video = document.getElementById("video1");
	video.currentTime += second;
}