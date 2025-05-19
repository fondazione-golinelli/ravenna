gdjs.Scena_32InizialeCode = {};
gdjs.Scena_32InizialeCode.localVariables = [];
gdjs.Scena_32InizialeCode.GDNewSpriteObjects1= [];
gdjs.Scena_32InizialeCode.GDNewSpriteObjects2= [];
gdjs.Scena_32InizialeCode.GDNewSprite2Objects1= [];
gdjs.Scena_32InizialeCode.GDNewSprite2Objects2= [];
gdjs.Scena_32InizialeCode.GDNewSprite3Objects1= [];
gdjs.Scena_32InizialeCode.GDNewSprite3Objects2= [];
gdjs.Scena_32InizialeCode.GDRagazzinaObjects1= [];
gdjs.Scena_32InizialeCode.GDRagazzinaObjects2= [];
gdjs.Scena_32InizialeCode.GDPiazzaObjects1= [];
gdjs.Scena_32InizialeCode.GDPiazzaObjects2= [];


gdjs.Scena_32InizialeCode.mapOfGDgdjs_9546Scena_959532InizialeCode_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Scena_32InizialeCode.GDRagazzinaObjects1});
gdjs.Scena_32InizialeCode.mapOfGDgdjs_9546Scena_959532InizialeCode_9546GDPiazzaObjects1Objects = Hashtable.newFrom({"Piazza": gdjs.Scena_32InizialeCode.GDPiazzaObjects1});
gdjs.Scena_32InizialeCode.asyncCallback10140948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scena 2", false);
}gdjs.Scena_32InizialeCode.localVariables.length = 0;
}
gdjs.Scena_32InizialeCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Scena_32InizialeCode.asyncCallback10140948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scena_32InizialeCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Piazza"), gdjs.Scena_32InizialeCode.GDPiazzaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_32InizialeCode.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scena_32InizialeCode.mapOfGDgdjs_9546Scena_959532InizialeCode_9546GDRagazzinaObjects1Objects, gdjs.Scena_32InizialeCode.mapOfGDgdjs_9546Scena_959532InizialeCode_9546GDPiazzaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scena_32InizialeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_32InizialeCode.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Scena_32InizialeCode.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_32InizialeCode.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_32InizialeCode.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Scena_32InizialeCode.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_32InizialeCode.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_32InizialeCode.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Scena_32InizialeCode.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_32InizialeCode.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Up");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_32InizialeCode.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Scena_32InizialeCode.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_32InizialeCode.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Down");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Scena_32InizialeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scena_32InizialeCode.GDNewSpriteObjects1.length = 0;
gdjs.Scena_32InizialeCode.GDNewSpriteObjects2.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite2Objects1.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite2Objects2.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite3Objects1.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite3Objects2.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects1.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects2.length = 0;
gdjs.Scena_32InizialeCode.GDPiazzaObjects1.length = 0;
gdjs.Scena_32InizialeCode.GDPiazzaObjects2.length = 0;

gdjs.Scena_32InizialeCode.eventsList1(runtimeScene);
gdjs.Scena_32InizialeCode.GDNewSpriteObjects1.length = 0;
gdjs.Scena_32InizialeCode.GDNewSpriteObjects2.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite2Objects1.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite2Objects2.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite3Objects1.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite3Objects2.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects1.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects2.length = 0;
gdjs.Scena_32InizialeCode.GDPiazzaObjects1.length = 0;
gdjs.Scena_32InizialeCode.GDPiazzaObjects2.length = 0;


return;

}

gdjs['Scena_32InizialeCode'] = gdjs.Scena_32InizialeCode;
