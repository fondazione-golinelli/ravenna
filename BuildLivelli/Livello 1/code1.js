gdjs.livello2Code = {};
gdjs.livello2Code.localVariables = [];
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects1= [];
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects2= [];
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects3= [];
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects4= [];
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects5= [];
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects6= [];
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects7= [];
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects8= [];
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects1= [];
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects2= [];
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects3= [];
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects4= [];
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects5= [];
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects6= [];
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects7= [];
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects8= [];
gdjs.livello2Code.GDRagazzinaObjects1= [];
gdjs.livello2Code.GDRagazzinaObjects2= [];
gdjs.livello2Code.GDRagazzinaObjects3= [];
gdjs.livello2Code.GDRagazzinaObjects4= [];
gdjs.livello2Code.GDRagazzinaObjects5= [];
gdjs.livello2Code.GDRagazzinaObjects6= [];
gdjs.livello2Code.GDRagazzinaObjects7= [];
gdjs.livello2Code.GDRagazzinaObjects8= [];
gdjs.livello2Code.GDNewSprite10Objects1= [];
gdjs.livello2Code.GDNewSprite10Objects2= [];
gdjs.livello2Code.GDNewSprite10Objects3= [];
gdjs.livello2Code.GDNewSprite10Objects4= [];
gdjs.livello2Code.GDNewSprite10Objects5= [];
gdjs.livello2Code.GDNewSprite10Objects6= [];
gdjs.livello2Code.GDNewSprite10Objects7= [];
gdjs.livello2Code.GDNewSprite10Objects8= [];
gdjs.livello2Code.GDBloccoObjects1= [];
gdjs.livello2Code.GDBloccoObjects2= [];
gdjs.livello2Code.GDBloccoObjects3= [];
gdjs.livello2Code.GDBloccoObjects4= [];
gdjs.livello2Code.GDBloccoObjects5= [];
gdjs.livello2Code.GDBloccoObjects6= [];
gdjs.livello2Code.GDBloccoObjects7= [];
gdjs.livello2Code.GDBloccoObjects8= [];
gdjs.livello2Code.GDNewSprite6Objects1= [];
gdjs.livello2Code.GDNewSprite6Objects2= [];
gdjs.livello2Code.GDNewSprite6Objects3= [];
gdjs.livello2Code.GDNewSprite6Objects4= [];
gdjs.livello2Code.GDNewSprite6Objects5= [];
gdjs.livello2Code.GDNewSprite6Objects6= [];
gdjs.livello2Code.GDNewSprite6Objects7= [];
gdjs.livello2Code.GDNewSprite6Objects8= [];
gdjs.livello2Code.GDNewSprite15Objects1= [];
gdjs.livello2Code.GDNewSprite15Objects2= [];
gdjs.livello2Code.GDNewSprite15Objects3= [];
gdjs.livello2Code.GDNewSprite15Objects4= [];
gdjs.livello2Code.GDNewSprite15Objects5= [];
gdjs.livello2Code.GDNewSprite15Objects6= [];
gdjs.livello2Code.GDNewSprite15Objects7= [];
gdjs.livello2Code.GDNewSprite15Objects8= [];
gdjs.livello2Code.GDNewSprite13Objects1= [];
gdjs.livello2Code.GDNewSprite13Objects2= [];
gdjs.livello2Code.GDNewSprite13Objects3= [];
gdjs.livello2Code.GDNewSprite13Objects4= [];
gdjs.livello2Code.GDNewSprite13Objects5= [];
gdjs.livello2Code.GDNewSprite13Objects6= [];
gdjs.livello2Code.GDNewSprite13Objects7= [];
gdjs.livello2Code.GDNewSprite13Objects8= [];
gdjs.livello2Code.GDEntrataObjects1= [];
gdjs.livello2Code.GDEntrataObjects2= [];
gdjs.livello2Code.GDEntrataObjects3= [];
gdjs.livello2Code.GDEntrataObjects4= [];
gdjs.livello2Code.GDEntrataObjects5= [];
gdjs.livello2Code.GDEntrataObjects6= [];
gdjs.livello2Code.GDEntrataObjects7= [];
gdjs.livello2Code.GDEntrataObjects8= [];


gdjs.livello2Code.mapOfGDgdjs_9546livello2Code_9546GDBloccoObjects1Objects = Hashtable.newFrom({"Blocco": gdjs.livello2Code.GDBloccoObjects1});
gdjs.livello2Code.asyncCallback9692316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.livello2Code.localVariables);
gdjs.livello2Code.localVariables.length = 0;
}
gdjs.livello2Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.livello2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.livello2Code.asyncCallback9692316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.livello2Code.asyncCallback9692220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.livello2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Ragazzina"), gdjs.livello2Code.GDRagazzinaObjects7);

{for(var i = 0, len = gdjs.livello2Code.GDRagazzinaObjects7.length ;i < len;++i) {
    gdjs.livello2Code.GDRagazzinaObjects7[i].activateBehavior("TopDownMovement", true);
}
}
{ //Subevents
gdjs.livello2Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.livello2Code.localVariables.length = 0;
}
gdjs.livello2Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.livello2Code.localVariables);
/* Don't save Ragazzina as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.livello2Code.asyncCallback9692220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.livello2Code.asyncCallback9692660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.livello2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("dialogo_del_protagonista"), gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects6);

gdjs.copyArray(asyncObjectsList.getObjects("dialogo_del_vescovo_"), gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects6);

{for(var i = 0, len = gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects6.length ;i < len;++i) {
    gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects6[i].getBehavior("Text").setText("");
}
}{for(var i = 0, len = gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects6.length ;i < len;++i) {
    gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects6[i].getBehavior("Text").setText("perfetto, per cominciare dirigiti verso la porta sulla destra dell'altare");
}
}
{ //Subevents
gdjs.livello2Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.livello2Code.localVariables.length = 0;
}
gdjs.livello2Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.livello2Code.localVariables);
/* Don't save Ragazzina as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects5) asyncObjectsList.addObject("dialogo_del_protagonista", obj);
for (const obj of gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects5) asyncObjectsList.addObject("dialogo_del_vescovo_", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.livello2Code.asyncCallback9692660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.livello2Code.asyncCallback9691532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.livello2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("dialogo_del_protagonista"), gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects5);

gdjs.copyArray(asyncObjectsList.getObjects("dialogo_del_vescovo_"), gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects5);

{for(var i = 0, len = gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects5.length ;i < len;++i) {
    gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects5[i].getBehavior("Text").setText("");
}
}{for(var i = 0, len = gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects5.length ;i < len;++i) {
    gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects5[i].getBehavior("Text").setText("accetto");
}
}
{ //Subevents
gdjs.livello2Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.livello2Code.localVariables.length = 0;
}
gdjs.livello2Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.livello2Code.localVariables);
/* Don't save Ragazzina as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects4) asyncObjectsList.addObject("dialogo_del_protagonista", obj);
for (const obj of gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects4) asyncObjectsList.addObject("dialogo_del_vescovo_", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.livello2Code.asyncCallback9691532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.livello2Code.asyncCallback14726724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.livello2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("dialogo_del_protagonista"), gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("dialogo_del_vescovo_"), gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects4);

{for(var i = 0, len = gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects4.length ;i < len;++i) {
    gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects4[i].getBehavior("Text").setText("facciamo cosi', se riuscirai a trovare le mie 5 reliquie ti faro' uscire");
}
}{for(var i = 0, len = gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects4.length ;i < len;++i) {
    gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects4[i].getBehavior("Text").setText("");
}
}
{ //Subevents
gdjs.livello2Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.livello2Code.localVariables.length = 0;
}
gdjs.livello2Code.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.livello2Code.localVariables);
/* Don't save Ragazzina as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects3) asyncObjectsList.addObject("dialogo_del_protagonista", obj);
for (const obj of gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects3) asyncObjectsList.addObject("dialogo_del_vescovo_", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.livello2Code.asyncCallback14726724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.livello2Code.asyncCallback9689132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.livello2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("dialogo_del_protagonista"), gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("dialogo_del_vescovo_"), gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects3);

{for(var i = 0, len = gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects3.length ;i < len;++i) {
    gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects3[i].getBehavior("Text").setText("");
}
}{for(var i = 0, len = gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects3.length ;i < len;++i) {
    gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects3[i].getBehavior("Text").setText("le sfide non mi spaventano; devo per forza raccogliere tutti gli oggetti per poter completare il mio compito");
}
}
{ //Subevents
gdjs.livello2Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.livello2Code.localVariables.length = 0;
}
gdjs.livello2Code.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.livello2Code.localVariables);
/* Don't save Ragazzina as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects2) asyncObjectsList.addObject("dialogo_del_protagonista", obj);
for (const obj of gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects2) asyncObjectsList.addObject("dialogo_del_vescovo_", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.livello2Code.asyncCallback9689132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.livello2Code.asyncCallback14731508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.livello2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("dialogo_del_protagonista"), gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects2);

gdjs.copyArray(runtimeScene.getObjects("dialogo_del_vescovo_"), gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects2);
{for(var i = 0, len = gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects2.length ;i < len;++i) {
    gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects2[i].getBehavior("Text").setText("");
}
}{for(var i = 0, len = gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects2.length ;i < len;++i) {
    gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects2[i].getBehavior("Text").setText("ti consiglio di lasciar perdere, nessuno e' mai uscito vivo e cosi' rimarra'");
}
}
{ //Subevents
gdjs.livello2Code.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.livello2Code.localVariables.length = 0;
}
gdjs.livello2Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.livello2Code.localVariables);
for (const obj of gdjs.livello2Code.GDRagazzinaObjects1) asyncObjectsList.addObject("Ragazzina", obj);
for (const obj of gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects1) asyncObjectsList.addObject("dialogo_del_protagonista", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.livello2Code.asyncCallback14731508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.livello2Code.mapOfGDgdjs_9546livello2Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.livello2Code.GDRagazzinaObjects1});
gdjs.livello2Code.mapOfGDgdjs_9546livello2Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.livello2Code.GDNewSprite6Objects1});
gdjs.livello2Code.mapOfGDgdjs_9546livello2Code_9546GDRagazzinaObjects1Objects = Hashtable.newFrom({"Ragazzina": gdjs.livello2Code.GDRagazzinaObjects1});
gdjs.livello2Code.mapOfGDgdjs_9546livello2Code_9546GDEntrataObjects1Objects = Hashtable.newFrom({"Entrata": gdjs.livello2Code.GDEntrataObjects1});
gdjs.livello2Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Blocco"), gdjs.livello2Code.GDBloccoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.livello2Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.livello2Code.GDRagazzinaObjects1[i].separateFromObjectsList(gdjs.livello2Code.mapOfGDgdjs_9546livello2Code_9546GDBloccoObjects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Blocco"), gdjs.livello2Code.GDBloccoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Entrata"), gdjs.livello2Code.GDEntrataObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.livello2Code.GDRagazzinaObjects1);
gdjs.copyArray(runtimeScene.getObjects("dialogo_del_protagonista"), gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects1);
{for(var i = 0, len = gdjs.livello2Code.GDBloccoObjects1.length ;i < len;++i) {
    gdjs.livello2Code.GDBloccoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.livello2Code.GDEntrataObjects1.length ;i < len;++i) {
    gdjs.livello2Code.GDEntrataObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.livello2Code.GDRagazzinaObjects1[i].activateBehavior("TopDownMovement", false);
}
}{for(var i = 0, len = gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects1.length ;i < len;++i) {
    gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects1[i].getBehavior("Text").setText("Salve, avrei bisogno di entrare nella basilica, saprebbe aiutarmi?");
}
}
{ //Subevents
gdjs.livello2Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.livello2Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.livello2Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.livello2Code.mapOfGDgdjs_9546livello2Code_9546GDRagazzinaObjects1Objects, gdjs.livello2Code.mapOfGDgdjs_9546livello2Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Entrata"), gdjs.livello2Code.GDEntrataObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.livello2Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.livello2Code.mapOfGDgdjs_9546livello2Code_9546GDRagazzinaObjects1Objects, gdjs.livello2Code.mapOfGDgdjs_9546livello2Code_9546GDEntrataObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Livello3", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.livello2Code.GDRagazzinaObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.livello2Code.GDRagazzinaObjects1.length !== 0 ? gdjs.livello2Code.GDRagazzinaObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.livello2Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.livello2Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( gdjs.livello2Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.livello2Code.GDRagazzinaObjects1[k] = gdjs.livello2Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.livello2Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.livello2Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.livello2Code.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Corsa");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.livello2Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.livello2Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.livello2Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.livello2Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.livello2Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.livello2Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Up");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.livello2Code.GDRagazzinaObjects1);
{for(var i = 0, len = gdjs.livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.livello2Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").simulateControl("Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ragazzina"), gdjs.livello2Code.GDRagazzinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.livello2Code.GDRagazzinaObjects1.length;i<l;++i) {
    if ( !(gdjs.livello2Code.GDRagazzinaObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.livello2Code.GDRagazzinaObjects1[k] = gdjs.livello2Code.GDRagazzinaObjects1[i];
        ++k;
    }
}
gdjs.livello2Code.GDRagazzinaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.livello2Code.GDRagazzinaObjects1 */
{for(var i = 0, len = gdjs.livello2Code.GDRagazzinaObjects1.length ;i < len;++i) {
    gdjs.livello2Code.GDRagazzinaObjects1[i].getBehavior("Animation").setAnimationName("Fermo");
}
}}

}


};

gdjs.livello2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects1.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects2.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects3.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects4.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects5.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects6.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects7.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects8.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects1.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects2.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects3.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects4.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects5.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects6.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects7.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects8.length = 0;
gdjs.livello2Code.GDRagazzinaObjects1.length = 0;
gdjs.livello2Code.GDRagazzinaObjects2.length = 0;
gdjs.livello2Code.GDRagazzinaObjects3.length = 0;
gdjs.livello2Code.GDRagazzinaObjects4.length = 0;
gdjs.livello2Code.GDRagazzinaObjects5.length = 0;
gdjs.livello2Code.GDRagazzinaObjects6.length = 0;
gdjs.livello2Code.GDRagazzinaObjects7.length = 0;
gdjs.livello2Code.GDRagazzinaObjects8.length = 0;
gdjs.livello2Code.GDNewSprite10Objects1.length = 0;
gdjs.livello2Code.GDNewSprite10Objects2.length = 0;
gdjs.livello2Code.GDNewSprite10Objects3.length = 0;
gdjs.livello2Code.GDNewSprite10Objects4.length = 0;
gdjs.livello2Code.GDNewSprite10Objects5.length = 0;
gdjs.livello2Code.GDNewSprite10Objects6.length = 0;
gdjs.livello2Code.GDNewSprite10Objects7.length = 0;
gdjs.livello2Code.GDNewSprite10Objects8.length = 0;
gdjs.livello2Code.GDBloccoObjects1.length = 0;
gdjs.livello2Code.GDBloccoObjects2.length = 0;
gdjs.livello2Code.GDBloccoObjects3.length = 0;
gdjs.livello2Code.GDBloccoObjects4.length = 0;
gdjs.livello2Code.GDBloccoObjects5.length = 0;
gdjs.livello2Code.GDBloccoObjects6.length = 0;
gdjs.livello2Code.GDBloccoObjects7.length = 0;
gdjs.livello2Code.GDBloccoObjects8.length = 0;
gdjs.livello2Code.GDNewSprite6Objects1.length = 0;
gdjs.livello2Code.GDNewSprite6Objects2.length = 0;
gdjs.livello2Code.GDNewSprite6Objects3.length = 0;
gdjs.livello2Code.GDNewSprite6Objects4.length = 0;
gdjs.livello2Code.GDNewSprite6Objects5.length = 0;
gdjs.livello2Code.GDNewSprite6Objects6.length = 0;
gdjs.livello2Code.GDNewSprite6Objects7.length = 0;
gdjs.livello2Code.GDNewSprite6Objects8.length = 0;
gdjs.livello2Code.GDNewSprite15Objects1.length = 0;
gdjs.livello2Code.GDNewSprite15Objects2.length = 0;
gdjs.livello2Code.GDNewSprite15Objects3.length = 0;
gdjs.livello2Code.GDNewSprite15Objects4.length = 0;
gdjs.livello2Code.GDNewSprite15Objects5.length = 0;
gdjs.livello2Code.GDNewSprite15Objects6.length = 0;
gdjs.livello2Code.GDNewSprite15Objects7.length = 0;
gdjs.livello2Code.GDNewSprite15Objects8.length = 0;
gdjs.livello2Code.GDNewSprite13Objects1.length = 0;
gdjs.livello2Code.GDNewSprite13Objects2.length = 0;
gdjs.livello2Code.GDNewSprite13Objects3.length = 0;
gdjs.livello2Code.GDNewSprite13Objects4.length = 0;
gdjs.livello2Code.GDNewSprite13Objects5.length = 0;
gdjs.livello2Code.GDNewSprite13Objects6.length = 0;
gdjs.livello2Code.GDNewSprite13Objects7.length = 0;
gdjs.livello2Code.GDNewSprite13Objects8.length = 0;
gdjs.livello2Code.GDEntrataObjects1.length = 0;
gdjs.livello2Code.GDEntrataObjects2.length = 0;
gdjs.livello2Code.GDEntrataObjects3.length = 0;
gdjs.livello2Code.GDEntrataObjects4.length = 0;
gdjs.livello2Code.GDEntrataObjects5.length = 0;
gdjs.livello2Code.GDEntrataObjects6.length = 0;
gdjs.livello2Code.GDEntrataObjects7.length = 0;
gdjs.livello2Code.GDEntrataObjects8.length = 0;

gdjs.livello2Code.eventsList7(runtimeScene);
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects1.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects2.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects3.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects4.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects5.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects6.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects7.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595vescovo_9595Objects8.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects1.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects2.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects3.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects4.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects5.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects6.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects7.length = 0;
gdjs.livello2Code.GDdialogo_9595del_9595protagonistaObjects8.length = 0;
gdjs.livello2Code.GDRagazzinaObjects1.length = 0;
gdjs.livello2Code.GDRagazzinaObjects2.length = 0;
gdjs.livello2Code.GDRagazzinaObjects3.length = 0;
gdjs.livello2Code.GDRagazzinaObjects4.length = 0;
gdjs.livello2Code.GDRagazzinaObjects5.length = 0;
gdjs.livello2Code.GDRagazzinaObjects6.length = 0;
gdjs.livello2Code.GDRagazzinaObjects7.length = 0;
gdjs.livello2Code.GDRagazzinaObjects8.length = 0;
gdjs.livello2Code.GDNewSprite10Objects1.length = 0;
gdjs.livello2Code.GDNewSprite10Objects2.length = 0;
gdjs.livello2Code.GDNewSprite10Objects3.length = 0;
gdjs.livello2Code.GDNewSprite10Objects4.length = 0;
gdjs.livello2Code.GDNewSprite10Objects5.length = 0;
gdjs.livello2Code.GDNewSprite10Objects6.length = 0;
gdjs.livello2Code.GDNewSprite10Objects7.length = 0;
gdjs.livello2Code.GDNewSprite10Objects8.length = 0;
gdjs.livello2Code.GDBloccoObjects1.length = 0;
gdjs.livello2Code.GDBloccoObjects2.length = 0;
gdjs.livello2Code.GDBloccoObjects3.length = 0;
gdjs.livello2Code.GDBloccoObjects4.length = 0;
gdjs.livello2Code.GDBloccoObjects5.length = 0;
gdjs.livello2Code.GDBloccoObjects6.length = 0;
gdjs.livello2Code.GDBloccoObjects7.length = 0;
gdjs.livello2Code.GDBloccoObjects8.length = 0;
gdjs.livello2Code.GDNewSprite6Objects1.length = 0;
gdjs.livello2Code.GDNewSprite6Objects2.length = 0;
gdjs.livello2Code.GDNewSprite6Objects3.length = 0;
gdjs.livello2Code.GDNewSprite6Objects4.length = 0;
gdjs.livello2Code.GDNewSprite6Objects5.length = 0;
gdjs.livello2Code.GDNewSprite6Objects6.length = 0;
gdjs.livello2Code.GDNewSprite6Objects7.length = 0;
gdjs.livello2Code.GDNewSprite6Objects8.length = 0;
gdjs.livello2Code.GDNewSprite15Objects1.length = 0;
gdjs.livello2Code.GDNewSprite15Objects2.length = 0;
gdjs.livello2Code.GDNewSprite15Objects3.length = 0;
gdjs.livello2Code.GDNewSprite15Objects4.length = 0;
gdjs.livello2Code.GDNewSprite15Objects5.length = 0;
gdjs.livello2Code.GDNewSprite15Objects6.length = 0;
gdjs.livello2Code.GDNewSprite15Objects7.length = 0;
gdjs.livello2Code.GDNewSprite15Objects8.length = 0;
gdjs.livello2Code.GDNewSprite13Objects1.length = 0;
gdjs.livello2Code.GDNewSprite13Objects2.length = 0;
gdjs.livello2Code.GDNewSprite13Objects3.length = 0;
gdjs.livello2Code.GDNewSprite13Objects4.length = 0;
gdjs.livello2Code.GDNewSprite13Objects5.length = 0;
gdjs.livello2Code.GDNewSprite13Objects6.length = 0;
gdjs.livello2Code.GDNewSprite13Objects7.length = 0;
gdjs.livello2Code.GDNewSprite13Objects8.length = 0;
gdjs.livello2Code.GDEntrataObjects1.length = 0;
gdjs.livello2Code.GDEntrataObjects2.length = 0;
gdjs.livello2Code.GDEntrataObjects3.length = 0;
gdjs.livello2Code.GDEntrataObjects4.length = 0;
gdjs.livello2Code.GDEntrataObjects5.length = 0;
gdjs.livello2Code.GDEntrataObjects6.length = 0;
gdjs.livello2Code.GDEntrataObjects7.length = 0;
gdjs.livello2Code.GDEntrataObjects8.length = 0;


return;

}

gdjs['livello2Code'] = gdjs.livello2Code;
