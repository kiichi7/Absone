var sideNumber : int;
var direNumber : int; //值分别对应 x+ y+ z+ z- y- x-
var Neurone = new Array();
var isStarted : boolean;

function Start () {

	sideNumber = 100;
	direNumber = 6; 
	isStarted = false;

	gameObject.transform.position = Vector3((sideNumber-1)/2,(sideNumber-1)/2,(sideNumber-1)/2);

	for (var i=0; i<sideNumber; i++)
	{
		Neurone[i] = new Array();
		for (var j=0; j<sideNumber; j++)
		{
			Neurone[i][j] = new Array();
			for (var k=0; k<sideNumber; k++)
			{
				Neurone[i][j][k] = new Array();
				for (var l=0; l<direNumber; l++)
				{
					Neurone[i][j][k][l] = ValueRandom(i,j,k,l);
				}
			}
		}
	}
	isStarted = true;

}

function ValueRandom (a : int, b : int, c : int, d : int) {

	if ((a==0)&&(d==5)) return 0.0;
	else if ((a==sideNumber-1)&&(d==0)) return 0.0;
	else if ((b==0)&&(d==4)) return 0.0;
	else if ((b==sideNumber-1)&&(d==1)) return 0.0;
	else if ((c==0)&&(d==3)) return 0.0;
	else if ((c==sideNumber-1)&&(d==2)) return 0.0;
	else return (Random.value);

}