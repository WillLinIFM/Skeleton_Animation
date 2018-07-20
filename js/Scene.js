        if (BABYLON.Engine.isSupported()) {
        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true, null, false);
        var scene = new BABYLON.Scene(engine);     
        // Creates, angles, distances and targets the camera
	    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0 , 150, 0), scene);
        // This positions the camera
        scene.activeCamera = camera;
        camera.setPosition(new BABYLON.Vector3(0 , 150, -150));    
        // This attaches the camera to the canvas
        camera.attachControl(canvas, false);
        camera.lowerRadiusLimit = camera.upperRadiusLimit = camera.radius;
        var light1_front = new BABYLON.HemisphericLight("Omni1", new BABYLON.Vector3(0, 1, -1), scene);
        scene.beforeCameraRender = function () {
        light1_front.intensity = 0.7;        
        };
        engine.runRenderLoop(function () {
                    scene.render();
            })
        }else{
        alert("WebGL not supported in this browser.");
        }








function teston(){

$.getScript("bone3.js",function(){
    ctest = new bone3.MeshFactory(scene);
    ctestM = ctest.instance("gameavatar");
    ctestM.position = new BABYLON.Vector3(-20,50,100);
    console.log(ctest);
    console.log(ctestM);
    
    
})
    
}

function testoff(){
    if(scene.getMeshByID("gameavatar")) ctestM.dispose(false,true);}
    //window.dazavatar_dress1.dazavatar_dress1 = null;
    
