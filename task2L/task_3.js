var jsonTxt = "{\"key1\":\"value1\",\"key2\":[\"value2\",\"value3\"]}";
var obj = JSON.parse(jsonTxt);
var mass =  obj.key2;
alert(mass);