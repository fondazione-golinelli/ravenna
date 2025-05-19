gdjs.Dialogo_32iniziale_322Code = {};
gdjs.Dialogo_32iniziale_322Code.localVariables = [];
gdjs.Dialogo_32iniziale_322Code.GDSadEmoteMidObjects1= [];
gdjs.Dialogo_32iniziale_322Code.GDSadEmoteMidObjects2= [];
gdjs.Dialogo_32iniziale_322Code.GDDialogo_9595teodoricoObjects1= [];
gdjs.Dialogo_32iniziale_322Code.GDDialogo_9595teodoricoObjects2= [];
gdjs.Dialogo_32iniziale_322Code.GDPortaObjects1= [];
gdjs.Dialogo_32iniziale_322Code.GDPortaObjects2= [];
gdjs.Dialogo_32iniziale_322Code.GDGrass5Objects1= [];
gdjs.Dialogo_32iniziale_322Code.GDGrass5Objects2= [];
gdjs.Dialogo_32iniziale_322Code.GDNewSprite2Objects1= [];
gdjs.Dialogo_32iniziale_322Code.GDNewSprite2Objects2= [];
gdjs.Dialogo_32iniziale_322Code.GDTopDownTerrain128x128Objects1= [];
gdjs.Dialogo_32iniziale_322Code.GDTopDownTerrain128x128Objects2= [];
gdjs.Dialogo_32iniziale_322Code.GDTalkingEmote2MidObjects1= [];
gdjs.Dialogo_32iniziale_322Code.GDTalkingEmote2MidObjects2= [];
gdjs.Dialogo_32iniziale_322Code.GDNewSprite9Objects1= [];
gdjs.Dialogo_32iniziale_322Code.GDNewSprite9Objects2= [];
gdjs.Dialogo_32iniziale_322Code.GDNewTextObjects1= [];
gdjs.Dialogo_32iniziale_322Code.GDNewTextObjects2= [];
gdjs.Dialogo_32iniziale_322Code.GDNewSprite12Objects1= [];
gdjs.Dialogo_32iniziale_322Code.GDNewSprite12Objects2= [];
gdjs.Dialogo_32iniziale_322Code.GDFireKnightObjects1= [];
gdjs.Dialogo_32iniziale_322Code.GDFireKnightObjects2= [];
gdjs.Dialogo_32iniziale_322Code.GDKingObjects1= [];
gdjs.Dialogo_32iniziale_322Code.GDKingObjects2= [];
gdjs.Dialogo_32iniziale_322Code.GDMausoleoObjects1= [];
gdjs.Dialogo_32iniziale_322Code.GDMausoleoObjects2= [];
gdjs.Dialogo_32iniziale_322Code.GDBackGroundObjects1= [];
gdjs.Dialogo_32iniziale_322Code.GDBackGroundObjects2= [];
gdjs.Dialogo_32iniziale_322Code.GDTorciaObjects1= [];
gdjs.Dialogo_32iniziale_322Code.GDTorciaObjects2= [];
gdjs.Dialogo_32iniziale_322Code.GDNewSpriteObjects1= [];
gdjs.Dialogo_32iniziale_322Code.GDNewSpriteObjects2= [];
gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1= [];
gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects2= [];


gdjs.Dialogo_32iniziale_322Code.mapOfGDgdjs_9546Dialogo_959532iniziale_9595322Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1});
gdjs.Dialogo_32iniziale_322Code.mapOfGDgdjs_9546Dialogo_959532iniziale_9595322Code_9546GDKingObjects1Objects = Hashtable.newFrom({"King": gdjs.Dialogo_32iniziale_322Code.GDKingObjects1});
gdjs.Dialogo_32iniziale_322Code.mapOfGDgdjs_9546Dialogo_959532iniziale_9595322Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1});
gdjs.Dialogo_32iniziale_322Code.mapOfGDgdjs_9546Dialogo_959532iniziale_9595322Code_9546GDPortaObjects1Objects = Hashtable.newFrom({"Porta": gdjs.Dialogo_32iniziale_322Code.GDPortaObjects1});
gdjs.Dialogo_32iniziale_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.Dialogo_32iniziale_322Code.GDKingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dialogo_32iniziale_322Code.mapOfGDgdjs_9546Dialogo_959532iniziale_9595322Code_9546GDRagazzinaObjects1Objects, gdjs.Dialogo_32iniziale_322Code.mapOfGDgdjs_9546Dialogo_959532iniziale_9595322Code_9546GDKingObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogo_teodorico"), gdjs.Dialogo_32iniziale_322Code.GDDialogo_9595teodoricoObjects1);
{for(var i = 0, len = gdjs.Dialogo_32iniziale_322Code.GDDialogo_9595teodoricoObjects1.length ;i < len;++i) {
    gdjs.Dialogo_32iniziale_322Code.GDDialogo_9595teodoricoObjects1[i].getBehavior("Text").setText("Aiutami!!!!! Sono Teodorico, re degli ostrogoti: una volta ero rispettato e venerato, ma purtroppo mi hanno rubato il tesoro. Aiutami a trovarlo e ti darò in compenso un piatto di cappeletti dorati! entra sconfiggi i nemici e portami la mia corona");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Porta"), gdjs.Dialogo_32iniziale_322Code.GDPortaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dialogo_32iniziale_322Code.mapOfGDgdjs_9546Dialogo_959532iniziale_9595322Code_9546GDRagazzinaObjects1Objects, gdjs.Dialogo_32iniziale_322Code.mapOfGDgdjs_9546Dialogo_959532iniziale_9595322Code_9546GDPortaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Livello2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_1 = true;
        gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1[k] = gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Ragazzina");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Corsa");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( !(gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1[k] = gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Fermo");
}
}}

}


};

gdjs.Dialogo_32iniziale_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dialogo_32iniziale_322Code.GDSadEmoteMidObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDSadEmoteMidObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDDialogo_9595teodoricoObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDDialogo_9595teodoricoObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDPortaObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDPortaObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDGrass5Objects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDGrass5Objects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSprite2Objects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSprite2Objects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDTopDownTerrain128x128Objects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDTopDownTerrain128x128Objects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDTalkingEmote2MidObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDTalkingEmote2MidObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSprite9Objects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSprite9Objects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewTextObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewTextObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSprite12Objects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSprite12Objects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDFireKnightObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDFireKnightObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDKingObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDKingObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDMausoleoObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDMausoleoObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDBackGroundObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDBackGroundObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDTorciaObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDTorciaObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects2.length = 0;

gdjs.Dialogo_32iniziale_322Code.eventsList0(runtimeScene);
gdjs.Dialogo_32iniziale_322Code.GDSadEmoteMidObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDSadEmoteMidObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDDialogo_9595teodoricoObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDDialogo_9595teodoricoObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDPortaObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDPortaObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDGrass5Objects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDGrass5Objects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSprite2Objects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSprite2Objects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDTopDownTerrain128x128Objects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDTopDownTerrain128x128Objects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDTalkingEmote2MidObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDTalkingEmote2MidObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSprite9Objects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSprite9Objects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewTextObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewTextObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSprite12Objects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSprite12Objects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDFireKnightObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDFireKnightObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDKingObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDKingObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDMausoleoObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDMausoleoObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDBackGroundObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDBackGroundObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDTorciaObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDTorciaObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects1.length = 0;
gdjs.Dialogo_32iniziale_322Code.GDRagazzinaObjects2.length = 0;


return;

}

gdjs['Dialogo_32iniziale_322Code'] = gdjs.Dialogo_32iniziale_322Code;
