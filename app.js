$(window).scroll(function() {
  $("section .cover-text").each(function() {
    var marginTop = $(window).scrollTop() - $(this).parent().position().top;
    $(this).css({
      'margin-top': marginTop
    });
  });
});

//delays (delay[page#])
var delayVal2 = 7;
var delay2 = delayVal2;
var delayVal5 = 7;
var delay5 = delayVal5;

//size vars
size2sub1init = parseFloat(jQuery('.page2sub1').css('width'));
size2sub2init = parseFloat(jQuery('.page2sub2').css('width'));
sizeText2init = parseFloat(jQuery('.page2Text').css('font-size'));
sizeBoatinit = parseFloat(jQuery('.page3-boat').css('margin-left'));
var size2sub1 = size2sub1init;
var size2sub2 = size2sub2init;
var sizeText2 = sizeText2init;
var sizeBoat = sizeBoatinit;

$(window).bind('mousewheel DOMMouseScroll', function(event){
    var _step = 0.03;
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

        //PAGE6
        var _op5 = parseFloat(jQuery('.page5').css('opacity'));
        _op5 += _step/2;
        if (_op5 >= 1) delay5 += 0.1;
        if (_op5 > 1) _op5 = 1;
        jQuery('.page5').css('opacity', _op5);

        //PAGE5
        var _op4 = parseFloat(jQuery('.page4').css('opacity'));
        if (delay5 >= delayVal5)
        {
          delay5 = delayVal5;
          _op4 += _step;
        }
        jQuery('.page4').css('opacity', _op4);

        //PAGE4
        var _op3 = parseFloat(jQuery('.page3-1').css('opacity'));
        var _op3_2 = parseFloat(jQuery('.page3-2').css('opacity'));
        var _op3_boat = parseFloat(jQuery('.page3-boat').css('opacity'));
        if (parseFloat(jQuery('.page4').css('opacity')) >= 1)
        {
          _op3_boat += _step/2;
          if (_op3_boat >= 0.2) _op3_2 += _step/2;
          if (_op3_2 >= 1) _op3 += _step/2;
          sizeBoat -= 0.35;
        }

        if (sizeBoat <= sizeBoatinit) sizeBoat = sizeBoatinit;

        jQuery('.page3-boat').css('margin-left', sizeBoat);
        jQuery('.page3-1').css('opacity', _op3);
        jQuery('.page3-2').css('opacity', _op3_2);
        jQuery('.page3-boat').css('opacity', _op3_boat);

        //PAGE3
        var _op2 = parseFloat(jQuery('.page2').css('opacity'));
        var _op2sub = parseFloat(jQuery('.page2sub1').css('opacity'));
        if (_op3 >= 1)
        {
          _op2sub += _step;
          delay2 += 0.1;
          size2sub1 -= 0.3;
          size2sub2 -= 0.15;
          sizeText2 -= 0.01;
        }
        if (delay2 >= 1)
        {
          _op2 += _step;
        }
        if (_op2 > 1) _op2 = 1;
        jQuery('.page2').css('opacity', _op2);
        jQuery('.page2sub1').css('width', size2sub1);
        jQuery('.page2sub2').css('width', size2sub2);
        jQuery('.page2sub1').css('opacity', _op2sub);
        jQuery('.page2sub2').css('opacity', _op2sub);
        jQuery('.page2Text').css('font-size', sizeText2);
        if (size2sub1 < size2sub1init) size2sub1 = size2sub1init;
        if (size2sub2 < size2sub2init) size2sub2 = size2sub2init;
        if (sizeText2 < sizeText2init) sizeText2 = sizeText2init;

        //PAGE2
        var _opOnePointFive = parseFloat(jQuery('.pageOnePointFive').css('opacity'));
        if (_op2 >= 1)
        {
          delay2 += 0.1;
          if (delay2 >= delayVal2)
          {
            //$("#2BG").addClass('unanimate');
            //$("#2BG").removeClass('animate');
            delay2 = delayVal2;
             _opOnePointFive += _step;
          }
        }
        if (_opOnePointFive > 1) _opOnePointFive = 1;
        jQuery('.pageOnePointFive').css('opacity', _opOnePointFive);

        //PAGE1
        var _op = parseFloat(jQuery('.page1').css('opacity'));
        if (_opOnePointFive >= 1)
        {
_op += _step;
        }
        if (_op > 1) _op = 1;
        jQuery('.page1').css('opacity', _op);
        jQuery('.frontSvg').css('opacity', _op);

    }
    else {

        //PAGE1
        var _op = parseFloat(jQuery('.page1').css('opacity'));
        _op -= _step;
        if (_op < 0) _op = 0;
        jQuery('.page1').css('opacity', _op);
        jQuery('.frontSvg').css('opacity', _op);

        //PAGE2
        var _opOnePointFive = parseFloat(jQuery('.pageOnePointFive').css('opacity'));
        if (_op <= 0) _opOnePointFive -= _step;
        if (_opOnePointFive < 0) _opOnePointFive = 0;
        jQuery('.pageOnePointFive').css('opacity', _opOnePointFive);

        //PAGE3
        var _op2 = parseFloat(jQuery('.page2').css('opacity'));
        var _op2sub = parseFloat(jQuery('.page2sub1').css('opacity'));
        if (_opOnePointFive <= 0)
        {
          $("#2BG").addClass('animate');
          //$("#2BG").removeClass('unanimate');
          delay2 -= 0.1;
          if (sizeText2 <= sizeText2init*1.1)
          {
              sizeText2 += 0.01;
          }
          size2sub1 += 0.3;
          size2sub2 += 0.15;
          if (delay2 <= 1)
          {
             _op2 -= _step;
          }
          if (delay2 <= 0)
          {
            delay2 = 0;
             _op2sub -= _step;
          }
        }
        if (_op2 < 0) _op2 = 0;
        jQuery('.page2').css('opacity', _op2);
        jQuery('.page2sub1').css('width', size2sub1);
        jQuery('.page2sub2').css('width', size2sub2);
        jQuery('.page2sub1').css('opacity', _op2sub);
        jQuery('.page2sub2').css('opacity', _op2sub);
        jQuery('.page2Text').css('font-size', sizeText2);

        //PAGE4
        var _op3 = parseFloat(jQuery('.page3-1').css('opacity'));
        var _op3_2 = parseFloat(jQuery('.page3-2').css('opacity'));
        var _op3_boat = parseFloat(jQuery('.page3-boat').css('opacity'));
        if (parseFloat(jQuery('.page2sub1').css('opacity')) <= 0.2)
        {
          sizeBoat += 0.35;
        }
        if (parseFloat(jQuery('.page2sub1').css('opacity')) <= 0)
        {
          _op3 -= _step/2;
        }
        if (parseFloat(jQuery('.page3-1').css('opacity')) <= 0)
        {
          _op3_2 -= _step/2;
        }
        if (parseFloat(jQuery('.page3-2').css('opacity')) <= 0.8)
        {
          _op3_boat -= _step/2
        }
        jQuery('.page3-boat').css('margin-left', sizeBoat);
        jQuery('.page3-1').css('opacity', _op3);
        jQuery('.page3-2').css('opacity', _op3_2);
        jQuery('.page3-boat').css('opacity', _op3_boat);

        //PAGE5
        var _op4 = parseFloat(jQuery('.page4').css('opacity'));
        if (parseFloat(jQuery('.page3-2').css('opacity')) <= 0)
        {
          _op4 -= _step;
        }

        jQuery('.page4').css('opacity', _op4);

        //PAGE6
        var _op5 = parseFloat(jQuery('.page5').css('opacity'));
        if (parseFloat(jQuery('.page4').css('opacity')) <= 0) delay5 -= 0.1;
        if (delay5 <= 0)
        {
            delay5 = 0;
            _op5 -= _step/2;
        }
        jQuery('.page5').css('opacity', _op5);
    }
});

/*const logo = document.querySelectorAll('#logo path');

for(let i = 0; i < logo.length; i++)
{
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}*/
