var Links = {
 setColor:function (color){
   $('a').css('color',color);
    }
  }
 var Body = {
   setColor:function (color) {
     $('body').css('color',color);
   },
   setBackgroundColor:function (color){
     $('body').css('backgroundColor',color);
   }
 }
 function nightDayHandler(self){
   var target = document.querySelector('body');
   if (self.value === 'night') {
   Body.setBackgroundColor('#323232');
   Body.setColor('white');
   self.value = 'day' ;
   Links.setColor('white');

   } else {
   Body.setBackgroundColor('white');
   Body.setColor('Black');
   self.value = 'night' ;
   Links.setColor('black');
   }
 }
