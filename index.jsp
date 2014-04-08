<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>jQuery UI Progressbar - Default functionality</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <script src="jquery.slides.js"></script>

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
        h3 {
            font-family: 'Codystar', serif;
            font-size: 20px;
        }
        body {
            font-family: 'Maven Pro', serif;
            font-size: 16px;
        }
    </style>

</head>


<!--
//////////////////////////////////
//
//   HTML body
//
//////////////////////////////////
-->
<body>


<img border="0" width=30% src="images/name.png" alt="BryanDer" align="center">
<img border="0" width=20% src="images/mugshot.png" alt="Face" align="center">
<br/>
<br/>
<h1>personal webpage</h1>
<br/>
<br/>


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


<div id="progressbar"></div>
<br/>

<form name="form_mousekey">
    <input type="text"   name="mousex" />      Mouse X Position    <br/>
    <input type="text"   name="mousey" />      Mouse Y Position    <br/>
    <input type="text"   name="relative_mousex" />  Rel Mouse X Position    <br/>
    <input type="text"   name="relative_mousey" />  Rel Mouse Y Position    <br/>
    <input type="number" name="mousebutton" /> Mouse Button pressed<br/>
    <input type="text"   name="keypress" />    Key Pressed         <br/>
</form>


<a href="/bder.github.io/blog.html">Google my brain</a> <br/>

<div id="slideshow">
    <h3>2014 ACS Synthetic Biology</h3>
    <img id="2013_1" src="images/acs_synbio/thumb_2014_01.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=392627712');">

    <img id="2013_2" src="images/acs_synbio/thumb_2014_02.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);" onclick="hugeImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=394348096');">

    <img id="2013_3" src="images/acs_synbio/thumb_2014_03.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=397091680');">

    <h3>2013 ACS Synthetic Biology</h3>
    <img id="2014_1" src="images/acs_synbio/thumb_2013_01.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=375483248');">

    <img id="2014_2" src="images/acs_synbio/thumb_2013_02.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=376955232');">

    <img id="2014_3" src="images/acs_synbio/thumb_2013_03.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=378579192');">

    <img id="2014_4" src="images/acs_synbio/thumb_2013_04.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=380627296');">

    <img id="2014_5" src="images/acs_synbio/thumb_2013_05.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=381499680');">

    <img id="2014_6" src="images/acs_synbio/thumb_2013_06.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=382987720');">

    <img id="2014_7" src="images/acs_synbio/thumb_2013_07.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=384235608');">

    <img id="2014_8" src="images/acs_synbio/thumb_2013_08.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=385683728');">

    <img id="2014_9" src="images/acs_synbio/thumb_2013_09.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=388035664');">

    <img id="2014_10" src="images/acs_synbio/thumb_2013_10.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=389187616');">

    <img id="2014_11" src="images/acs_synbio/thumb_2013_11.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=389979848');">

    <img id="2014_12" src="images/acs_synbio/thumb_2013_12.png" style="border:2px solid black; height: 250px; display: inline"
         onmouseover="borderImage(this);" onmouseout="noborderImage(this);"
         onclick="openACS('http://pubs.acs.org/action/showLargeCover?issue=391491720');">

</div>



</body>

<script language="javascript" type="text/javascript">

    /*
    //slideshow timer, does not recycle
    function slideSwitch() {
        var $active = $('div#slideshow IMG.active');
        var $next = $active.next();
        $next.addClass('active');

        if($active.id == 3) {
            document.getElementById("slideshow").getElementById("1").addClass('active');
        }

        $active.removeClass('active');
    }*/

    $(function() {
        setInterval( "slideSwitch()", 1000 );
    });

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
    function borderImage(x) {
        x.style.border="2px solid red";
    }
    function noborderImage(x) {
        x.style.border="2px solid black";
    }
    function biggerImage(x) {
        x.style.height="120px";
    }
    function normalImage(x) {
        x.style.height="100px";
    }
    function openACS(url) {
        window.open("http://pubs.acs.org/journal/asbcd6");
    }
    function hugeImage(x) {
        window.open("images/acs_synbio/2014_01.png");
        /*if(x.style.height="250px")
        {
            x.src="images/acs_synbio/2014_01.png";
            x.style.height="1000px";
        }
        else
        {
            x.src="images/acs_synbio/thumb_2014_01.png";
            x.style.height="250px";
        }*/

    }
    function handleMouseMove(event)
    {
        event = window.event;
        document.form_mousekey.mousex.value = event.pageX; //or clientX
        document.form_mousekey.mousey.value = event.pageY; //or clientY
        document.form_mousekey.relative_mousex.value = event.pageX; //or clientX
        document.form_mousekey.relative_mousey.value = event.pageY; //or clientY
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
    img
    {
        display: block;
        margin: 0 auto;
    }

    td:hover
    {
        background-color: gray;
    }
</style>

<style>
    /* Prevents slides from flashing */
    #slides {
        display:none;
    }
</style>

<style type="text/css">
    .active{
        z-index:99;
    }
</style>