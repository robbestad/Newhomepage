speedUp=function(){
    ig.game.movetimer.set(0.05);
};

speedDown=function(){
    ig.game.movetimer.set(0.95);
};

saveBoard=function(){
    if(undefined !== ig.game.storage){
    ig.game.storage.set('gboard',ig.game.board);
    ig.game.storage.set('minutes',ig.game.minutes);
    ig.game.storage.set('seconds',ig.game.seconds);
    }
};

startGame=function(){
    ig.system.setGame(SuperChess);
    ig.system.restoreGame=false;  
    $(".alertify-dialog").css('zIndex','-999999');
};

startGameWhite=function(){
    ig.system.setGame(SuperChess);
    ig.system.restoreGame=false;  
    ig.system.playAsWhite=true;
    $(".alertify-dialog").css('zIndex','-999999');
};

startGameBlack=function(){
    ig.system.setGame(SuperChess);
    ig.system.restoreGame=false;  
    ig.system.playAsWhite=false;
    $(".alertify-dialog").css('zIndex','-999999');
};



restoreBoard=function(){
    $(".alertify-dialog").css('zIndex','-999999');
    ig.system.setGame(SuperChess);
    ig.system.restoreGame=true;  
};

function buttonPos(){
    var padding=11.5;
    //var leftPos=$("#canvas").css("marginLeft");

    var leftNumericPos=parseInt($("#canvas").css("marginLeft").replace(/[^-\d\.]/g, ''),10);
    if(leftNumericPos===0) leftNumericPos=$("#canvas").css("left").replace(/[^-\d\.]/g, '');

    var midpos=parseInt(($("#canvas").css("width").replace(/[^-\d\.]/g, '')),10)+45;


    $(".btnStart").css("display","none");
    $(".btnStart").css("left",leftNumericPos+"px");
    $(".btnStart").fadeIn('slow');
    var newlen=parseFloat(padding,10)+parseInt(leftNumericPos,10)+parseInt($(".btnStart").css("width").replace(/[^-\d\.]/g, ''),10);



    $(".btnStartBlack").css("display","none");
    $(".btnStartBlack").css("left",newlen+"px");
    $(".btnStartBlack").fadeIn('slow');
    newlen+=parseFloat(padding,10)+parseInt($(".btnStartBlack").css("width").replace(/[^-\d\.]/g, ''),10);
    /*
    $(".saveboard").css("display","none");
    $(".saveboard").css("left",newlen+"px");
    $(".saveboard").fadeIn('slow');
    newlen+=parseFloat(padding,10)+parseInt($(".saveboard").css("width").replace(/[^-\d\.]/g, ''),10);
    $(".restoreboard").css("display","none");
    $(".restoreboard").css("position","absolute");

    $(".restoreboard").css("left",newlen+"px");
    $(".restoreboard").fadeIn('slow');
    */
    newlen+=parseFloat(padding,10)+parseInt($(".btnStartBlack").css("width").replace(/[^-\d\.]/g, ''),10);
    $(".speedUp").css("display","none");
    $(".speedUp").css("left",newlen+"px");
    $(".speedUp").fadeIn('slow');
    newlen+=parseFloat(padding,10)+parseInt($(".speedUp").css("width").replace(/[^-\d\.]/g, ''),10);
    $(".speedDown").css("display","none");
    $(".speedDown").css("left",newlen+"px").fadeIn('slow', function() {});
    $(".speedDown").fadeIn('slow');

    $("#bottom").css("display","none");
    $("#bottom").css("top","650px");
    $("#bottom").css("left",(parseInt(leftNumericPos,10)+parseInt(190,10))+"px");
    $("#bottom").fadeIn('slow');

    $("#blurb").css("display","none");
    $("#blurb").css("top","690px");
    $("#blurb").css("left",(parseInt(leftNumericPos,10)+parseInt(100,10))+"px");
    $("#blurb").fadeIn('slow');

}

//   $(document).ready(buttonPos);
$(window).resize(buttonPos);
$(window).load(buttonPos);

$(document).ready(function() {
    buttonPos();

    //Alertify.dialog.alert("Hey :) This is fifth public beta release for a real time chess game to be called RTS Chess. In this version, you can play as either black or white. A lot of the code base has been rewritten to support multiplayer. There may be new bugs in the game because of this, but rest assured I'm continually working to stomp them out. For feedback, follow or tweet @svenardocom on Twitter. Good luck. The gameplay is hectic and chaotic, and you need quick responses and a keen eye to win. Please bookmark and come again, or look on Twitter for the announcement! Hope you have fun!");

   
});
