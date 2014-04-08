<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>jQuery UI Progressbar - Default functionality</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/jquery-1.9.1.js"></script>
    <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <link rel="stylesheet" href="/resources/demos/style.css">
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Tangerine">
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Codystar">
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Maven+Pro">

    <style>
        h1 {
            font-family: 'Codystar', serif;
            font-size: 70px;
            text-align: center;
        }
        h2 {
            font-family: 'Tangerine', serif;
            font-size: 16px;
        }
        body {
            font-family: 'Maven Pro', serif;
            font-size: 16px;
        }
    </style>

</head>


<body>


<img border="0" width=30% src="images/name.png" alt="BryanDer" align="center">
<img border="0" width=20% src="images/mugshot.png" alt="Face" align="center">
<br/>
<br/>
<h1>personal webpage</h1>
<br/>
<br/>
<table class="image">
    <tr><td><img ...></td></tr>
</table>

<!--
<table class="image" align="center" cellpadding="10" border="30">
    <caption align="bottom"></caption>
    <tr>
        <td>
            <figure id="td">
                <img style='height: 70px; display: inline' src='images/logoTD.jpg'/>
                <figcaption align="center">high school</figcaption>
            </figure>
        </td>
        <td>
            <figure id="ur">
                <img style='height: 70px; display: inline' align="center" src='images/logoUR.jpg'/>
            </figure>
        </td>
        <td>
            <figure id="unc">
                <img style='height: 70px; display: inline' src='images/logoUNC.jpg'/>
                <figcaption align="center">graduate</figcaption>
            </figure>
        </td>
        <td>
            <figure id="mit">
                <img style='height: 70px; display: inline' src='images/logoMIT.jpg'/>
                <figcaption align="center">postdoctoral</figcaption>
            </figure>
        </td>
    </tr>
</table> -->

<table class="image" align="center" cellpadding="10" border="30">
    <caption align="bottom"></caption>
    <tr height="100px">
        <td align="center" width="120px">
            <img style='height: 70px; display: inline' src='images/logoTD.jpg'/><br/>
            <figurecaption>high school</figurecaption>
        </td>
        <td align="center" width="120px">
            <img style='height: 70px; display: inline' src='images/logoUR.jpg'/><br/>
            <figurecaption>undergraduate</figurecaption>
        </td>
        <td align="center" width="120px">
            <img style='height: 70px; display: inline' src='images/logoUNC.jpg'/><br/>
            <figurecaption>graduate</figurecaption>
        </td>
        <td align="center" width="120px">
            <img style='height: 70px; display: inline' src='images/logoMIT.jpg'/><br/>
            <figurecaption>postdoctoral</figurecaption>
        </td>
    </tr>
</table>



<!--
<script>
    $(function() {
        $( "#draggable1" ).draggable();
    });
</script>

<script>
    $(function() {
        $( "#draggable" ).draggable();
        $( "#droppable" ).droppable({
            drop: function( event, ui ) {
                $( this )
                        .addClass( "ui-state-highlight" )
                        .find( "p" )
                        .html( "Dropped!" );
            }
        });
    });
</script>
-->

<!--
<p>
<div id="draggable1" class="ui-widget-content">
    <p>Drag me around</p>
</div>
<br clear="all" />
</p>

<p>
<div id="draggable" class="ui-widget-content">
    <p>Drag me to my target</p>
</div>
<br clear="all" />
</p>

<p>
<div id="droppable" class="ui-widget-header">
    <p>Drop here</p>
</div>
<br clear="all" />
</p>
-->





<!--
//////////////////////////////////
//
//   HTML
//
//////////////////////////////////
-->
<br/>

<p>
    <a href="http://jqueryui.com/progressbar/" target="_blank">Progress bar</a> <br/>
<div id="progressbar"></div>
<br/>
</p>

<form name="form_mousekey">
    <input type="text"   name="mousex" />      Mouse X Position    <br/>
    <input type="text"   name="mousey" />      Mouse Y Position    <br/>
    <input type="text"   name="relative_mousex" />  Rel Mouse X Position    <br/>
    <input type="text"   name="relative_mousey" />  Rel Mouse Y Position    <br/>

    <input type="number" name="mousebutton" /> Mouse Button pressed<br/>
    <input type="text"   name="keypress" />    Key Pressed         <br/>

</form>



<a href="/bder.github.io/test.html">Link text</a> <br/>
<a href="/bder.github.io/blog.html">Google my brain</a> <br/>



jsp: <%= new java.util.Date() %> <br/><br/>


<%
    // This is a scriptlet.
    // The "date" variable is available in the embedded expression later on.
    out.println( "Evaluating date now <BR>" ); //to the server log
    java.util.Date date = new java.util.Date();
%>
Hello!  The time is now <%= date %> <br/>

<canvas id="myCanvas" width="200" height="100"
        style="border:1px solid #000000;">
</canvas>

<form name="weather">
    <input type="text"   name="temperature" /> temperature <br/>
</form>


<button type="button" onclick="buttonFunction()">Click button</button>
<br>

<p id="demo_button">
    Click the button to change the text.
</p>


<img src="LittleBrain.png" id="littlebrain" onclick="alertme();" ondblclick="alert('You double clicked');" />
<br>

<h3 id="h3style" onmouseover="changeColor();" onmouseout="changeAgain();"> Rollover </h3>
<br>

<p id="first">This is a paragraph</p>
<p id="second">This is a paragraph</p>
<p id="third">This is a paragraph</p>

<form name="form_paragraph">
    <input type="checkbox" name="firstpara" onclick="showPara();" />  First paragraph </br>
    <input type="checkbox" name="secondpara" onclick="showPara();" /> Second paragraph </br>
    <input type="checkbox" name="thirdpara" onclick="showPara();" />  Third paragraph </br>
</form>

</body>

<script language="javascript" type="text/javascript">

    //sketchpad
    //googlefonts
    //kuler
    //Dart (Google web)



    // Ajax is not working
    $.ajax();


    // Event handling
    window.onmousemove = handleMouseMove;
    document.onmousedown = handleMouseClick;
    document.keypress = handleKeyboardPress;


    $(function() {
        $(window).keypress(function(e) {
            var key = e.which;
            document.form_mousekey.keypress.value = String.fromCharCode(key);
        });
    });
    // Functions
    function buttonFunction()
    {
        var x = document.getElementById("demo_button"); //Find the element with id="demo"
        x.innerHTML = "Hello JavaScript!";   //Change the HTML content
    }
    function changeColor() {
        document.getElementById("h3style").style.color="red";
        document.getElementById("h3style").firstChild.nodeValue="Excited";
        return true;
    }
    function changeAgain() {
        document.getElementById("h3style").style.color="gray";
        document.getElementById("h3style").firstChild.nodeValue="Bored";
        return true;
    }
    function biggerImage(x) {
        x.style.height="120px";
    }
    function normalImage(x) {
        x.style.height="100px";
    }
    function showPara()
    {
        document.getElementById("first").style.visibility=(document.form_paragraph.firstpara.checked)   ? "visible" : "hidden";
        document.getElementById("second").style.visibility=(document.form_paragraph.secondpara.checked) ? "visible" : "hidden";
        document.getElementById("third").style.visibility=(document.form_paragraph.thirdpara.checked)   ? "visible" : "hidden";
    }
    function handleMouseMove(event)
    {
        event = window.event;
        document.form_mousekey.mousex.value = event.pageX; //or clientX
        document.form_mousekey.mousey.value = event.pageY; //or clientY
        document.form_mousekey.relative_mousex.value = event.pageX; //or clientX
        document.form_mousekey.relative_mousey.value = event.pageY; //or clientY
        //var rel_x = event.pageX - gCanvasElement.offsetLeft;
        //var rel_y = event.pageY - gCanvasElement.offsetTop;
        document.form_mousekey.relative_mousex.value = event.pageX / $(window).width();
        document.form_mousekey.relative_mousey.value = event.pageY / $(window).height();

        $( "#progressbar" ).progressbar({
            value: 100 * window.event.pageX / $(window).width()
            //value: 100 * event.pageX / $(window).width()
        });
    }
    function handleMouseClick(event)
    {
        event = window.event;
        document.form_mousekey.mousebutton.value++;
    }
    function handleKeyboardPress(event)
    {
        event = window.event;
        document.form_mousekey.keypress.value = String.fromCharCode(event.charCode);
    }

    (function()
    {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0,0,150,75);
    })();

</script>


<noscript>
    <h3> This site requires JavaScript </h3>
</noscript>




<!--
//////////////////////////////////
//
//   Css styles
//
//////////////////////////////////
-->
<style>
    #h3style
    {
        color: gray;
    }
    img {
        display: block;
        margin: 0 auto;
    }
    td:hover { background-color: gray; }
</style>


<style>
    #draggable1{ width: 100px; height: 100px; padding: 0.5em; float: left; margin: 10px 10px 10px 0; }
    #draggable { width: 100px; height: 100px; padding: 0.5em; float: left; margin: 10px 10px 10px 0; }
    #droppable { width: 150px; height: 150px; padding: 0.5em; float: left; margin: 10px; }
</style>

<style type='text/css'>
    h4 { display: inline }
</style>