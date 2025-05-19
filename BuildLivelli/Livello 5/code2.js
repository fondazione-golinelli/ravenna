gdjs.GAME_32OVERCode = {};
gdjs.GAME_32OVERCode.localVariables = [];
gdjs.GAME_32OVERCode.GDGAME_9595OVERObjects1= [];
gdjs.GAME_32OVERCode.GDGAME_9595OVERObjects2= [];
gdjs.GAME_32OVERCode.GDbackgroundObjects1= [];
gdjs.GAME_32OVERCode.GDbackgroundObjects2= [];
gdjs.GAME_32OVERCode.GDNewTileMapObjects1= [];
gdjs.GAME_32OVERCode.GDNewTileMapObjects2= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter10Objects1= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter10Objects2= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter1Objects1= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter1Objects2= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter2Objects1= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter2Objects2= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter12Objects1= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter12Objects2= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter11Objects1= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter11Objects2= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter3Objects1= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter3Objects2= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter5Objects1= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter5Objects2= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter6Objects1= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter6Objects2= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter4Objects1= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter4Objects2= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter7Objects1= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter7Objects2= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter8Objects1= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter8Objects2= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter9Objects1= [];
gdjs.GAME_32OVERCode.GDFemaleCharacter9Objects2= [];
gdjs.GAME_32OVERCode.GDMaleCharacter11Objects1= [];
gdjs.GAME_32OVERCode.GDMaleCharacter11Objects2= [];
gdjs.GAME_32OVERCode.GDMaleCharacter10Objects1= [];
gdjs.GAME_32OVERCode.GDMaleCharacter10Objects2= [];
gdjs.GAME_32OVERCode.GDMaleCharacter12Objects1= [];
gdjs.GAME_32OVERCode.GDMaleCharacter12Objects2= [];
gdjs.GAME_32OVERCode.GDMaleCharacter1Objects1= [];
gdjs.GAME_32OVERCode.GDMaleCharacter1Objects2= [];
gdjs.GAME_32OVERCode.GDMaleCharacter3Objects1= [];
gdjs.GAME_32OVERCode.GDMaleCharacter3Objects2= [];
gdjs.GAME_32OVERCode.GDMaleCharacter2Objects1= [];
gdjs.GAME_32OVERCode.GDMaleCharacter2Objects2= [];
gdjs.GAME_32OVERCode.GDMaleCharacter5Objects1= [];
gdjs.GAME_32OVERCode.GDMaleCharacter5Objects2= [];
gdjs.GAME_32OVERCode.GDMaleCharacter9Objects1= [];
gdjs.GAME_32OVERCode.GDMaleCharacter9Objects2= [];
gdjs.GAME_32OVERCode.GDMaleCharacter4Objects1= [];
gdjs.GAME_32OVERCode.GDMaleCharacter4Objects2= [];
gdjs.GAME_32OVERCode.GDMaleCharacter7Objects1= [];
gdjs.GAME_32OVERCode.GDMaleCharacter7Objects2= [];
gdjs.GAME_32OVERCode.GDMaleCharacter6Objects1= [];
gdjs.GAME_32OVERCode.GDMaleCharacter6Objects2= [];
gdjs.GAME_32OVERCode.GDMaleCharacter8Objects1= [];
gdjs.GAME_32OVERCode.GDMaleCharacter8Objects2= [];
gdjs.GAME_32OVERCode.GDStartButtonObjects1= [];
gdjs.GAME_32OVERCode.GDStartButtonObjects2= [];
gdjs.GAME_32OVERCode.GDSconfittaObjects1= [];
gdjs.GAME_32OVERCode.GDSconfittaObjects2= [];
gdjs.GAME_32OVERCode.GDNewSprite7Objects1= [];
gdjs.GAME_32OVERCode.GDNewSprite7Objects2= [];
gdjs.GAME_32OVERCode.GDNewSprite10Objects1= [];
gdjs.GAME_32OVERCode.GDNewSprite10Objects2= [];
gdjs.GAME_32OVERCode.GDRagazzinaObjects1= [];
gdjs.GAME_32OVERCode.GDRagazzinaObjects2= [];


gdjs.GAME_32OVERCode.asyncCallback15741780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scena senza titolo", false);
}gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(7), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback15741780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "dark-souls-you-died-sound-effect_hm5sYFG.mp3", false, 100, 1);
}
{ //Subevents
gdjs.GAME_32OVERCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.GAME_32OVERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32OVERCode.GDGAME_9595OVERObjects1.length = 0;
gdjs.GAME_32OVERCode.GDGAME_9595OVERObjects2.length = 0;
gdjs.GAME_32OVERCode.GDbackgroundObjects1.length = 0;
gdjs.GAME_32OVERCode.GDbackgroundObjects2.length = 0;
gdjs.GAME_32OVERCode.GDNewTileMapObjects1.length = 0;
gdjs.GAME_32OVERCode.GDNewTileMapObjects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter10Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter10Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter1Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter1Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter2Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter2Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter12Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter12Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter11Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter11Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter3Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter3Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter5Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter5Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter6Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter6Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter4Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter4Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter7Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter7Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter8Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter8Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter9Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter9Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter11Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter11Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter10Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter10Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter12Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter12Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter1Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter1Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter3Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter3Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter2Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter2Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter5Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter5Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter9Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter9Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter4Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter4Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter7Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter7Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter6Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter6Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter8Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter8Objects2.length = 0;
gdjs.GAME_32OVERCode.GDStartButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDStartButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDSconfittaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDSconfittaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDNewSprite7Objects1.length = 0;
gdjs.GAME_32OVERCode.GDNewSprite7Objects2.length = 0;
gdjs.GAME_32OVERCode.GDNewSprite10Objects1.length = 0;
gdjs.GAME_32OVERCode.GDNewSprite10Objects2.length = 0;
gdjs.GAME_32OVERCode.GDRagazzinaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDRagazzinaObjects2.length = 0;

gdjs.GAME_32OVERCode.eventsList1(runtimeScene);
gdjs.GAME_32OVERCode.GDGAME_9595OVERObjects1.length = 0;
gdjs.GAME_32OVERCode.GDGAME_9595OVERObjects2.length = 0;
gdjs.GAME_32OVERCode.GDbackgroundObjects1.length = 0;
gdjs.GAME_32OVERCode.GDbackgroundObjects2.length = 0;
gdjs.GAME_32OVERCode.GDNewTileMapObjects1.length = 0;
gdjs.GAME_32OVERCode.GDNewTileMapObjects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter10Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter10Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter1Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter1Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter2Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter2Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter12Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter12Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter11Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter11Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter3Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter3Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter5Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter5Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter6Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter6Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter4Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter4Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter7Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter7Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter8Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter8Objects2.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter9Objects1.length = 0;
gdjs.GAME_32OVERCode.GDFemaleCharacter9Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter11Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter11Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter10Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter10Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter12Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter12Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter1Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter1Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter3Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter3Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter2Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter2Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter5Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter5Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter9Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter9Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter4Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter4Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter7Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter7Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter6Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter6Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter8Objects1.length = 0;
gdjs.GAME_32OVERCode.GDMaleCharacter8Objects2.length = 0;
gdjs.GAME_32OVERCode.GDStartButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDStartButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDSconfittaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDSconfittaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDNewSprite7Objects1.length = 0;
gdjs.GAME_32OVERCode.GDNewSprite7Objects2.length = 0;
gdjs.GAME_32OVERCode.GDNewSprite10Objects1.length = 0;
gdjs.GAME_32OVERCode.GDNewSprite10Objects2.length = 0;
gdjs.GAME_32OVERCode.GDRagazzinaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDRagazzinaObjects2.length = 0;


return;

}

gdjs['GAME_32OVERCode'] = gdjs.GAME_32OVERCode;
