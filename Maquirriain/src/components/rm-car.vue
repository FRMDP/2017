<template>

  <div>
      <div id="Container">
      <div id="nose-top"></div>
      <div id="nose-bottom"></div>
      <div id="nose"></div>
      <div id="front-wing"></div>
      <div id="top-front-wing-trim"></div>
      <div id="bottom-front-wing-trim"></div>
      <div id="top-front-wing-trim-2"></div>
      <div id="bottom-front-wing-trim-2"></div>
      <div id="top-front-wing"></div>
      <div id="top-front-wing-tail"></div>
      <div id="bottom-front-wing"></div>
      <div id="bottom-front-wing-tail"></div>
      <div id="bottom-front-wheel" class="wheel"></div>
      <div id="bottom-back-wheel"></div>
      <div id="top-front-wheel" class="wheel"></div>
      <div id="top-back-wheel"></div>
      <div id="rear-body"></div>
      <div id="rear-wing-bg"></div>
      <div id="rear-wing"></div>
      <div id="top-body-curve"></div>
      <div id="top-body-curve-cut"></div>
      <div id="top-body-curve-straight"></div>
      <div id="top-body-curve-straight-2"></div>
      <div id="bottom-body-curve"></div>
      <div id="bottom-body-curve-cut"></div>
      <div id="bottom-body-curve-straight"></div>
      <div id="bottom-body-curve-straight-2"></div>
      <div id="back-body-curve"></div>
      <div id="body-hood"></div>
      <div id="back-body"></div>
      <div id="back-body-top"></div>
      <div id="back-body-bottom"></div>
      <div id="back-body-2"></div>
      <div id="top-spoke-1"></div>
      <div id="top-spoke-2"></div>
      <div id="top-spoke-3"></div>
      <div id="top-spoke-4"></div>
      <div id="bottom-spoke-1"></div>
      <div id="bottom-spoke-2"></div>
      <div id="bottom-spoke-3"></div>
      <div id="bottom-spoke-4"></div>

      <div id="back-spoke"></div>

      <div id="mirror-top"></div>
      <div id="mirror-bottom"></div>
      <div id="driver-bg"></div>
      <div id="driver-wheel"></div>
      <div id="driver-helmet"></div>
      <div id="bottom-body-spine"></div>
      <div id="top-body-spine"></div>
      <div id="end-body-spine"></div>
      <div id="top-body-spine-2"></div>
      <div id="bottom-body-spine-2"></div>
      </div>
  </div>

</template>
<script>
  export default{
    name:'rmCar'
  }
</script>
<style>

#Container{
  width:667px;
  height:330px;
  position: absolute;
  left:7%; top:10%;
  animation:entrance 2s 1;
  animation-direction:normal;
  -webkit-animation:entrance 2s 1;
  -webkit-animation-direction:normal;
}
#Container div{
  position: absolute;
  opacity: 1;

}
#Container:hover div{
  position: absolute;
  opacity: 0.5;
-webkit-box-shadow: 0 0 1px 1px rgba(142,68,173,1);
box-shadow: 0 0 1px 1px rgba(142,68,173,1);

}
#Container div:hover{
  position: absolute;
  opacity: 0.5;
-webkit-box-shadow: 0 0 4px 4px rgba(46, 204, 113,1.0);
box-shadow: 0 0 4px 4px rgba(46, 204, 113,1.0);

}
@keyframes entrance
{
0%   {  left:-50%; top:10%;}
100%  {left:7%; top:10%;}
}
@-webkit-keyframes entrance
{
0%   {  left:-50%; top:10%;}
100%  {left:7%; top:10%;}

}
#nose{
  width: 400px;
  height: 25px;
  -webkit-border-top-right-radius: 50px;
  -webkit-border-bottom-right-radius: 50px;
  -moz-border-radius-topright: 50px;
  -moz-border-radius-bottomright: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  top: 156px;
  left: 190px;
  z-index:2;
  background:#e74c3c;
}

#nose-top {
   width: 0;
   height: 0;
   border-bottom: 21px solid #e74c3c;
   border-left: 0px solid transparent;
   border-right: 200px solid transparent;
   top: 137px;
   left: 340px;
   z-index:3;
}

#nose-bottom{
   width: 0;
   height: 0;
   border-top: 21px solid #e74c3c;
   border-left: 0px solid transparent;
   border-right: 200px solid transparent;
   top: 179px;
   left: 340px;
   z-index:3;
}

#front-wing{
  width: 22px;
  height: 166px;
  top: 86px;
  left: 539px;
  z-index: 1;
  background: #e74c3c;
}

#top-front-wing {
width: 0;
height: 0;
border-right: 30px solid #e74c3c;
border-top: 0px solid transparent;
border-bottom: 70px solid transparent;
top: 86px;
left: 515px;
z-index: 1;
}
#top-front-wing-tail {
 width: 49px;
  height: 20px;
  background: #e74c3c;
  top: 86px;
  left: 512px;
}

#top-front-wheel{
  width: 60px;
  height: 35px;
  background: #222;
  top: 83px;
  left: 437px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  z-index: 2;

}
#top-back-wheel{
  width: 60px;
  height: 35px;
  background: #222;
  top: 83px;
  left: 120px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  z-index: 2;

}

#top-body-curve {
  width: 85px;
  height: 32px;
  background: #e74c3c;
  -moz-border-radius: 100px / 50px;
  -webkit-border-radius: 100px / 50px;
  border-radius: 100px / 50px;
  top: 104px;
  left: 289px;
}

#top-body-curve-cut {
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 50px solid #e74c3c;
  top: 113px;
  left: 372px;
}

#top-body-curve-straight {
  width: 100px;
  height: 30px;
  background:#e74c3c;
  top: 116px;
  left: 207px;
  transform: rotate(-12deg);
  -ms-transform: rotate(-12deg);
  -webkit-transform: rotate(-12deg);
  z-index:2;
}
#top-body-curve-straight-2{
  width: 45px;
  height: 30px;
  background: #e74c3c;
  top: 137px;
  left: 174px;
  transform: rotate(-36deg);
  -ms-transform: rotate(-36deg);
  -webkit-transform: rotate(-36deg);
  z-index: 2;
}
#top-front-wing-trim{
width: 14px;
height: 6px;
background: #e74c3c;
top: 124px;
left: 554px;
z-index: 1;
}
#top-front-wing-trim-2{
width: 14px;
height: 25px;
background: #e74c3c;
top: 92px;
left: 554px;
z-index: 1;
}
#bottom-front-wing-trim-2{
width: 14px;
height: 25px;
background: #e74c3c;
top: 220px;
left: 554px;
z-index: 1;
}
#bottom-front-wing-trim{
width: 14px;
height: 6px;
background: #e74c3c;
top: 207px;
left: 554px;
z-index: 1;
}

#top-spoke-1{
  width: 8px;
  height: 60px;
  background: #777;
  z-index: 0;
  top: 96px;
  left: 465px;
  transform: rotate(-9deg);
  -ms-transform: rotate(-9deg);
  -webkit-transform: rotate(-9deg);
}

#top-spoke-2{
  width: 8px;
  height: 60px;
  background: #777;
  z-index: 0;
  top: 105px;
  left: 475px;
  transform: rotate(-25deg);
  -ms-transform: rotate(-25deg);
  -webkit-transform: rotate(-25deg);
}

#top-spoke-3{
  width: 5px;
  height: 60px;
  background: #777;
  z-index: 0;
  top: 105px;
  left: 457px;
  transform: rotate(23deg);
  -ms-transform: rotate(23deg);
  -webkit-transform: rotate(23deg);
}
#top-spoke-4{
  width: 8px;
  height: 60px;
  background: #777;
  z-index: 0;
  top: 105px;
  left: 445px;
  transform: rotate(36deg);
  -ms-transform: rotate(36deg);
  -webkit-transform: rotate(36deg);
}


#bottom-spoke-1{
  width: 8px;
  height: 60px;
  background: #777;
  z-index: 0;
  top: 172px;
  left: 465px;
  transform: rotate(9deg);
  -ms-transform: rotate(9deg);
  -webkit-transform: rotate(9deg);
}

#bottom-spoke-2{
  width: 8px;
  height: 60px;
  background: #777;
  z-index: 0;
  top: 172px;
  left: 475px;
  transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -webkit-transform: rotate(25deg);
}

#bottom-spoke-3{
  width: 5px;
  height: 60px;
  background: #777;
  z-index: 0;
  top: 172px;
  left: 457px;
  transform: rotate(-23deg);
  -ms-transform: rotate(-23deg);
  -webkit-transform: rotate(-23deg);
}
#bottom-spoke-4{
  width: 8px;
  height: 60px;
  background: #777;
  z-index: 0;
  top: 172px;
  left: 445px;
  transform: rotate(-36deg);
  -ms-transform: rotate(-36deg);
  -webkit-transform: rotate(-36deg);
}

#back-spoke{
  width: 18px;
  height: 160px;
  background: #777;
  z-index: 0;
  top: 92px;
  left: 141px;
}




#bottom-front-wing {
width: 0;
height: 0;
border-right: 30px solid #e74c3c;
border-bottom: 0px solid transparent;
border-top: 70px solid transparent;
top: 182px;
left: 515px;
z-index: 1;
}
#bottom-front-wing-tail {
 width: 49px;
  height: 20px;
  background: #e74c3c;
  top: 232px;
  left: 512px;
}

#bottom-front-wheel{
  width: 60px;
  height: 35px;
  background: #222;
  top: 219px;
  left: 437px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  z-index: 2;

}
#bottom-back-wheel{
  width: 60px;
  height: 35px;
  background: #222;
  top: 219px;
  left: 120px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  z-index: 2;

}
#rear-body{
  width: 16px;
  height: 96px;
  background: #e74c3c;
  top: 120px;
  left: 147px;
  z-index: 2;
}

#rear-wing-bg{
  width: 53px;
  height: 84px;
  border-top: 6px solid #e74c3c;
  border-bottom: 6px solid #e74c3c;
  background: #ecf0f1;
  top: 120px;
  left: 103px;
  z-index: 1;
}


#bottom-body-curve {
  width: 85px;
  height: 32px;
  background: #e74c3c;
  -moz-border-radius: 100px / 50px;
  -webkit-border-radius: 100px / 50px;
  border-radius: 100px / 50px;
  top: 201px;
  left: 289px;
}

#bottom-body-curve-cut {
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 18px solid transparent;
  border-top: 50px solid #e74c3c;
  top: 174px;
  left: 372px;
}
#bottom-body-curve-straight {
  width: 100px;
  height: 30px;
  background:#e74c3c;
  top: 191px;
  left: 207px;
  transform: rotate(12deg);
  -ms-transform: rotate(12deg);
  -webkit-transform: rotate(12deg);
  z-index:2;
}

#bottom-body-curve-straight-2{
  width: 45px;
  height: 30px;
  background: #e74c3c;
  top: 171px;
  left: 174px;
  transform: rotate(36deg);
  -ms-transform: rotate(36deg);
  -webkit-transform: rotate(36deg);
  z-index: 2;
}

#body-hood{
  width: 134px;
  height: 93px;
  background: #e74c3c;
  top: 123px;
  left: 240px;
  z-index: 2;
}

#back-body-curve {
  width: 85px;
  height: 60px;
  background: #e74c3c;
  -moz-border-radius: 100px / 50px;
  -webkit-border-radius: 100px / 50px;
  border-radius: 100px / 50px;
  top: 139px;
  left: 168px;
  z-index: 1
}

#back-body{
  width: 85px;
  height: 94px;
  background: #222;
  top: 122px;
  left: 148px;
  z-index: 0;
}
#back-body-top {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 0 solid transparent;
  border-bottom: 12px solid #222;
  z-index: 0;
  top: 111px;
  left: 172px;
}

#back-body-bottom {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 0 solid transparent;
  border-top: 12px solid #222;
  z-index: 0;
  top: 214px;
  left: 172px;
}

#back-body-2{
  width: 97px;
  height: 115px;
  background: #222;
  top: 111px;
  left: 192px;
  z-index: 0;
}
#mirror-bottom{
  background: #e74c3c;
  width: 13px;
  height: 23px;
  top: 191px;
  left: 385px;
  z-index: 5;
  border-radius: 0 90px 90px 0;
 -moz-border-radius: 0 90px 90px 0;
 -webkit-border-radius:  0 90px 90px 0;
}
#mirror-top{
  background: #e74c3c;
  width: 13px;
  height: 23px;
  top: 122px;
  left: 385px;
  z-index: 5;
  border-radius: 0 90px 90px 0;
 -moz-border-radius: 0 90px 90px 0;
 -webkit-border-radius:  0 90px 90px 0;
}
#driver-bg{
  width: 68px;
  height: 29px;
  background: #222;
  top: 155px;
  left: 331px;
  z-index: 5;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

#driver-wheel{
  width: 5px;
  height: 25px;
  background: #95a5a6;
  top: 157px;
  left: 391px;
  z-index: 5;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px
}

#bottom-body-spine{
  background: #c0392b;
  width: 80px;
  height: 5px;
  top: 197px;
  left: 300px;
  z-index: 4;
  opacity:0.2 !important;
}
#top-body-spine{
  background: #c0392b;
  width: 80px;
  height: 5px;
  top: 135px;
  left: 300px;
  z-index: 4;
  opacity:0.2 !important;
}
#bottom-body-spine-2{
  background: #c0392b;
  width: 115px;
  height: 5px;
  top: 187px;
  left: 186px;
  z-index: 4;
  transform: rotate(10deg);
  -ms-transform: rotate(10deg);
  -webkit-transform: rotate(10deg);
  opacity:0.2 !important;
  }
#top-body-spine-2{
  background: #c0392b;
  width: 115px;
  height: 5px;
  top: 145px;
  left: 186px;
  z-index: 4;
  transform: rotate(-10deg);
  -ms-transform: rotate(-10deg);
  -webkit-transform: rotate(-10deg);
  opacity:0.2 !important;
}
#end-body-spine{
  width: 80px;
  height: 30px;
  top: 153px;
  left: 180px;
  z-index: 4;
  -webkit-border-radius: 50px 0px 0px 50px;
    border-radius: 50px 0px 0px 50px;
    border-left:6px solid #c0392b;
    opacity:0.2 !important;
}
#driver-helmet{
background: #3498db;
width: 27px;
height: 25px;
top: 157px;
left: 332px;
z-index: 6;
-webkit-border-radius: 20px 50px 50px 20px;
border-radius: 20px 50px 50px 20px;
}

</style>
