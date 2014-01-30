<HEAD>
<SCRIPT LANGUAGE="JavaScript1.2">

<!--

function NNKeyCap(thisOne) 
{
    if (thisOne.modifiers & Event.SHIFT_MASK) 
{
    if (thisOne.which == 37) 
      	 {alert('That\'s the % key')};
    if (thisOne.which == 90) 
      	 {alert('That\'s the Z key')};
    if (thisOne.which == 41) 
      	 {alert('That\'s the ) key')};
}

    if (thisOne.which == 61) 
      	 {alert('That\'s the = key')};
    if (thisOne.which == 106) 
      	 {alert('That\'s the j key')};
    if (thisOne.which == 51) 
      	 {alert('That\'s the 3 key')};
    if (thisOne.which == 45) 
      	 {alert('That\'s the - key')};
    if (thisOne.which == 52) 
      	 {alert('That\'s the 4 key')};
}

function IEKeyCap() 
{
if (window.event.shiftKey) 
{
    if (window.event.keyCode == 37) 
      	 {alert('That\'s the % key')};
    if (window.event.keyCode == 90) 
      	 {alert('That\'s the Z key')};
    if (window.event.keyCode == 41) 
      	 {alert('That\'s the ) key')};
}

    if (window.event.keyCode == 61) 
      	 {alert('That\'s the = key')};
    if (window.event.keyCode == 106) 
      	 {alert('That\'s the j key')};
    if (window.event.keyCode == 51) 
      	 {alert('That\'s the 3 key')};
    if (window.event.keyCode == 4) 
      	 {alert('That\'s the 3 key')};
    if (window.event.keyCode == 189) 
      	 {alert('That\'s the 3 key')};
}

if (navigator.appName == 'Netscape') {
window.captureEvents(Event.KEYPRESS);
window.onKeyPress = NNKeyCap;
}

//-->

</SCRIPT>

</HEAD>

<BODY onKeyPress="IEKeyCap()">