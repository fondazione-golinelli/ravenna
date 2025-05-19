gdjs.perdeCode = {};
gdjs.perdeCode.localVariables = [];
gdjs.perdeCode.GDNewSpriteObjects1= [];
gdjs.perdeCode.GDNewSpriteObjects2= [];
gdjs.perdeCode.GDTestoSconfittaObjects1= [];
gdjs.perdeCode.GDTestoSconfittaObjects2= [];
gdjs.perdeCode.GDRagazzinaObjects1= [];
gdjs.perdeCode.GDRagazzinaObjects2= [];
gdjs.perdeCode.GDPiazzaObjects1= [];
gdjs.perdeCode.GDPiazzaObjects2= [];


gdjs.perdeCode.asyncCallback13504076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.perdeCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scena 2", false);
}gdjs.perdeCode.localVariables.length = 0;
}
gdjs.perdeCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.perdeCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.perdeCode.asyncCallback13504076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.perdeCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.perdeCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.perdeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.perdeCode.GDNewSpriteObjects1.length = 0;
gdjs.perdeCode.GDNewSpriteObjects2.length = 0;
gdjs.perdeCode.GDTestoSconfittaObjects1.length = 0;
gdjs.perdeCode.GDTestoSconfittaObjects2.length = 0;
gdjs.perdeCode.GDRagazzinaObjects1.length = 0;
gdjs.perdeCode.GDRagazzinaObjects2.length = 0;
gdjs.perdeCode.GDPiazzaObjects1.length = 0;
gdjs.perdeCode.GDPiazzaObjects2.length = 0;

gdjs.perdeCode.eventsList1(runtimeScene);
gdjs.perdeCode.GDNewSpriteObjects1.length = 0;
gdjs.perdeCode.GDNewSpriteObjects2.length = 0;
gdjs.perdeCode.GDTestoSconfittaObjects1.length = 0;
gdjs.perdeCode.GDTestoSconfittaObjects2.length = 0;
gdjs.perdeCode.GDRagazzinaObjects1.length = 0;
gdjs.perdeCode.GDRagazzinaObjects2.length = 0;
gdjs.perdeCode.GDPiazzaObjects1.length = 0;
gdjs.perdeCode.GDPiazzaObjects2.length = 0;


return;

}

gdjs['perdeCode'] = gdjs.perdeCode;
