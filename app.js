


//delays (delay[page#])
var delayVal2 = 7;
var delay2 = delayVal2;
var delayVal5 = 7;
var delay5 = delayVal5;
var delayVal6 = 5;
var delay6 = delayVal6;
var delay7 = 4;
var delayVal16 = 5;
var delay16 = delayVal16;

var page7bool = 1;

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

      //PAGE17
      var _op16 = parseFloat(jQuery('.page16').css('opacity'));
        _op16 += _step/2;
      jQuery('.page16').css('opacity', _op16);

      //PAGE16
      var _op15 = parseFloat(jQuery('.page15').css('opacity'));
      if (delay16 < delayVal16) delay16 += 0.1;
      else {
        delay16 = delayVal16;
        if (_op16 >= 1){
          _op16 = 1;
                _op15 += _step/2;
              }
      }
      jQuery('.page15').css('opacity', _op15);

      //PAGE15
      var _op14 = parseFloat(jQuery('.page14').css('opacity'));
if (_op15 >= 1){
  _op15 = 1;
        _op14 += _step/2;
      }
      jQuery('.page14').css('opacity', _op14);

      //PAGE14
      var _op13 = parseFloat(jQuery('.page13').css('opacity'));
if (_op14 >= 0.8){
  _op14 = 0.8;
        _op13 += _step/2;
      }
      jQuery('.page13').css('opacity', _op13);

      //PAGE13
      var _op12 = parseFloat(jQuery('.page12').css('opacity'));
        if (_op13 >= 1){
          _op13 = 1;
        _op12 += _step/2;
      }
      jQuery('.page12').css('opacity', _op12);

      //PAGE12
      var _op11 = parseFloat(jQuery('.page11').css('opacity'));
if (_op12 >= 1){
  _op12 = 1;
        _op11 += _step/2;
      }
      jQuery('.page11').css('opacity', _op11);

      //PAGE11
      var _op10 = parseFloat(jQuery('.page10').css('opacity'));
        if (_op11 >= 1){
          _op11 = 1;
        _op10 += _step/2;
      }
      jQuery('.page10').css('opacity', _op10);

      //page10
      var _op9 = parseFloat(jQuery('.page9').css('opacity'));
if (_op10 >= 1){
  _op10 = 1;
        _op9 += _step;
      }
      jQuery('.page9').css('opacity', _op9);

      //PAGE9
      var _op8 = parseFloat(jQuery('.page8').css('opacity'));
      if (_op8 < 1 && _op9 >= 1) {
        _op9 = 1;
        _op8 += _step/3;
      }
      jQuery('.page8').css('opacity', _op8);
      console.log(parseFloat(jQuery('.page8').css('opacity')));
      console.log(parseFloat(jQuery('.page6').css('opacity')));
      console.log(parseFloat(jQuery('.page7').css('opacity')));

      //PAGE8
      var _op7_1 = parseFloat(jQuery('#page7-1').css('opacity'));
      var _op7_2 = parseFloat(jQuery('#page7-2').css('opacity'));
      var _op7_3 = parseFloat(jQuery('#page7-3').css('opacity'));
      var _op7 = parseFloat(jQuery('.page7').css('opacity'));

      if (_op8 >= 1)
      {
        _op8 = 1;
        if (_op7 < 1) {
        _op7 += _step/2;
        jQuery('.page7').css('opacity', _op7);
        }
        else {
          _op7 = 1;
          if (_op7_3 > 0)
          {
            page7bool = 1;
            _op7_3 -= _step/3;
            jQuery('#page7-3').css('opacity', _op7_3);
          }
          else {
            {
              _op7_3 = 0;
              if (_op7_2 > 0)
              {
                _op7_2 -= _step/3;
                jQuery('#page7-2').css('opacity', _op7_2);
              }
              else
              {
                _op7_2 = 0;
                if (_op7_1 > 0)
                {
                  _op7_1 -= _step/3;
                  jQuery('#page7-1').css('opacity', _op7_1);
                }
                else
                {
                  _op7_1 = 0;
                }
              }
            }
          }
        }
      }

      //PAGE7
      var _op6 = parseFloat(jQuery('.page6').css('opacity'));
      if (_op7_1 <= 0 && _op7 >= 1)
      {
        delay7 = 4;
        _op6 += _step;
      if (_op6 >= 1)
      {
        _op6 = 1;
        delay6 += 0.1;
      }
      jQuery('.page6').css('opacity', _op6);
      }

        //PAGE6
        var _op5 = parseFloat(jQuery('.page5').css('opacity'));
        if (delay6 >= delayVal6)
        {
          delay6 = delayVal6;
          _op5 += _step/2;
        }
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
          _op2 += _step/2;
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
             _op2 -= _step/2;
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
        if (size2sub1 > size2sub1init*1.3) size2sub1 = size2sub1init*1.3;
        if (size2sub2 > size2sub2init*1.3) size2sub2 = size2sub2init*1.3;
        if (sizeText2 > sizeText2init*1.3) sizeText2 = sizeText2init*1.3;

        //PAGE4
        var _op3 = parseFloat(jQuery('.page3-1').css('opacity'));
        var _op3_2 = parseFloat(jQuery('.page3-2').css('opacity'));
        var _op3_boat = parseFloat(jQuery('.page3-boat').css('opacity'));
        if (parseFloat(jQuery('.page2sub1').css('opacity')) <= 0.2 && _op3_boat > 0)
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

        //PAGE7
        var _op6 = parseFloat(jQuery('.page6').css('opacity'));
        if (_op5 <= 0) {
          _op5 = 0;
          delay6 -= 0.1;
        }
        if (delay6 < 0)
        {
          delay6 = 0;
          _op6 -= _step;
        }
        jQuery('.page6').css('opacity', _op6);

        //PAGE8
        var _op7_1 = parseFloat(jQuery('#page7-1').css('opacity'));
        var _op7_2 = parseFloat(jQuery('#page7-2').css('opacity'));
        var _op7_3 = parseFloat(jQuery('#page7-3').css('opacity'));
        var _op7 = parseFloat(jQuery('.page7').css('opacity'));
        if (_op6 <= 0)
        {
          _op6 = 0;
          delay7 -= 0.1;
          $("#7BG").addClass('page7anim');
          if (delay7 <= 0)
          {
            delay7 = 0;
            if (_op7_1 < 1 && page7bool == 1){
               _op7_1 += _step/3;
               jQuery('#page7-1').css('opacity', _op7_1);
             }
            else
            {
              _op7_1 = 1;
              if (_op7_2 < 1 && page7bool == 1) {
                _op7_2 += _step/3;
                jQuery('#page7-2').css('opacity', _op7_2);
              }
              else
              {
                _op7_2 = 1;
                if (_op7_3 < 1 && page7bool == 1) {
                  _op7_3 += _step/3;
                  jQuery('#page7-3').css('opacity', _op7_3);
                }
                else
                {
                  page7bool = 0;
                  _op7_3 = 1;
                  _op7 -= _step/2;
                  jQuery('.page7').css('opacity', _op7);
                }
              }
            }
          }
        }

        //PAGE9
        var _op8 = parseFloat(jQuery('.page8').css('opacity'));

        if (_op7 < 0)
        {
          _op7 = 0;
          _op8 -= _step/3;
        }
        jQuery('.page8').css('opacity', _op8);

        //page10
        var _op9 = parseFloat(jQuery('.page9').css('opacity'));
        if (_op8 <= 0)
        {
          _op8 = 0;
          _op9 -= _step;
        }
        jQuery('.page9').css('opacity', _op9);

        //PAGE11
        var _op10 = parseFloat(jQuery('.page10').css('opacity'));
        if (_op9 <= 0)
        {
          _op9 = 0;
          _op10 -= _step/2;
        }
        jQuery('.page10').css('opacity', _op10);

        //PAGE12
        var _op11 = parseFloat(jQuery('.page11').css('opacity'));
        if (_op10 <= 0)
        {
          _op10 = 0;
          _op11 -= _step/2;
        }
        jQuery('.page11').css('opacity', _op11);

        //PAGE13
        var _op12 = parseFloat(jQuery('.page12').css('opacity'));
        if (_op11 <= 0)
        {
          _op11 = 0;
          _op12 -= _step/2;
        }
        jQuery('.page12').css('opacity', _op12);

        //PAGE14
        var _op13 = parseFloat(jQuery('.page13').css('opacity'));
        if (_op12 <= 0)
        {
          _op12 = 0;
          _op13 -= _step/2;
        }
        jQuery('.page13').css('opacity', _op13);

        //PAGE15
        var _op14 = parseFloat(jQuery('.page14').css('opacity'));
        if (_op13 <= 0)
        {
          _op13 = 0;
          _op14 -= _step/2;
        }
        jQuery('.page14').css('opacity', _op14);

        //PAGE16
        var _op15 = parseFloat(jQuery('.page15').css('opacity'));
        if (_op14 <= 0)
        {
          _op14 = 0;
          _op15 -= _step/2;
        }
        jQuery('.page15').css('opacity', _op15);

        //PAGE17
        var _op16 = parseFloat(jQuery('.page16').css('opacity'));
        if (delay16 > 0) delay16 -= 0.1;
        else {
          delay16 = 0;
          if (_op15 <= 0)
          {
            _op15 = 0;
            _op16 -= _step/2;
          }
        }
        jQuery('.page16').css('opacity', _op16);

    }
});

/*const logo = document.querySelectorAll('#logo path');

for(let i = 0; i < logo.length; i++)
{
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}*/
