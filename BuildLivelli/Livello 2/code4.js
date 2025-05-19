gdjs.Dialogo_32finaleCode = {};
gdjs.Dialogo_32finaleCode.localVariables = [];
gdjs.Dialogo_32finaleCode.GDSadEmoteMidObjects1= [];
gdjs.Dialogo_32finaleCode.GDSadEmoteMidObjects2= [];
gdjs.Dialogo_32finaleCode.GDDialogo_9595teodoricoObjects1= [];
gdjs.Dialogo_32finaleCode.GDDialogo_9595teodoricoObjects2= [];
gdjs.Dialogo_32finaleCode.GDPortaObjects1= [];
gdjs.Dialogo_32finaleCode.GDPortaObjects2= [];
gdjs.Dialogo_32finaleCode.GDGrass5Objects1= [];
gdjs.Dialogo_32finaleCode.GDGrass5Objects2= [];
gdjs.Dialogo_32finaleCode.GDNewSprite2Objects1= [];
gdjs.Dialogo_32finaleCode.GDNewSprite2Objects2= [];
gdjs.Dialogo_32finaleCode.GDTopDownTerrain128x128Objects1= [];
gdjs.Dialogo_32finaleCode.GDTopDownTerrain128x128Objects2= [];
gdjs.Dialogo_32finaleCode.GDTalkingEmote2MidObjects1= [];
gdjs.Dialogo_32finaleCode.GDTalkingEmote2MidObjects2= [];
gdjs.Dialogo_32finaleCode.GDNewSprite9Objects1= [];
gdjs.Dialogo_32finaleCode.GDNewSprite9Objects2= [];
gdjs.Dialogo_32finaleCode.GDNewTextObjects1= [];
gdjs.Dialogo_32finaleCode.GDNewTextObjects2= [];
gdjs.Dialogo_32finaleCode.GDNewSprite12Objects1= [];
gdjs.Dialogo_32finaleCode.GDNewSprite12Objects2= [];
gdjs.Dialogo_32finaleCode.GDFireKnightObjects1= [];
gdjs.Dialogo_32finaleCode.GDFireKnightObjects2= [];
gdjs.Dialogo_32finaleCode.GDKingObjects1= [];
gdjs.Dialogo_32finaleCode.GDKingObjects2= [];
gdjs.Dialogo_32finaleCode.GDMausoleoObjects1= [];
gdjs.Dialogo_32finaleCode.GDMausoleoObjects2= [];
gdjs.Dialogo_32finaleCode.GDBackGroundObjects1= [];
gdjs.Dialogo_32finaleCode.GDBackGroundObjects2= [];
gdjs.Dialogo_32finaleCode.GDTorciaObjects1= [];
gdjs.Dialogo_32finaleCode.GDTorciaObjects2= [];
gdjs.Dialogo_32finaleCode.GDNewSpriteObjects1= [];
gdjs.Dialogo_32finaleCode.GDNewSpriteObjects2= [];
gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1= [];
gdjs.Dialogo_32finaleCode.GDRagazzinaObjects2= [];


gdjs.Dialogo_32finaleCode.mapOfGDgdjs_9546Dialogo_959532finaleCode_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1});
gdjs.Dialogo_32finaleCode.mapOfGDgdjs_9546Dialogo_959532finaleCode_9546GDKingObjects1Objects = Hashtable.newFrom({"King": gdjs.Dialogo_32finaleCode.GDKingObjects1});
gdjs.Dialogo_32finaleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.Dialogo_32finaleCode.GDKingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dialogo_32finaleCode.mapOfGDgdjs_9546Dialogo_959532finaleCode_9546GDRagazzinaObjects1Objects, gdjs.Dialogo_32finaleCode.mapOfGDgdjs_9546Dialogo_959532finaleCode_9546GDKingObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogo_teodorico"), gdjs.Dialogo_32finaleCode.GDDialogo_9595teodoricoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Torcia"), gdjs.Dialogo_32finaleCode.GDTorciaObjects1);
{for(var i = 0, len = gdjs.Dialogo_32finaleCode.GDDialogo_9595teodoricoObjects1.length ;i < len;++i) {
    gdjs.Dialogo_32finaleCode.GDDialogo_9595teodoricoObjects1[i].getBehavior("Text").setText("Grazie mille! Ecco a te i tuoi cappelletti.");
}
}{for(var i = 0, len = gdjs.Dialogo_32finaleCode.GDTorciaObjects1.length ;i < len;++i) {
    gdjs.Dialogo_32finaleCode.GDTorciaObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1.length;i<l;++i) {
    if ( gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_1 = true;
        gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1[k] = gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Ragazzina");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Corsa");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1.length;i<l;++i) {
    if ( !(gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1[k] = gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Fermo");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Up");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Down");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Torcia"), gdjs.Dialogo_32finaleCode.GDTorciaObjects1);
{for(var i = 0, len = gdjs.Dialogo_32finaleCode.GDTorciaObjects1.length ;i < len;++i) {
    gdjs.Dialogo_32finaleCode.GDTorciaObjects1[i].hide();
}
}}

}


};

gdjs.Dialogo_32finaleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dialogo_32finaleCode.GDSadEmoteMidObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDSadEmoteMidObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDDialogo_9595teodoricoObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDDialogo_9595teodoricoObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDPortaObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDPortaObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDGrass5Objects1.length = 0;
gdjs.Dialogo_32finaleCode.GDGrass5Objects2.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSprite2Objects1.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSprite2Objects2.length = 0;
gdjs.Dialogo_32finaleCode.GDTopDownTerrain128x128Objects1.length = 0;
gdjs.Dialogo_32finaleCode.GDTopDownTerrain128x128Objects2.length = 0;
gdjs.Dialogo_32finaleCode.GDTalkingEmote2MidObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDTalkingEmote2MidObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSprite9Objects1.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSprite9Objects2.length = 0;
gdjs.Dialogo_32finaleCode.GDNewTextObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDNewTextObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSprite12Objects1.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSprite12Objects2.length = 0;
gdjs.Dialogo_32finaleCode.GDFireKnightObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDFireKnightObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDKingObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDKingObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDMausoleoObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDMausoleoObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDBackGroundObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDBackGroundObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDTorciaObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDTorciaObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSpriteObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSpriteObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDRagazzinaObjects2.length = 0;

gdjs.Dialogo_32finaleCode.eventsList0(runtimeScene);
gdjs.Dialogo_32finaleCode.GDSadEmoteMidObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDSadEmoteMidObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDDialogo_9595teodoricoObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDDialogo_9595teodoricoObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDPortaObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDPortaObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDGrass5Objects1.length = 0;
gdjs.Dialogo_32finaleCode.GDGrass5Objects2.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSprite2Objects1.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSprite2Objects2.length = 0;
gdjs.Dialogo_32finaleCode.GDTopDownTerrain128x128Objects1.length = 0;
gdjs.Dialogo_32finaleCode.GDTopDownTerrain128x128Objects2.length = 0;
gdjs.Dialogo_32finaleCode.GDTalkingEmote2MidObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDTalkingEmote2MidObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSprite9Objects1.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSprite9Objects2.length = 0;
gdjs.Dialogo_32finaleCode.GDNewTextObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDNewTextObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSprite12Objects1.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSprite12Objects2.length = 0;
gdjs.Dialogo_32finaleCode.GDFireKnightObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDFireKnightObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDKingObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDKingObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDMausoleoObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDMausoleoObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDBackGroundObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDBackGroundObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDTorciaObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDTorciaObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSpriteObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDNewSpriteObjects2.length = 0;
gdjs.Dialogo_32finaleCode.GDRagazzinaObjects1.length = 0;
gdjs.Dialogo_32finaleCode.GDRagazzinaObjects2.length = 0;


return;

}

gdjs['Dialogo_32finaleCode'] = gdjs.Dialogo_32finaleCode;
