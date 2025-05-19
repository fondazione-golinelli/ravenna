gdjs.Scena_32InizialeCode = {};
gdjs.Scena_32InizialeCode.localVariables = [];
gdjs.Scena_32InizialeCode.GDDialogoObjects1= [];
gdjs.Scena_32InizialeCode.GDDialogoObjects2= [];
gdjs.Scena_32InizialeCode.GDDialogoObjects3= [];
gdjs.Scena_32InizialeCode.GDDialogoObjects4= [];
gdjs.Scena_32InizialeCode.GDDialogoObjects5= [];
gdjs.Scena_32InizialeCode.GDDialogoObjects6= [];
gdjs.Scena_32InizialeCode.GDDialogoObjects7= [];
gdjs.Scena_32InizialeCode.GDDialogoObjects8= [];
gdjs.Scena_32InizialeCode.GDNewSprite7Objects1= [];
gdjs.Scena_32InizialeCode.GDNewSprite7Objects2= [];
gdjs.Scena_32InizialeCode.GDNewSprite7Objects3= [];
gdjs.Scena_32InizialeCode.GDNewSprite7Objects4= [];
gdjs.Scena_32InizialeCode.GDNewSprite7Objects5= [];
gdjs.Scena_32InizialeCode.GDNewSprite7Objects6= [];
gdjs.Scena_32InizialeCode.GDNewSprite7Objects7= [];
gdjs.Scena_32InizialeCode.GDNewSprite7Objects8= [];
gdjs.Scena_32InizialeCode.GDNewSprite10Objects1= [];
gdjs.Scena_32InizialeCode.GDNewSprite10Objects2= [];
gdjs.Scena_32InizialeCode.GDNewSprite10Objects3= [];
gdjs.Scena_32InizialeCode.GDNewSprite10Objects4= [];
gdjs.Scena_32InizialeCode.GDNewSprite10Objects5= [];
gdjs.Scena_32InizialeCode.GDNewSprite10Objects6= [];
gdjs.Scena_32InizialeCode.GDNewSprite10Objects7= [];
gdjs.Scena_32InizialeCode.GDNewSprite10Objects8= [];
gdjs.Scena_32InizialeCode.GDRagazzinaObjects1= [];
gdjs.Scena_32InizialeCode.GDRagazzinaObjects2= [];
gdjs.Scena_32InizialeCode.GDRagazzinaObjects3= [];
gdjs.Scena_32InizialeCode.GDRagazzinaObjects4= [];
gdjs.Scena_32InizialeCode.GDRagazzinaObjects5= [];
gdjs.Scena_32InizialeCode.GDRagazzinaObjects6= [];
gdjs.Scena_32InizialeCode.GDRagazzinaObjects7= [];
gdjs.Scena_32InizialeCode.GDRagazzinaObjects8= [];


gdjs.Scena_32InizialeCode.asyncCallback14615828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scena senza titolo", false);
}gdjs.Scena_32InizialeCode.localVariables.length = 0;
}
gdjs.Scena_32InizialeCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Scena_32InizialeCode.asyncCallback14615828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scena_32InizialeCode.asyncCallback14614844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Dialogo"), gdjs.Scena_32InizialeCode.GDDialogoObjects7);

{for(var i = 0, len = gdjs.Scena_32InizialeCode.GDDialogoObjects7.length ;i < len;++i) {
    gdjs.Scena_32InizialeCode.GDDialogoObjects7[i].getBehavior("Text").setText("trovali entro 5 minuti oppure arriveranno i ladri che ruberanno tutti i pezzi");
}
}
{ //Subevents
gdjs.Scena_32InizialeCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Scena_32InizialeCode.localVariables.length = 0;
}
gdjs.Scena_32InizialeCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
for (const obj of gdjs.Scena_32InizialeCode.GDDialogoObjects6) asyncObjectsList.addObject("Dialogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Scena_32InizialeCode.asyncCallback14614844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scena_32InizialeCode.asyncCallback14614020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Dialogo"), gdjs.Scena_32InizialeCode.GDDialogoObjects6);

{for(var i = 0, len = gdjs.Scena_32InizialeCode.GDDialogoObjects6.length ;i < len;++i) {
    gdjs.Scena_32InizialeCode.GDDialogoObjects6[i].getBehavior("Text").setText("ci sono 10 pezzi sparsi per la piazza");
}
}
{ //Subevents
gdjs.Scena_32InizialeCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Scena_32InizialeCode.localVariables.length = 0;
}
gdjs.Scena_32InizialeCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
for (const obj of gdjs.Scena_32InizialeCode.GDDialogoObjects5) asyncObjectsList.addObject("Dialogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Scena_32InizialeCode.asyncCallback14614020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scena_32InizialeCode.asyncCallback10730380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Dialogo"), gdjs.Scena_32InizialeCode.GDDialogoObjects5);

{for(var i = 0, len = gdjs.Scena_32InizialeCode.GDDialogoObjects5.length ;i < len;++i) {
    gdjs.Scena_32InizialeCode.GDDialogoObjects5[i].getBehavior("Text").setText("ho distrutto la colonna");
}
}
{ //Subevents
gdjs.Scena_32InizialeCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Scena_32InizialeCode.localVariables.length = 0;
}
gdjs.Scena_32InizialeCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
for (const obj of gdjs.Scena_32InizialeCode.GDDialogoObjects4) asyncObjectsList.addObject("Dialogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Scena_32InizialeCode.asyncCallback10730380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scena_32InizialeCode.asyncCallback14612644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Dialogo"), gdjs.Scena_32InizialeCode.GDDialogoObjects4);

{for(var i = 0, len = gdjs.Scena_32InizialeCode.GDDialogoObjects4.length ;i < len;++i) {
    gdjs.Scena_32InizialeCode.GDDialogoObjects4[i].getBehavior("Text").setText("Ci sono riuscito, ma ho combinato un guaio");
}
}
{ //Subevents
gdjs.Scena_32InizialeCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Scena_32InizialeCode.localVariables.length = 0;
}
gdjs.Scena_32InizialeCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
for (const obj of gdjs.Scena_32InizialeCode.GDDialogoObjects3) asyncObjectsList.addObject("Dialogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.Scena_32InizialeCode.asyncCallback14612644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scena_32InizialeCode.asyncCallback10739452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Dialogo"), gdjs.Scena_32InizialeCode.GDDialogoObjects3);

{for(var i = 0, len = gdjs.Scena_32InizialeCode.GDDialogoObjects3.length ;i < len;++i) {
    gdjs.Scena_32InizialeCode.GDDialogoObjects3[i].getBehavior("Text").setText("Una volta c'ero io su quella colonna, ma da quando è arrivato San Vitale mi hanno fatto scendere");
}
}{for(var i = 0, len = gdjs.Scena_32InizialeCode.GDDialogoObjects3.length ;i < len;++i) {
    gdjs.Scena_32InizialeCode.GDDialogoObjects3[i].getBehavior("Text").setText("Prima che tu arrivassi ho ruggito forte per farlo scappare");
}
}
{ //Subevents
gdjs.Scena_32InizialeCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Scena_32InizialeCode.localVariables.length = 0;
}
gdjs.Scena_32InizialeCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
for (const obj of gdjs.Scena_32InizialeCode.GDDialogoObjects2) asyncObjectsList.addObject("Dialogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Scena_32InizialeCode.asyncCallback10739452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scena_32InizialeCode.asyncCallback10727500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Dialogo"), gdjs.Scena_32InizialeCode.GDDialogoObjects2);

{for(var i = 0, len = gdjs.Scena_32InizialeCode.GDDialogoObjects2.length ;i < len;++i) {
    gdjs.Scena_32InizialeCode.GDDialogoObjects2[i].getBehavior("Text").setText("Mi puoi aiutare a riprendere la mia adorata colonna?");
}
}
{ //Subevents
gdjs.Scena_32InizialeCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Scena_32InizialeCode.localVariables.length = 0;
}
gdjs.Scena_32InizialeCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scena_32InizialeCode.localVariables);
for (const obj of gdjs.Scena_32InizialeCode.GDDialogoObjects1) asyncObjectsList.addObject("Dialogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.Scena_32InizialeCode.asyncCallback10727500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scena_32InizialeCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogo"), gdjs.Scena_32InizialeCode.GDDialogoObjects1);
{for(var i = 0, len = gdjs.Scena_32InizialeCode.GDDialogoObjects1.length ;i < len;++i) {
    gdjs.Scena_32InizialeCode.GDDialogoObjects1[i].getBehavior("Text").setText("Hey!");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "vivaldi-four-seasons-winter-3rd-movement-classical-remix-7880.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Scena_32InizialeCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.Scena_32InizialeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scena_32InizialeCode.GDDialogoObjects1.length = 0;
gdjs.Scena_32InizialeCode.GDDialogoObjects2.length = 0;
gdjs.Scena_32InizialeCode.GDDialogoObjects3.length = 0;
gdjs.Scena_32InizialeCode.GDDialogoObjects4.length = 0;
gdjs.Scena_32InizialeCode.GDDialogoObjects5.length = 0;
gdjs.Scena_32InizialeCode.GDDialogoObjects6.length = 0;
gdjs.Scena_32InizialeCode.GDDialogoObjects7.length = 0;
gdjs.Scena_32InizialeCode.GDDialogoObjects8.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects1.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects2.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects3.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects4.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects5.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects6.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects7.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects8.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects1.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects2.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects3.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects4.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects5.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects6.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects7.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects8.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects1.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects2.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects3.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects4.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects5.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects6.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects7.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects8.length = 0;

gdjs.Scena_32InizialeCode.eventsList7(runtimeScene);
gdjs.Scena_32InizialeCode.GDDialogoObjects1.length = 0;
gdjs.Scena_32InizialeCode.GDDialogoObjects2.length = 0;
gdjs.Scena_32InizialeCode.GDDialogoObjects3.length = 0;
gdjs.Scena_32InizialeCode.GDDialogoObjects4.length = 0;
gdjs.Scena_32InizialeCode.GDDialogoObjects5.length = 0;
gdjs.Scena_32InizialeCode.GDDialogoObjects6.length = 0;
gdjs.Scena_32InizialeCode.GDDialogoObjects7.length = 0;
gdjs.Scena_32InizialeCode.GDDialogoObjects8.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects1.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects2.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects3.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects4.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects5.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects6.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects7.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite7Objects8.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects1.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects2.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects3.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects4.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects5.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects6.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects7.length = 0;
gdjs.Scena_32InizialeCode.GDNewSprite10Objects8.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects1.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects2.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects3.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects4.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects5.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects6.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects7.length = 0;
gdjs.Scena_32InizialeCode.GDRagazzinaObjects8.length = 0;


return;

}

gdjs['Scena_32InizialeCode'] = gdjs.Scena_32InizialeCode;
