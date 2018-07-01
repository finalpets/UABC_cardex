function parse() {
  
  var data = "Hello";
  Logger.log(data);
  
}
function OpenDriveFile() {

var files = DriveApp.getFiles();
var kardex = [];

while (files.hasNext()) {
  var file = files.next();
    
  Logger.log(file.getName());
  if(file.getName() == "PeterLeyva.html")
    {
      Logger.log("Se guardo el kardex");
      desc = file.getBlob().getDataAsString();
    }
}
var lines = desc.split(/\r?\n/);

for(var line in lines)
{
  kardex.push(line);  
}



for(var i =0 ;i<kardex.length; i++){
  Logger.log(kardex[i]);
}

}
