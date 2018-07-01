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
  
  //Logger.log(desc);
 var lines = desc.split(/\r?\n/);
//  Logger.log(lines);
//  
 for (var line = 0; line < lines.length; line++) {
   kardex.push(lines[line]);
 }
  Logger.log(kardex[1564]);
//  
//  
//  
//  for(var i =0 ;i<kardex.length; i++){
//    Logger.log(kardex[i]);
//  }
  

}
