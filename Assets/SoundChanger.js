#pragma strict
var ifPlay : boolean;

function Start () {

	ifPlay = true;

}

function Update () {

	if (Input.GetMouseButtonDown(1)) ifPlay = !ifPlay;
	if (ifPlay) {
		if(!audio.isPlaying) audio.Play();
	}
	else {
		if(audio.isPlaying) audio.Stop();
	}

}