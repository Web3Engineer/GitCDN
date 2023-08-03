//Rename pushed file name by Using an incremented integer scheme based off date.time(); to sync squarespace CDN tags for every hour/10 min/etc

const shell = require('shelljs');
const hi = "I Love Josephine";
function runTerminal (_shellScript){ shell.exec(_shellScript); }

const fileName = "Git_Index2";
const extension = "js";
const comment = "Main-Push2";

const gitPush =(_fileName, _extension, _comment)=>{runTerminal(`git add ${_fileName}.${_extension} && git commit -m "${_comment}" && git push origin master`)};

gitPush(fileName, extension, comment);