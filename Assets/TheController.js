#pragma strict

function Start () {

	Screen.showCursor = false;
	
}

function Update () {

	if (Input.GetKeyDown(KeyCode.Escape)) Application.Quit();

}