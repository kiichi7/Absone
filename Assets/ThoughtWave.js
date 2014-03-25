var thought : Vector3;
var brain : Brain;
var randomValue : int;
var k : float; //值大于等于1
var direNumber : int;
var sideNumber : int;
var brainWave : GameObject;
var isStarted : boolean;

function Start () {

	k = 2;
	brain = GetComponent(Brain);
	isStarted = false;

}

function Initialize () {
	
	direNumber = brain.direNumber;
	sideNumber = brain.sideNumber;
	thought.x = Random.Range(0,sideNumber);
	thought.y = Random.Range(0,sideNumber);
	thought.z = Random.Range(0,sideNumber);
	isStarted = true;

}

function Update () {

	if (brain.isStarted) {
		if (!isStarted) Initialize ();
		randomValue = RandomDirection(Random.value);
		brain.Neurone[thought.x][thought.y][thought.z][randomValue] *= (k-1)/k;
		brain.Neurone[thought.x][thought.y][thought.z][randomValue] += 1/k;
		switch (randomValue) {
		
			case 0:  thought.x ++;
			break;
			case 1:  thought.y ++;
			break;
			case 2:  thought.z ++;
			break;
			case 3:  thought.z --;
			break;
			case 4:  thought.y --;
			break;
			case 5:  thought.x --;
			break;
		
		}
		brainWave.transform.position = thought;
		/*Debug.Log("i:" + thought.x + " j:" + thought.y + " k:" + thought.z);
		for (var a = 0; a < 6; a++){
			Debug.Log(brain.Neurone[thought.x][thought.y][thought.z][a]);
		}*/
		brain.Neurone[thought.x][thought.y][thought.z][5-randomValue] *= (k-1)/k;
		
	}
}

function RandomDirection(theValue : float) {

	var neuroneTotalValue : float = 0;
	var judgeValue : float = 0;
	for (var i=0; i<direNumber; i++){
		neuroneTotalValue += brain.Neurone[thought.x][thought.y][thought.z][i];
	}
	var moveDirection : int = -1;
	do {
		moveDirection ++;
		judgeValue += brain.Neurone[thought.x][thought.y][thought.z][moveDirection]/neuroneTotalValue;
	} while (theValue > judgeValue);
	return (moveDirection);

}