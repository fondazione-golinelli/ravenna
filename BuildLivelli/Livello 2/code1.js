gdjs.Livello2Code = {};
gdjs.Livello2Code.localVariables = [];
gdjs.Livello2Code.GDgiocatoreObjects1= [];
gdjs.Livello2Code.GDgiocatoreObjects2= [];
gdjs.Livello2Code.GDgiocatoreObjects3= [];
gdjs.Livello2Code.GDmoneta_9595giamba_9595giambaObjects1= [];
gdjs.Livello2Code.GDmoneta_9595giamba_9595giambaObjects2= [];
gdjs.Livello2Code.GDmoneta_9595giamba_9595giambaObjects3= [];
gdjs.Livello2Code.GDNewSprite3Objects1= [];
gdjs.Livello2Code.GDNewSprite3Objects2= [];
gdjs.Livello2Code.GDNewSprite3Objects3= [];
gdjs.Livello2Code.GDCoronaObjects1= [];
gdjs.Livello2Code.GDCoronaObjects2= [];
gdjs.Livello2Code.GDCoronaObjects3= [];
gdjs.Livello2Code.GDElmoObjects1= [];
gdjs.Livello2Code.GDElmoObjects2= [];
gdjs.Livello2Code.GDElmoObjects3= [];
gdjs.Livello2Code.GDspada_95952Objects1= [];
gdjs.Livello2Code.GDspada_95952Objects2= [];
gdjs.Livello2Code.GDspada_95952Objects3= [];
gdjs.Livello2Code.GDSpada_9595nemicoObjects1= [];
gdjs.Livello2Code.GDSpada_9595nemicoObjects2= [];
gdjs.Livello2Code.GDSpada_9595nemicoObjects3= [];
gdjs.Livello2Code.GDDialogo1Objects1= [];
gdjs.Livello2Code.GDDialogo1Objects2= [];
gdjs.Livello2Code.GDDialogo1Objects3= [];
gdjs.Livello2Code.GDTopDownTerrain128x128Objects1= [];
gdjs.Livello2Code.GDTopDownTerrain128x128Objects2= [];
gdjs.Livello2Code.GDTopDownTerrain128x128Objects3= [];
gdjs.Livello2Code.GDTalkingEmote2MidObjects1= [];
gdjs.Livello2Code.GDTalkingEmote2MidObjects2= [];
gdjs.Livello2Code.GDTalkingEmote2MidObjects3= [];
gdjs.Livello2Code.GDNewSprite9Objects1= [];
gdjs.Livello2Code.GDNewSprite9Objects2= [];
gdjs.Livello2Code.GDNewSprite9Objects3= [];
gdjs.Livello2Code.GDNewTextObjects1= [];
gdjs.Livello2Code.GDNewTextObjects2= [];
gdjs.Livello2Code.GDNewTextObjects3= [];
gdjs.Livello2Code.GDNewSprite12Objects1= [];
gdjs.Livello2Code.GDNewSprite12Objects2= [];
gdjs.Livello2Code.GDNewSprite12Objects3= [];
gdjs.Livello2Code.GDFireKnightObjects1= [];
gdjs.Livello2Code.GDFireKnightObjects2= [];
gdjs.Livello2Code.GDFireKnightObjects3= [];
gdjs.Livello2Code.GDKingObjects1= [];
gdjs.Livello2Code.GDKingObjects2= [];
gdjs.Livello2Code.GDKingObjects3= [];
gdjs.Livello2Code.GDMausoleoObjects1= [];
gdjs.Livello2Code.GDMausoleoObjects2= [];
gdjs.Livello2Code.GDMausoleoObjects3= [];
gdjs.Livello2Code.GDBackGroundObjects1= [];
gdjs.Livello2Code.GDBackGroundObjects2= [];
gdjs.Livello2Code.GDBackGroundObjects3= [];
gdjs.Livello2Code.GDTorciaObjects1= [];
gdjs.Livello2Code.GDTorciaObjects2= [];
gdjs.Livello2Code.GDTorciaObjects3= [];
gdjs.Livello2Code.GDNewSpriteObjects1= [];
gdjs.Livello2Code.GDNewSpriteObjects2= [];
gdjs.Livello2Code.GDNewSpriteObjects3= [];
gdjs.Livello2Code.GDRagazzinaObjects1= [];
gdjs.Livello2Code.GDRagazzinaObjects2= [];
gdjs.Livello2Code.GDRagazzinaObjects3= [];


gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDgiocatoreObjects1Objects = Hashtable.newFrom({"giocatore": gdjs.Livello2Code.GDgiocatoreObjects1});
gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Livello2Code.GDRagazzinaObjects1});
gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDFireKnightObjects1Objects = Hashtable.newFrom({"FireKnight": gdjs.Livello2Code.GDFireKnightObjects1});
gdjs.Livello2Code.asyncCallback15975124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Livello2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("spada_2"), gdjs.Livello2Code.GDspada_95952Objects3);

{for(var i = 0, len = gdjs.Livello2Code.GDspada_95952Objects3.length ;i < len;++i) {
    gdjs.Livello2Code.GDspada_95952Objects3[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}gdjs.Livello2Code.localVariables.length = 0;
}
gdjs.Livello2Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Livello2Code.localVariables);
/* Don't save spada_2 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Livello2Code.asyncCallback15975124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Livello2Code.asyncCallback15974788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Livello2Code.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
{ //Subevents
gdjs.Livello2Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Livello2Code.localVariables.length = 0;
}
gdjs.Livello2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Livello2Code.localVariables);
for (const obj of gdjs.Livello2Code.GDspada_95952Objects1) asyncObjectsList.addObject("spada_2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Livello2Code.asyncCallback15974788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDspada_959595952Objects1Objects = Hashtable.newFrom({"spada_2": gdjs.Livello2Code.GDspada_95952Objects1});
gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDFireKnightObjects1Objects = Hashtable.newFrom({"FireKnight": gdjs.Livello2Code.GDFireKnightObjects1});
gdjs.Livello2Code.asyncCallback15979588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Livello2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("FireKnight"), gdjs.Livello2Code.GDFireKnightObjects3);

{for(var i = 0, len = gdjs.Livello2Code.GDFireKnightObjects3.length ;i < len;++i) {
    gdjs.Livello2Code.GDFireKnightObjects3[i].returnVariable(gdjs.Livello2Code.GDFireKnightObjects3[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}{for(var i = 0, len = gdjs.Livello2Code.GDFireKnightObjects3.length ;i < len;++i) {
    gdjs.Livello2Code.GDFireKnightObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Attacco nemico");
}gdjs.Livello2Code.localVariables.length = 0;
}
gdjs.Livello2Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Livello2Code.localVariables);
for (const obj of gdjs.Livello2Code.GDFireKnightObjects2) asyncObjectsList.addObject("FireKnight", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.9), (runtimeScene) => (gdjs.Livello2Code.asyncCallback15979588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Livello2Code.asyncCallback15978724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Livello2Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("FireKnight"), gdjs.Livello2Code.GDFireKnightObjects2);
{for(var i = 0, len = gdjs.Livello2Code.GDFireKnightObjects2.length ;i < len;++i) {
    gdjs.Livello2Code.GDFireKnightObjects2[i].getBehavior("Animation").setAnimationName("Attack1");
}
}{for(var i = 0, len = gdjs.Livello2Code.GDFireKnightObjects2.length ;i < len;++i) {
    gdjs.Livello2Code.GDFireKnightObjects2[i].returnVariable(gdjs.Livello2Code.GDFireKnightObjects2[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}
{ //Subevents
gdjs.Livello2Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Livello2Code.localVariables.length = 0;
}
gdjs.Livello2Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Livello2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Livello2Code.asyncCallback15978724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDFireKnightObjects1Objects = Hashtable.newFrom({"FireKnight": gdjs.Livello2Code.GDFireKnightObjects1});
gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Livello2Code.GDRagazzinaObjects1});
gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Livello2Code.GDRagazzinaObjects1});
gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDTorciaObjects1Objects = Hashtable.newFrom({"Torcia": gdjs.Livello2Code.GDTorciaObjects1});
gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.Livello2Code.GDRagazzinaObjects1});
gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDCoronaObjects1Objects = Hashtable.newFrom({"Corona": gdjs.Livello2Code.GDCoronaObjects1});
gdjs.Livello2Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Elmo"), gdjs.Livello2Code.GDElmoObjects1);
gdjs.copyArray(runtimeScene.getObjects("FireKnight"), gdjs.Livello2Code.GDFireKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Livello2Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello2Code.GDRagazzinaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spada_nemico"), gdjs.Livello2Code.GDSpada_9595nemicoObjects1);
gdjs.copyArray(runtimeScene.getObjects("giocatore"), gdjs.Livello2Code.GDgiocatoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("spada_2"), gdjs.Livello2Code.GDspada_95952Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Livello2Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDNewSprite3Objects1[i].hide();
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Livello2Code.GDRagazzinaObjects1.length !== 0 ? gdjs.Livello2Code.GDRagazzinaObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Livello2Code.GDElmoObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDElmoObjects1[i].getBehavior("Sticker").Stick(gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDgiocatoreObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Livello2Code.GDspada_95952Objects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDspada_95952Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Livello2Code.GDspada_95952Objects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDspada_95952Objects1[i].getBehavior("Sticker").Stick(gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDRagazzinaObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}{for(var i = 0, len = gdjs.Livello2Code.GDSpada_9595nemicoObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDSpada_9595nemicoObjects1[i].getBehavior("Sticker").Stick(gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDFireKnightObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Livello2Code.GDSpada_9595nemicoObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDSpada_9595nemicoObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Attacco nemico");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("moneta_giamba_giamba"), gdjs.Livello2Code.GDmoneta_9595giamba_9595giambaObjects1);
{for(var i = 0, len = gdjs.Livello2Code.GDmoneta_9595giamba_9595giambaObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDmoneta_9595giamba_9595giambaObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 20);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Livello2Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Livello2Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDNewSprite3Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello2Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Livello2Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( gdjs.Livello2Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Livello2Code.GDRagazzinaObjects1[k] = gdjs.Livello2Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Livello2Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Livello2Code.GDRagazzinaObjects1 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Livello2Code.GDRagazzinaObjects1.length !== 0 ? gdjs.Livello2Code.GDRagazzinaObjects1[0] : null), true, "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("spada_2"), gdjs.Livello2Code.GDspada_95952Objects1);
{for(var i = 0, len = gdjs.Livello2Code.GDspada_95952Objects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDspada_95952Objects1[i].hide(false);
}
}
{ //Subevents
gdjs.Livello2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FireKnight"), gdjs.Livello2Code.GDFireKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("spada_2"), gdjs.Livello2Code.GDspada_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDspada_959595952Objects1Objects, gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDFireKnightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15976676);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Livello2Code.GDFireKnightObjects1 */
{for(var i = 0, len = gdjs.Livello2Code.GDFireKnightObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDFireKnightObjects1[i].returnVariable(gdjs.Livello2Code.GDFireKnightObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FireKnight"), gdjs.Livello2Code.GDFireKnightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Livello2Code.GDFireKnightObjects1.length;i<l;++i) {
    if ( gdjs.Livello2Code.GDFireKnightObjects1[i].getVariableNumber(gdjs.Livello2Code.GDFireKnightObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Livello2Code.GDFireKnightObjects1[k] = gdjs.Livello2Code.GDFireKnightObjects1[i];
        ++k;
    }
}
gdjs.Livello2Code.GDFireKnightObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15977428);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Livello2Code.GDFireKnightObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Spada_nemico"), gdjs.Livello2Code.GDSpada_9595nemicoObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{for(var i = 0, len = gdjs.Livello2Code.GDFireKnightObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDFireKnightObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Livello2Code.GDSpada_9595nemicoObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDSpada_9595nemicoObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Attacco nemico") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15978604);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Livello2Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FireKnight"), gdjs.Livello2Code.GDFireKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello2Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDFireKnightObjects1Objects, gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDRagazzinaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Livello2Code.GDFireKnightObjects1.length;i<l;++i) {
    if ( gdjs.Livello2Code.GDFireKnightObjects1[i].getVariableBoolean(gdjs.Livello2Code.GDFireKnightObjects1[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_1 = true;
        gdjs.Livello2Code.GDFireKnightObjects1[k] = gdjs.Livello2Code.GDFireKnightObjects1[i];
        ++k;
    }
}
gdjs.Livello2Code.GDFireKnightObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15981796);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Livello2Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDRagazzinaObjects1[i].returnVariable(gdjs.Livello2Code.GDRagazzinaObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello2Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Livello2Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( gdjs.Livello2Code.GDRagazzinaObjects1[i].getVariableNumber(gdjs.Livello2Code.GDRagazzinaObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Livello2Code.GDRagazzinaObjects1[k] = gdjs.Livello2Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Livello2Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Livello2", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FireKnight"), gdjs.Livello2Code.GDFireKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello2Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello2Code.GDFireKnightObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDFireKnightObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Livello2Code.GDRagazzinaObjects1.length === 0 ) ? 0 :gdjs.Livello2Code.GDRagazzinaObjects1[0].getPointX("")), (( gdjs.Livello2Code.GDRagazzinaObjects1.length === 0 ) ? 0 :gdjs.Livello2Code.GDRagazzinaObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello2Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Livello2Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( gdjs.Livello2Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Livello2Code.GDRagazzinaObjects1[k] = gdjs.Livello2Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Livello2Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Livello2Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Corsa");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello2Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Livello2Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( !(gdjs.Livello2Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Livello2Code.GDRagazzinaObjects1[k] = gdjs.Livello2Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.Livello2Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Livello2Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.Livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Fermo");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello2Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Ragazzina");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello2Code.GDRagazzinaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Torcia"), gdjs.Livello2Code.GDTorciaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDRagazzinaObjects1Objects, gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDTorciaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() <= 0);
}
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Corona"), gdjs.Livello2Code.GDCoronaObjects1);
{for(var i = 0, len = gdjs.Livello2Code.GDCoronaObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDCoronaObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Corona"), gdjs.Livello2Code.GDCoronaObjects1);
{for(var i = 0, len = gdjs.Livello2Code.GDCoronaObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDCoronaObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello2Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello2Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello2Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Up");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello2Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.Livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.Livello2Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Corona"), gdjs.Livello2Code.GDCoronaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.Livello2Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDRagazzinaObjects1Objects, gdjs.Livello2Code.mapOfGDgdjs_9546Livello2Code_9546GDCoronaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Livello2Code.GDCoronaObjects1.length;i<l;++i) {
    if ( gdjs.Livello2Code.GDCoronaObjects1[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.Livello2Code.GDCoronaObjects1[k] = gdjs.Livello2Code.GDCoronaObjects1[i];
        ++k;
    }
}
gdjs.Livello2Code.GDCoronaObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dialogo finale", false);
}}

}


};

gdjs.Livello2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Livello2Code.GDgiocatoreObjects1.length = 0;
gdjs.Livello2Code.GDgiocatoreObjects2.length = 0;
gdjs.Livello2Code.GDgiocatoreObjects3.length = 0;
gdjs.Livello2Code.GDmoneta_9595giamba_9595giambaObjects1.length = 0;
gdjs.Livello2Code.GDmoneta_9595giamba_9595giambaObjects2.length = 0;
gdjs.Livello2Code.GDmoneta_9595giamba_9595giambaObjects3.length = 0;
gdjs.Livello2Code.GDNewSprite3Objects1.length = 0;
gdjs.Livello2Code.GDNewSprite3Objects2.length = 0;
gdjs.Livello2Code.GDNewSprite3Objects3.length = 0;
gdjs.Livello2Code.GDCoronaObjects1.length = 0;
gdjs.Livello2Code.GDCoronaObjects2.length = 0;
gdjs.Livello2Code.GDCoronaObjects3.length = 0;
gdjs.Livello2Code.GDElmoObjects1.length = 0;
gdjs.Livello2Code.GDElmoObjects2.length = 0;
gdjs.Livello2Code.GDElmoObjects3.length = 0;
gdjs.Livello2Code.GDspada_95952Objects1.length = 0;
gdjs.Livello2Code.GDspada_95952Objects2.length = 0;
gdjs.Livello2Code.GDspada_95952Objects3.length = 0;
gdjs.Livello2Code.GDSpada_9595nemicoObjects1.length = 0;
gdjs.Livello2Code.GDSpada_9595nemicoObjects2.length = 0;
gdjs.Livello2Code.GDSpada_9595nemicoObjects3.length = 0;
gdjs.Livello2Code.GDDialogo1Objects1.length = 0;
gdjs.Livello2Code.GDDialogo1Objects2.length = 0;
gdjs.Livello2Code.GDDialogo1Objects3.length = 0;
gdjs.Livello2Code.GDTopDownTerrain128x128Objects1.length = 0;
gdjs.Livello2Code.GDTopDownTerrain128x128Objects2.length = 0;
gdjs.Livello2Code.GDTopDownTerrain128x128Objects3.length = 0;
gdjs.Livello2Code.GDTalkingEmote2MidObjects1.length = 0;
gdjs.Livello2Code.GDTalkingEmote2MidObjects2.length = 0;
gdjs.Livello2Code.GDTalkingEmote2MidObjects3.length = 0;
gdjs.Livello2Code.GDNewSprite9Objects1.length = 0;
gdjs.Livello2Code.GDNewSprite9Objects2.length = 0;
gdjs.Livello2Code.GDNewSprite9Objects3.length = 0;
gdjs.Livello2Code.GDNewTextObjects1.length = 0;
gdjs.Livello2Code.GDNewTextObjects2.length = 0;
gdjs.Livello2Code.GDNewTextObjects3.length = 0;
gdjs.Livello2Code.GDNewSprite12Objects1.length = 0;
gdjs.Livello2Code.GDNewSprite12Objects2.length = 0;
gdjs.Livello2Code.GDNewSprite12Objects3.length = 0;
gdjs.Livello2Code.GDFireKnightObjects1.length = 0;
gdjs.Livello2Code.GDFireKnightObjects2.length = 0;
gdjs.Livello2Code.GDFireKnightObjects3.length = 0;
gdjs.Livello2Code.GDKingObjects1.length = 0;
gdjs.Livello2Code.GDKingObjects2.length = 0;
gdjs.Livello2Code.GDKingObjects3.length = 0;
gdjs.Livello2Code.GDMausoleoObjects1.length = 0;
gdjs.Livello2Code.GDMausoleoObjects2.length = 0;
gdjs.Livello2Code.GDMausoleoObjects3.length = 0;
gdjs.Livello2Code.GDBackGroundObjects1.length = 0;
gdjs.Livello2Code.GDBackGroundObjects2.length = 0;
gdjs.Livello2Code.GDBackGroundObjects3.length = 0;
gdjs.Livello2Code.GDTorciaObjects1.length = 0;
gdjs.Livello2Code.GDTorciaObjects2.length = 0;
gdjs.Livello2Code.GDTorciaObjects3.length = 0;
gdjs.Livello2Code.GDNewSpriteObjects1.length = 0;
gdjs.Livello2Code.GDNewSpriteObjects2.length = 0;
gdjs.Livello2Code.GDNewSpriteObjects3.length = 0;
gdjs.Livello2Code.GDRagazzinaObjects1.length = 0;
gdjs.Livello2Code.GDRagazzinaObjects2.length = 0;
gdjs.Livello2Code.GDRagazzinaObjects3.length = 0;

gdjs.Livello2Code.eventsList4(runtimeScene);
gdjs.Livello2Code.GDgiocatoreObjects1.length = 0;
gdjs.Livello2Code.GDgiocatoreObjects2.length = 0;
gdjs.Livello2Code.GDgiocatoreObjects3.length = 0;
gdjs.Livello2Code.GDmoneta_9595giamba_9595giambaObjects1.length = 0;
gdjs.Livello2Code.GDmoneta_9595giamba_9595giambaObjects2.length = 0;
gdjs.Livello2Code.GDmoneta_9595giamba_9595giambaObjects3.length = 0;
gdjs.Livello2Code.GDNewSprite3Objects1.length = 0;
gdjs.Livello2Code.GDNewSprite3Objects2.length = 0;
gdjs.Livello2Code.GDNewSprite3Objects3.length = 0;
gdjs.Livello2Code.GDCoronaObjects1.length = 0;
gdjs.Livello2Code.GDCoronaObjects2.length = 0;
gdjs.Livello2Code.GDCoronaObjects3.length = 0;
gdjs.Livello2Code.GDElmoObjects1.length = 0;
gdjs.Livello2Code.GDElmoObjects2.length = 0;
gdjs.Livello2Code.GDElmoObjects3.length = 0;
gdjs.Livello2Code.GDspada_95952Objects1.length = 0;
gdjs.Livello2Code.GDspada_95952Objects2.length = 0;
gdjs.Livello2Code.GDspada_95952Objects3.length = 0;
gdjs.Livello2Code.GDSpada_9595nemicoObjects1.length = 0;
gdjs.Livello2Code.GDSpada_9595nemicoObjects2.length = 0;
gdjs.Livello2Code.GDSpada_9595nemicoObjects3.length = 0;
gdjs.Livello2Code.GDDialogo1Objects1.length = 0;
gdjs.Livello2Code.GDDialogo1Objects2.length = 0;
gdjs.Livello2Code.GDDialogo1Objects3.length = 0;
gdjs.Livello2Code.GDTopDownTerrain128x128Objects1.length = 0;
gdjs.Livello2Code.GDTopDownTerrain128x128Objects2.length = 0;
gdjs.Livello2Code.GDTopDownTerrain128x128Objects3.length = 0;
gdjs.Livello2Code.GDTalkingEmote2MidObjects1.length = 0;
gdjs.Livello2Code.GDTalkingEmote2MidObjects2.length = 0;
gdjs.Livello2Code.GDTalkingEmote2MidObjects3.length = 0;
gdjs.Livello2Code.GDNewSprite9Objects1.length = 0;
gdjs.Livello2Code.GDNewSprite9Objects2.length = 0;
gdjs.Livello2Code.GDNewSprite9Objects3.length = 0;
gdjs.Livello2Code.GDNewTextObjects1.length = 0;
gdjs.Livello2Code.GDNewTextObjects2.length = 0;
gdjs.Livello2Code.GDNewTextObjects3.length = 0;
gdjs.Livello2Code.GDNewSprite12Objects1.length = 0;
gdjs.Livello2Code.GDNewSprite12Objects2.length = 0;
gdjs.Livello2Code.GDNewSprite12Objects3.length = 0;
gdjs.Livello2Code.GDFireKnightObjects1.length = 0;
gdjs.Livello2Code.GDFireKnightObjects2.length = 0;
gdjs.Livello2Code.GDFireKnightObjects3.length = 0;
gdjs.Livello2Code.GDKingObjects1.length = 0;
gdjs.Livello2Code.GDKingObjects2.length = 0;
gdjs.Livello2Code.GDKingObjects3.length = 0;
gdjs.Livello2Code.GDMausoleoObjects1.length = 0;
gdjs.Livello2Code.GDMausoleoObjects2.length = 0;
gdjs.Livello2Code.GDMausoleoObjects3.length = 0;
gdjs.Livello2Code.GDBackGroundObjects1.length = 0;
gdjs.Livello2Code.GDBackGroundObjects2.length = 0;
gdjs.Livello2Code.GDBackGroundObjects3.length = 0;
gdjs.Livello2Code.GDTorciaObjects1.length = 0;
gdjs.Livello2Code.GDTorciaObjects2.length = 0;
gdjs.Livello2Code.GDTorciaObjects3.length = 0;
gdjs.Livello2Code.GDNewSpriteObjects1.length = 0;
gdjs.Livello2Code.GDNewSpriteObjects2.length = 0;
gdjs.Livello2Code.GDNewSpriteObjects3.length = 0;
gdjs.Livello2Code.GDRagazzinaObjects1.length = 0;
gdjs.Livello2Code.GDRagazzinaObjects2.length = 0;
gdjs.Livello2Code.GDRagazzinaObjects3.length = 0;


return;

}

gdjs['Livello2Code'] = gdjs.Livello2Code;
