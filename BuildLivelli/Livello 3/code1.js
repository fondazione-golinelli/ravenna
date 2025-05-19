gdjs.Scena_322Code = {};
gdjs.Scena_322Code.localVariables = [];
gdjs.Scena_322Code.GDNewSprite2Objects1= [];
gdjs.Scena_322Code.GDNewSprite2Objects2= [];
gdjs.Scena_322Code.GDNewSprite3Objects1= [];
gdjs.Scena_322Code.GDNewSprite3Objects2= [];
gdjs.Scena_322Code.GDNewSprite4Objects1= [];
gdjs.Scena_322Code.GDNewSprite4Objects2= [];
gdjs.Scena_322Code.GDNewSprite5Objects1= [];
gdjs.Scena_322Code.GDNewSprite5Objects2= [];
gdjs.Scena_322Code.GDNewSprite6Objects1= [];
gdjs.Scena_322Code.GDNewSprite6Objects2= [];
gdjs.Scena_322Code.GDNewSprite8Objects1= [];
gdjs.Scena_322Code.GDNewSprite8Objects2= [];
gdjs.Scena_322Code.GDNewSpriteObjects1= [];
gdjs.Scena_322Code.GDNewSpriteObjects2= [];
gdjs.Scena_322Code.GDNewSprite9Objects1= [];
gdjs.Scena_322Code.GDNewSprite9Objects2= [];
gdjs.Scena_322Code.GDNewSprite10Objects1= [];
gdjs.Scena_322Code.GDNewSprite10Objects2= [];
gdjs.Scena_322Code.GDNewSprite11Objects1= [];
gdjs.Scena_322Code.GDNewSprite11Objects2= [];
gdjs.Scena_322Code.GDNewSprite7Objects1= [];
gdjs.Scena_322Code.GDNewSprite7Objects2= [];
gdjs.Scena_322Code.GDTimerObjects1= [];
gdjs.Scena_322Code.GDTimerObjects2= [];
gdjs.Scena_322Code.GDNewSprite12Objects1= [];
gdjs.Scena_322Code.GDNewSprite12Objects2= [];
gdjs.Scena_322Code.GDNewSprite13Objects1= [];
gdjs.Scena_322Code.GDNewSprite13Objects2= [];
gdjs.Scena_322Code.GDNewSprite14Objects1= [];
gdjs.Scena_322Code.GDNewSprite14Objects2= [];
gdjs.Scena_322Code.GDNewSprite15Objects1= [];
gdjs.Scena_322Code.GDNewSprite15Objects2= [];
gdjs.Scena_322Code.GDRagazzinaObjects1= [];
gdjs.Scena_322Code.GDRagazzinaObjects2= [];
gdjs.Scena_322Code.GDPiazzaObjects1= [];
gdjs.Scena_322Code.GDPiazzaObjects2= [];


gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Scena_322Code.GDRagazzinaObjects1});
gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Scena_322Code.GDNewSprite2Objects1});
gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Scena_322Code.GDRagazzinaObjects1});
gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Scena_322Code.GDNewSprite3Objects1});
gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Scena_322Code.GDRagazzinaObjects1});
gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Scena_322Code.GDNewSprite4Objects1});
gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Scena_322Code.GDRagazzinaObjects1});
gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.Scena_322Code.GDNewSprite5Objects1});
gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Scena_322Code.GDRagazzinaObjects1});
gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Scena_322Code.GDNewSprite6Objects1});
gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Scena_322Code.GDRagazzinaObjects1});
gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDNewSprite12Objects1Objects = Hashtable.newFrom({"NewSprite12": gdjs.Scena_322Code.GDNewSprite12Objects1});
gdjs.Scena_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Scena_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDRagazzinaObjects1Objects, gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12505444);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scena_322Code.GDNewSprite2Objects1 */
/* Reuse gdjs.Scena_322Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Scena_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDRagazzinaObjects1[i].returnVariable(gdjs.Scena_322Code.GDRagazzinaObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.Scena_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Scena_322Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDRagazzinaObjects1Objects, gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15882500);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scena_322Code.GDNewSprite3Objects1 */
/* Reuse gdjs.Scena_322Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Scena_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDRagazzinaObjects1[i].returnVariable(gdjs.Scena_322Code.GDRagazzinaObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.Scena_322Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDNewSprite3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Scena_322Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDRagazzinaObjects1Objects, gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14479028);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scena_322Code.GDNewSprite4Objects1 */
/* Reuse gdjs.Scena_322Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Scena_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDRagazzinaObjects1[i].returnVariable(gdjs.Scena_322Code.GDRagazzinaObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.Scena_322Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDNewSprite4Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Scena_322Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDRagazzinaObjects1Objects, gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDNewSprite5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14480460);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scena_322Code.GDNewSprite5Objects1 */
/* Reuse gdjs.Scena_322Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Scena_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDRagazzinaObjects1[i].returnVariable(gdjs.Scena_322Code.GDRagazzinaObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.Scena_322Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDNewSprite5Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Scena_322Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDRagazzinaObjects1Objects, gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14481780);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scena_322Code.GDNewSprite6Objects1 */
/* Reuse gdjs.Scena_322Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Scena_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDRagazzinaObjects1[i].returnVariable(gdjs.Scena_322Code.GDRagazzinaObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.Scena_322Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDNewSprite6Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite12"), gdjs.Scena_322Code.GDNewSprite12Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDRagazzinaObjects1Objects, gdjs.Scena_322Code.mapOfGDgdjs_9546Scena_9595322Code_9546GDNewSprite12Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14482996);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scena_322Code.GDNewSprite12Objects1 */
/* Reuse gdjs.Scena_322Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Scena_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDRagazzinaObjects1[i].returnVariable(gdjs.Scena_322Code.GDRagazzinaObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.Scena_322Code.GDNewSprite12Objects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDNewSprite12Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scena_322Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( gdjs.Scena_322Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Scena_322Code.GDRagazzinaObjects1[k] = gdjs.Scena_322Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Scena_322Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scena_322Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Scena_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Corsa");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scena_322Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( !(gdjs.Scena_322Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Scena_322Code.GDRagazzinaObjects1[k] = gdjs.Scena_322Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Scena_322Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scena_322Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Scena_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Fermo");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scena_322Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( gdjs.Scena_322Code.GDRagazzinaObjects1[i].getVariableNumber(gdjs.Scena_322Code.GDRagazzinaObjects1[i].getVariables().getFromIndex(0)) < 6 ) {
        isConditionTrue_0 = true;
        gdjs.Scena_322Code.GDRagazzinaObjects1[k] = gdjs.Scena_322Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Scena_322Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Scena_322Code.GDTimerObjects1);
{for(var i = 0, len = gdjs.Scena_322Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(30 - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Timer"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scena_322Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( gdjs.Scena_322Code.GDRagazzinaObjects1[i].getVariableNumber(gdjs.Scena_322Code.GDRagazzinaObjects1[i].getVariables().getFromIndex(0)) >= 5 ) {
        isConditionTrue_0 = true;
        gdjs.Scena_322Code.GDRagazzinaObjects1[k] = gdjs.Scena_322Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Scena_322Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Timer");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Vittora", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") >= 30;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Scena_322Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( gdjs.Scena_322Code.GDRagazzinaObjects1[i].getVariableNumber(gdjs.Scena_322Code.GDRagazzinaObjects1[i].getVariables().getFromIndex(0)) < 6 ) {
        isConditionTrue_1 = true;
        gdjs.Scena_322Code.GDRagazzinaObjects1[k] = gdjs.Scena_322Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Scena_322Code.GDRagazzinaObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "perde", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Scena_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Scena_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Scena_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Up");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Scena_322Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Scena_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Scena_322Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Down");
}
}}

}


};

gdjs.Scena_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scena_322Code.GDNewSprite2Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite2Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite3Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite3Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite4Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite4Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite5Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite5Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite6Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite6Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite8Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite8Objects2.length = 0;
gdjs.Scena_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Scena_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Scena_322Code.GDNewSprite9Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite9Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite10Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite10Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite11Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite11Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite7Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite7Objects2.length = 0;
gdjs.Scena_322Code.GDTimerObjects1.length = 0;
gdjs.Scena_322Code.GDTimerObjects2.length = 0;
gdjs.Scena_322Code.GDNewSprite12Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite12Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite13Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite13Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite14Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite14Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite15Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite15Objects2.length = 0;
gdjs.Scena_322Code.GDRagazzinaObjects1.length = 0;
gdjs.Scena_322Code.GDRagazzinaObjects2.length = 0;
gdjs.Scena_322Code.GDPiazzaObjects1.length = 0;
gdjs.Scena_322Code.GDPiazzaObjects2.length = 0;

gdjs.Scena_322Code.eventsList0(runtimeScene);
gdjs.Scena_322Code.GDNewSprite2Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite2Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite3Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite3Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite4Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite4Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite5Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite5Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite6Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite6Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite8Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite8Objects2.length = 0;
gdjs.Scena_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Scena_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Scena_322Code.GDNewSprite9Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite9Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite10Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite10Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite11Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite11Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite7Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite7Objects2.length = 0;
gdjs.Scena_322Code.GDTimerObjects1.length = 0;
gdjs.Scena_322Code.GDTimerObjects2.length = 0;
gdjs.Scena_322Code.GDNewSprite12Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite12Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite13Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite13Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite14Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite14Objects2.length = 0;
gdjs.Scena_322Code.GDNewSprite15Objects1.length = 0;
gdjs.Scena_322Code.GDNewSprite15Objects2.length = 0;
gdjs.Scena_322Code.GDRagazzinaObjects1.length = 0;
gdjs.Scena_322Code.GDRagazzinaObjects2.length = 0;
gdjs.Scena_322Code.GDPiazzaObjects1.length = 0;
gdjs.Scena_322Code.GDPiazzaObjects2.length = 0;


return;

}

gdjs['Scena_322Code'] = gdjs.Scena_322Code;
