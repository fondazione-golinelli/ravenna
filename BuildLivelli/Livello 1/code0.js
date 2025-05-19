gdjs.Livello1Code = {};
gdjs.Livello1Code.localVariables = [];
gdjs.Livello1Code.GDRagazzinaObjects1= [];
gdjs.Livello1Code.GDRagazzinaObjects2= [];
gdjs.Livello1Code.GDNewSprite10Objects1= [];
gdjs.Livello1Code.GDNewSprite10Objects2= [];
gdjs.Livello1Code.GDBloccoObjects1= [];
gdjs.Livello1Code.GDBloccoObjects2= [];
gdjs.Livello1Code.GDNewSprite6Objects1= [];
gdjs.Livello1Code.GDNewSprite6Objects2= [];
gdjs.Livello1Code.GDNewSprite15Objects1= [];
gdjs.Livello1Code.GDNewSprite15Objects2= [];
gdjs.Livello1Code.GDNewSprite13Objects1= [];
gdjs.Livello1Code.GDNewSprite13Objects2= [];
gdjs.Livello1Code.GDEntrataObjects1= [];
gdjs.Livello1Code.GDEntrataObjects2= [];


gdjs.Livello1Code.mapOfGDgdjs_9546Livello1Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Livello1Code.GDRagazzinaObjects1});
gdjs.Livello1Code.mapOfGDgdjs_9546Livello1Code_9546GDEntrataObjects1Objects = Hashtable.newFrom({"Entrata": gdjs.Livello1Code.GDEntrataObjects1});
gdjs.Livello1Code.mapOfGDgdjs_9546Livello1Code_9546GDBloccoObjects1Objects = Hashtable.newFrom({"Blocco": gdjs.Livello1Code.GDBloccoObjects1});
gdjs.Livello1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello1Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Livello1Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( !(gdjs.Livello1Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Livello1Code.GDRagazzinaObjects1[k] = gdjs.Livello1Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Livello1Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Livello1Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Livello1Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello1Code.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Fermo");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello1Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Livello1Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( gdjs.Livello1Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Livello1Code.GDRagazzinaObjects1[k] = gdjs.Livello1Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Livello1Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Livello1Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Livello1Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello1Code.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Corsa");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Entrata"), gdjs.Livello1Code.GDEntrataObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello1Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Livello1Code.mapOfGDgdjs_9546Livello1Code_9546GDRagazzinaObjects1Objects, gdjs.Livello1Code.mapOfGDgdjs_9546Livello1Code_9546GDEntrataObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "livello2", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Blocco"), gdjs.Livello1Code.GDBloccoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello1Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello1Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello1Code.GDRagazzinaObjects1[i].separateFromObjectsList(gdjs.Livello1Code.mapOfGDgdjs_9546Livello1Code_9546GDBloccoObjects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Blocco"), gdjs.Livello1Code.GDBloccoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Entrata"), gdjs.Livello1Code.GDEntrataObjects1);
{for(var i = 0, len = gdjs.Livello1Code.GDEntrataObjects1.length ;i < len;++i) {
    gdjs.Livello1Code.GDEntrataObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Livello1Code.GDBloccoObjects1.length ;i < len;++i) {
    gdjs.Livello1Code.GDBloccoObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello1Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello1Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello1Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello1Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello1Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello1Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello1Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello1Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello1Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Up");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello1Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello1Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello1Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Down");
}
}}

}


};

gdjs.Livello1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Livello1Code.GDRagazzinaObjects1.length = 0;
gdjs.Livello1Code.GDRagazzinaObjects2.length = 0;
gdjs.Livello1Code.GDNewSprite10Objects1.length = 0;
gdjs.Livello1Code.GDNewSprite10Objects2.length = 0;
gdjs.Livello1Code.GDBloccoObjects1.length = 0;
gdjs.Livello1Code.GDBloccoObjects2.length = 0;
gdjs.Livello1Code.GDNewSprite6Objects1.length = 0;
gdjs.Livello1Code.GDNewSprite6Objects2.length = 0;
gdjs.Livello1Code.GDNewSprite15Objects1.length = 0;
gdjs.Livello1Code.GDNewSprite15Objects2.length = 0;
gdjs.Livello1Code.GDNewSprite13Objects1.length = 0;
gdjs.Livello1Code.GDNewSprite13Objects2.length = 0;
gdjs.Livello1Code.GDEntrataObjects1.length = 0;
gdjs.Livello1Code.GDEntrataObjects2.length = 0;

gdjs.Livello1Code.eventsList0(runtimeScene);
gdjs.Livello1Code.GDRagazzinaObjects1.length = 0;
gdjs.Livello1Code.GDRagazzinaObjects2.length = 0;
gdjs.Livello1Code.GDNewSprite10Objects1.length = 0;
gdjs.Livello1Code.GDNewSprite10Objects2.length = 0;
gdjs.Livello1Code.GDBloccoObjects1.length = 0;
gdjs.Livello1Code.GDBloccoObjects2.length = 0;
gdjs.Livello1Code.GDNewSprite6Objects1.length = 0;
gdjs.Livello1Code.GDNewSprite6Objects2.length = 0;
gdjs.Livello1Code.GDNewSprite15Objects1.length = 0;
gdjs.Livello1Code.GDNewSprite15Objects2.length = 0;
gdjs.Livello1Code.GDNewSprite13Objects1.length = 0;
gdjs.Livello1Code.GDNewSprite13Objects2.length = 0;
gdjs.Livello1Code.GDEntrataObjects1.length = 0;
gdjs.Livello1Code.GDEntrataObjects2.length = 0;


return;

}

gdjs['Livello1Code'] = gdjs.Livello1Code;
