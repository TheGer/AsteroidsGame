#pragma strict
var normalSpeed:int;
var turboSpeed:int;

//this is the slot for the laser prefab
var laserprefab:Rigidbody;

//start time initialized to float and set to zero
var startTime:float=0.0;
var currentTime:float=0.0;
var elapsedTime:int=0;




function Start () {
	//the time the player started playing
	startTime=Time.time;
}

function Update () {
	currentTime = Time.time;
	//il-hin li ghadda nahdmuh hekk:
	
	//kill the game after sixty seconds
	if (elapsedTime < 60)
	{
		elapsedTime = currentTime - startTime;
		//enable borders using the borders function in BorderController
		BorderController.EnableBorders(transform);

		//rotation of the cube
		transform.Rotate(Vector3.forward * -40 * Input.GetAxis("Horizontal") * Time.deltaTime);
	
		//fire is the left ctrl key
		if(Input.GetKeyDown(KeyCode.LeftControl))
		{
			//create a laser at the position of the space ship.
			Instantiate(laserprefab,transform.position,transform.rotation);
		}
	
		//speed / turbo speed
		if (Input.GetKey(KeyCode.Space))
		{
			transform.Translate(Vector3.up * turboSpeed * Input.GetAxis("Vertical") * Time.deltaTime);
		}
		else
		{
			//if not holding space bar
			transform.Translate(Vector3.up * normalSpeed * Input.GetAxis("Vertical") * Time.deltaTime);
		}
		
	} else {
	
		//game over
		print("game over");
	}

}

function OnGUI()
{
	GUI.Label(Rect(0,0,150,50),"Elapsed Time: "+elapsedTime);
}