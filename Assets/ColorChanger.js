#pragma strict
var waveMaterial : Material;
var thoughtWave : ThoughtWave;

function Start () {

	thoughtWave = GetComponent(ThoughtWave);

}

function Update () {

	if (thoughtWave.isStarted) 
		waveMaterial.color = Color(thoughtWave.thought.x/thoughtWave.sideNumber,thoughtWave.thought.y/thoughtWave.sideNumber,thoughtWave.thought.z/thoughtWave.sideNumber);
}