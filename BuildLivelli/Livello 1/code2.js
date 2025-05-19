gdjs.Livello3Code = {};
gdjs.Livello3Code.localVariables = [];
gdjs.Livello3Code.GDSfondoObjects1= [];
gdjs.Livello3Code.GDSfondoObjects2= [];
gdjs.Livello3Code.GDmonetaObjects1= [];
gdjs.Livello3Code.GDmonetaObjects2= [];
gdjs.Livello3Code.GDNewSpriteObjects1= [];
gdjs.Livello3Code.GDNewSpriteObjects2= [];
gdjs.Livello3Code.GDNewSprite2Objects1= [];
gdjs.Livello3Code.GDNewSprite2Objects2= [];
gdjs.Livello3Code.GDNewSprite4Objects1= [];
gdjs.Livello3Code.GDNewSprite4Objects2= [];
gdjs.Livello3Code.GDNewSprite7Objects1= [];
gdjs.Livello3Code.GDNewSprite7Objects2= [];
gdjs.Livello3Code.GDNewSprite8Objects1= [];
gdjs.Livello3Code.GDNewSprite8Objects2= [];
gdjs.Livello3Code.GDNewSprite9Objects1= [];
gdjs.Livello3Code.GDNewSprite9Objects2= [];
gdjs.Livello3Code.GDNewSprite5Objects1= [];
gdjs.Livello3Code.GDNewSprite5Objects2= [];
gdjs.Livello3Code.GDNewSprite11Objects1= [];
gdjs.Livello3Code.GDNewSprite11Objects2= [];
gdjs.Livello3Code.GDNewSprite12Objects1= [];
gdjs.Livello3Code.GDNewSprite12Objects2= [];
gdjs.Livello3Code.GDNewSprite16Objects1= [];
gdjs.Livello3Code.GDNewSprite16Objects2= [];
gdjs.Livello3Code.GDRagazzinaObjects1= [];
gdjs.Livello3Code.GDRagazzinaObjects2= [];
gdjs.Livello3Code.GDNewSprite10Objects1= [];
gdjs.Livello3Code.GDNewSprite10Objects2= [];
gdjs.Livello3Code.GDBloccoObjects1= [];
gdjs.Livello3Code.GDBloccoObjects2= [];
gdjs.Livello3Code.GDNewSprite6Objects1= [];
gdjs.Livello3Code.GDNewSprite6Objects2= [];
gdjs.Livello3Code.GDNewSprite15Objects1= [];
gdjs.Livello3Code.GDNewSprite15Objects2= [];
gdjs.Livello3Code.GDNewSprite13Objects1= [];
gdjs.Livello3Code.GDNewSprite13Objects2= [];
gdjs.Livello3Code.GDEntrataObjects1= [];
gdjs.Livello3Code.GDEntrataObjects2= [];


gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Livello3Code.GDRagazzinaObjects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDmonetaObjects1Objects = Hashtable.newFrom({"moneta": gdjs.Livello3Code.GDmonetaObjects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Livello3Code.GDNewSprite6Objects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Livello3Code.GDRagazzinaObjects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDBloccoObjects1Objects = Hashtable.newFrom({"Blocco": gdjs.Livello3Code.GDBloccoObjects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDBloccoObjects1Objects = Hashtable.newFrom({"Blocco": gdjs.Livello3Code.GDBloccoObjects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Livello3Code.GDRagazzinaObjects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs.Livello3Code.GDNewSprite9Objects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Livello3Code.GDRagazzinaObjects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.Livello3Code.GDNewSprite8Objects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Livello3Code.GDRagazzinaObjects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.Livello3Code.GDNewSprite7Objects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Livello3Code.GDRagazzinaObjects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDNewSprite11Objects1Objects = Hashtable.newFrom({"NewSprite11": gdjs.Livello3Code.GDNewSprite11Objects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Livello3Code.GDRagazzinaObjects1});
gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDNewSprite10Objects1Objects = Hashtable.newFrom({"NewSprite10": gdjs.Livello3Code.GDNewSprite10Objects1});
gdjs.Livello3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Blocco"), gdjs.Livello3Code.GDBloccoObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "8bit-music-for-game-68698.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.Livello3Code.GDBloccoObjects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDBloccoObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);
gdjs.copyArray(runtimeScene.getObjects("moneta"), gdjs.Livello3Code.GDmonetaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDRagazzinaObjects1Objects, gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDmonetaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Livello3Code.GDmonetaObjects1 */
{for(var i = 0, len = gdjs.Livello3Code.GDmonetaObjects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDmonetaObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Livello3Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( gdjs.Livello3Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Livello3Code.GDRagazzinaObjects1[k] = gdjs.Livello3Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Livello3Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Livello3Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Livello3Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Corsa");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Livello3Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( !(gdjs.Livello3Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Livello3Code.GDRagazzinaObjects1[k] = gdjs.Livello3Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Livello3Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Livello3Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Livello3Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Fermo");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Livello3Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDNewSprite6Objects1Objects, gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDRagazzinaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12796260);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "falled-sound-effect-278635.mp3", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Livello3", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Livello3Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello3Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDNewSprite6Objects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Livello3Code.GDRagazzinaObjects1.length === 0 ) ? 0 :gdjs.Livello3Code.GDRagazzinaObjects1[0].getPointX("")), (( gdjs.Livello3Code.GDRagazzinaObjects1.length === 0 ) ? 0 :gdjs.Livello3Code.GDRagazzinaObjects1[0].getPointY("")));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Blocco"), gdjs.Livello3Code.GDBloccoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Livello3Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello3Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDRagazzinaObjects1[i].separateFromObjectsList(gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDBloccoObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Livello3Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDNewSprite6Objects1[i].separateFromObjectsList(gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDBloccoObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.Livello3Code.GDNewSprite9Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDRagazzinaObjects1Objects, gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDNewSprite9Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Livello3Code.GDNewSprite9Objects1 */
{for(var i = 0, len = gdjs.Livello3Code.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDNewSprite9Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.Livello3Code.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDRagazzinaObjects1Objects, gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDNewSprite8Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Livello3Code.GDNewSprite8Objects1 */
{for(var i = 0, len = gdjs.Livello3Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDNewSprite8Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Livello3Code.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDRagazzinaObjects1Objects, gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDNewSprite7Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Livello3Code.GDNewSprite7Objects1 */
{for(var i = 0, len = gdjs.Livello3Code.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDNewSprite7Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite11"), gdjs.Livello3Code.GDNewSprite11Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDRagazzinaObjects1Objects, gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDNewSprite11Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Livello3Code.GDNewSprite11Objects1 */
{for(var i = 0, len = gdjs.Livello3Code.GDNewSprite11Objects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDNewSprite11Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite10"), gdjs.Livello3Code.GDNewSprite10Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDRagazzinaObjects1Objects, gdjs.Livello3Code.mapOfGDgdjs_9546Livello3Code_9546GDNewSprite10Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Livello3Code.GDNewSprite10Objects1 */
{for(var i = 0, len = gdjs.Livello3Code.GDNewSprite10Objects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDNewSprite10Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello3Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello3Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello3Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Up");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello3Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello3Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello3Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Down");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 10);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Schermata vittoria", false);
}}

}


};

gdjs.Livello3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Livello3Code.GDSfondoObjects1.length = 0;
gdjs.Livello3Code.GDSfondoObjects2.length = 0;
gdjs.Livello3Code.GDmonetaObjects1.length = 0;
gdjs.Livello3Code.GDmonetaObjects2.length = 0;
gdjs.Livello3Code.GDNewSpriteObjects1.length = 0;
gdjs.Livello3Code.GDNewSpriteObjects2.length = 0;
gdjs.Livello3Code.GDNewSprite2Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite2Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite4Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite4Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite7Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite7Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite8Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite8Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite9Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite9Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite5Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite5Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite11Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite11Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite12Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite12Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite16Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite16Objects2.length = 0;
gdjs.Livello3Code.GDRagazzinaObjects1.length = 0;
gdjs.Livello3Code.GDRagazzinaObjects2.length = 0;
gdjs.Livello3Code.GDNewSprite10Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite10Objects2.length = 0;
gdjs.Livello3Code.GDBloccoObjects1.length = 0;
gdjs.Livello3Code.GDBloccoObjects2.length = 0;
gdjs.Livello3Code.GDNewSprite6Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite6Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite15Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite15Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite13Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite13Objects2.length = 0;
gdjs.Livello3Code.GDEntrataObjects1.length = 0;
gdjs.Livello3Code.GDEntrataObjects2.length = 0;

gdjs.Livello3Code.eventsList0(runtimeScene);
gdjs.Livello3Code.GDSfondoObjects1.length = 0;
gdjs.Livello3Code.GDSfondoObjects2.length = 0;
gdjs.Livello3Code.GDmonetaObjects1.length = 0;
gdjs.Livello3Code.GDmonetaObjects2.length = 0;
gdjs.Livello3Code.GDNewSpriteObjects1.length = 0;
gdjs.Livello3Code.GDNewSpriteObjects2.length = 0;
gdjs.Livello3Code.GDNewSprite2Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite2Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite4Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite4Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite7Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite7Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite8Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite8Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite9Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite9Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite5Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite5Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite11Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite11Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite12Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite12Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite16Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite16Objects2.length = 0;
gdjs.Livello3Code.GDRagazzinaObjects1.length = 0;
gdjs.Livello3Code.GDRagazzinaObjects2.length = 0;
gdjs.Livello3Code.GDNewSprite10Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite10Objects2.length = 0;
gdjs.Livello3Code.GDBloccoObjects1.length = 0;
gdjs.Livello3Code.GDBloccoObjects2.length = 0;
gdjs.Livello3Code.GDNewSprite6Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite6Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite15Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite15Objects2.length = 0;
gdjs.Livello3Code.GDNewSprite13Objects1.length = 0;
gdjs.Livello3Code.GDNewSprite13Objects2.length = 0;
gdjs.Livello3Code.GDEntrataObjects1.length = 0;
gdjs.Livello3Code.GDEntrataObjects2.length = 0;


return;

}

gdjs['Livello3Code'] = gdjs.Livello3Code;
