var arr = []
while(arr.length < 8){
  var randomnumber=Math.ceil(Math.random()*100)
  var found=false;
  for(var i=0;i<arr.length;i++){
    if(arr[i]==randomnumber){found=true;break}
  }
  if(!found)arr[arr.length]=randomnumber;
}
