const shell = require('shelljs');
const hi = "I Love Josephine";
function runTerminal (_shellScript){ shell.exec(_shellScript); }

const fileName = "Git_Index";
const extension = "js";
const comment = "Main-Push";

const gitPush =(_fileName, _extension, _comment)=>{runTerminal(`git add ${_fileName}.${_extension} && git commit -m "${_comment}" && git push origin master`)};

gitPush(fileName, extension, comment);