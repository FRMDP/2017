<template>
	<div class="myContainer">
		<div id="speeder">
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		  <div></div><div></div><div></div><div></div><div></div>
		</div>
		<div id="sun"></div>
	</div>
</template>

<script>
	export default {
		name: 'msReySpeeder'
	}
</script>

<style scoped>
	html {
  position: relative;
  font-size: 1px;
  min-height: 100%;
}
.myContainer {
  background: #c3e0db;
  background: -moz-linear-gradient(top, rgba(195, 224, 219, 1) 0%, rgba(233, 207, 184, 1) 74%, rgba(233, 207, 184, 1) 74.9%, rgba(211, 179, 145, 1) 75%, rgba(211, 179, 145, 1) 75.5%, rgba(226, 202, 177, 1) 75.6%, rgba(189, 153, 129, 1) 87%);
  background: -webkit-linear-gradient(top, rgba(195, 224, 219, 1) 0%, rgba(233, 207, 184, 1) 74%, rgba(233, 207, 184, 1) 74.9%, rgba(211, 179, 145, 1) 75%, rgba(211, 179, 145, 1) 75.5%, rgba(226, 202, 177, 1) 75.6%, rgba(189, 153, 129, 1) 87%);
  background: linear-gradient(to bottom, rgba(195, 224, 219, 1) 0%, rgba(233, 207, 184, 1) 74%, rgba(233, 207, 184, 1) 74.9%, rgba(211, 179, 145, 1) 75%, rgba(211, 179, 145, 1) 75.5%, rgba(226, 202, 177, 1) 75.6%, rgba(189, 153, 129, 1) 87%);
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  margin: 0;
  line-height: 100vh;
}
#speeder {
  position: relative;
  display: inline-block;
  width: 420rem;
  height: 146rem;
  margin: 100rem 0;
  margin: 20vh 0;
  vertical-align: bottom;
  animation: speeder 0.6s alternate infinite ease-in-out;
}
#speeder > div:nth-child(1) {
  position: absolute;
  background: #e47e42;
  top: 5rem;
  width: 163rem;
  height: 133rem;
  border-top-left-radius: 50rem 32rem;
  border-bottom-left-radius: 38rem 32rem;
  box-shadow: inset 2rem 0 0 #240a08, inset 0 2rem 0 #240a08, inset 0 -2rem 0 #240a08, inset 0 8rem 0 #f8a05e, inset 0 -8rem 0 #863818;
}
#speeder > div:nth-child(2) {
  position: absolute;
  background: #e47e42;
  top: 5rem;
  left: 163rem;
  width: 33rem;
  height: 125rem;
  border-top-right-radius: 33rem 10rem;
  border-bottom: solid 2px #240a08;
  box-shadow: inset 0 -4rem 0 0 #863818;
}
#speeder > div:nth-child(3) {
  position: absolute;
  background: #c8612f;
  top: 30rem;
  left: 8rem;
  width: 188rem;
  height: 91rem;
  border-top-left-radius: 15rem 20rem;
  border-bottom-left-radius: 16rem 18rem;
  box-shadow: inset 1rem 0 0 #240a08, inset 0 2rem 0 #240a08, inset 0 -2rem 0 #240a08;
}
#speeder > div:nth-child(4) {
  position: absolute;
  background: #c8612f;
  top: 33rem;
  left: 10rem;
  width: 186rem;
  height: 79rem;
  border-top-left-radius: 13rem 23rem;
  border-bottom-left-radius: 16rem 18rem;
  box-shadow: inset 1rem 0 0 #240a08, inset 0 1rem 0 #240a08, inset 0 -1rem 0 #240a08;
}
#speeder > div:nth-child(5) {
  position: absolute;
  background: #c8612f;
  top: 35rem;
  left: 12rem;
  width: 184rem;
  height: 75rem;
  border-top-left-radius: 13rem 23rem;
  border-bottom-left-radius: 16rem 18rem;
  box-shadow: inset 1rem 0 0 #240a08, inset 0 1rem 0 #240a08, inset 0 -1rem 0 #240a08, inset -173rem 3rem 0 #653d3d, inset -173rem 5rem 0 #451a0a, inset -173rem 7rem 0 #653d3d, inset -173rem 9rem 0 #451a0a, inset -173rem 11rem 0 #653d3d, inset -173rem 13rem 0 #451a0a, inset -173rem 15rem 0 #653d3d, inset -173rem 17rem 0 #451a0a, inset -173rem 19rem 0 #653d3d, inset -173rem 21rem 0 #451a0a, inset -173rem 23rem 0 #653d3d, inset -173rem 25rem 0 #451a0a, inset -173rem 27rem 0 #653d3d, inset -173rem 29rem 0 #451a0a, inset -173rem 31rem 0 #653d3d, inset -173rem 33rem 0 #451a0a, inset -173rem 35rem 0 #653d3d, inset -173rem 37rem 0 #451a0a, inset -173rem 39rem 0 #653d3d, inset -173rem 41rem 0 #451a0a, inset -173rem 43rem 0 #653d3d, inset -173rem 45rem 0 #451a0a, inset -173rem 47rem 0 #653d3d, inset -173rem 49rem 0 #451a0a, inset -173rem 51rem 0 #653d3d, inset -173rem 53rem 0 #451a0a, inset -173rem 55rem 0 #653d3d, inset -173rem 57rem 0 #451a0a, inset -173rem 59rem 0 #653d3d, inset -173rem 61rem 0 #451a0a, inset -173rem 63rem 0 #653d3d, inset -173rem 65rem 0 #451a0a, inset -173rem 67rem 0 #653d3d, inset -173rem 69rem 0 #451a0a, inset -173rem 71rem 0 #653d3d, inset -173rem 73rem 0 #451a0a, inset -173rem 75rem 0 #653d3d;
}
#speeder > div:nth-child(6) {
  position: absolute;
  background: #d57444;
  top: 36rem;
  left: 22rem;
  width: 174rem;
  height: 73rem;
  border-top-left-radius: 6rem 2rem;
  border-bottom-left-radius: 6rem 2rem;
  box-shadow: inset 0 5rem 0 #ea9270, inset 0 7rem 0 #240a08, inset 0 -9rem 0 #c75927;
}
#speeder > div:nth-child(7) {
  position: absolute;
  background: #240a08;
  top: 36rem;
  left: 29rem;
  width: 2rem;
  height: 73rem;
}
#speeder > div:nth-child(8) {
  position: absolute;
  background: #240a08;
  top: 36rem;
  left: 40rem;
  width: 2rem;
  height: 5rem;
  box-shadow: 82rem 0 0 #240a08, 90rem 0 0 #240a08, 90rem 65rem 0 #240a08, 90rem 68rem 0 #240a08;
}
#speeder > div:nth-child(9) {
  position: absolute;
  background: #ce7042;
  top: 76rem;
  left: 120rem;
  width: 76rem;
  height: 25rem;
  border-top: solid 2rem #240a08;
  border-left: solid 2rem #240a08;
}
#speeder > div:nth-child(10) {
  position: absolute;
  background: #bd5f39;
  top: 43rem;
  left: 130rem;
  width: 66rem;
  height: 55rem;
  border-left: solid 2rem #240a08;
  border-bottom: solid 2rem #240a08;
  border-bottom-left-radius: 9rem;
}
#speeder > div:nth-child(11) {
  position: absolute;
  background: #e27750;
  top: 43rem;
  left: 40rem;
  width: 84rem;
  height: 38rem;
  border-left: solid 2rem #240a08;
  border-right: solid 2rem #240a08;
  border-bottom: solid 2rem #240a08;
}
#speeder > div:nth-child(12) {
  position: absolute;
  background: #240a08;
  top: 100rem;
  left: 29rem;
  width: 166rem;
  height: 2rem;
}
#speeder > div:nth-child(13) {
  position: absolute;
  top: 45rem;
  left: 33rem;
  width: 4rem;
  height: 4rem;
  border: solid 1rem #240a08;
  border-radius: 50%;
  box-shadow: 0 25rem 0 -1rem #d57444, 0 25rem 0 #240a08, 92rem 0 0 -1rem #d57444, 92rem 0 0 #240a08, 92rem 25rem 0 -1rem #d57444, 92rem 25rem 0 #240a08, 39rem 58rem 0 -1rem #c75927, 39rem 58rem 0 #240a08, 65rem 58rem 0 -1rem #c75927, 65rem 58rem 0 #240a08, 90rem 58rem 0 -1rem #c75927, 90rem 58rem 0 #240a08;
}
#speeder > div:nth-child(14) {
  position: absolute;
  top: 45rem;
  left: 45rem;
  width: 20rem;
  height: 5rem;
  border: solid 1rem #240a08;
  box-shadow: 53rem 0 0 -1rem #d57444, 53rem 0 0 #240a08;
}
#speeder > div:nth-child(15) {
  position: absolute;
  background: #240a08;
  top: 83rem;
  left: 40rem;
  width: 10rem;
  height: 1rem;
  box-shadow: 35rem 0 0 #240a08, 69rem 0 0 #240a08;
}
#speeder > div:nth-child(16) {
  position: absolute;
  top: 45rem;
  left: 192rem;
  width: 5rem;
  height: 5rem;
  border: solid 1rem #240a08;
  box-shadow: 0 41rem 0 -1rem #bd5f39, 0 41rem 0 #240a08;
}
#speeder > div:nth-child(17) {
  position: absolute;
  background: #6f3220;
  top: 138rem;
  left: 34rem;
  width: 111rem;
  height: 6rem;
  border-left: solid 2rem #45241a;
  border-right: solid 2rem #45241a;
  border-bottom: solid 2rem #45241a;
}
#speeder > div:nth-child(17) {
  position: absolute;
  background: #6f3220;
  top: 138rem;
  left: 34rem;
  width: 111rem;
  height: 6rem;
  border-left: solid 2rem #45241a;
  border-right: solid 2rem #45241a;
  border-bottom: solid 2rem #45241a;
}
#speeder > div:nth-child(18) {
  position: absolute;
  background: #823720;
  top: 138rem;
  left: 124rem;
  width: 17rem;
  height: 2rem;
  border-left: solid 2rem #45241a;
  border-bottom: solid 2rem #45241a;
}
#speeder > div:nth-child(19) {
  position: absolute;
  background: #823720;
  top: 135rem;
  left: 141rem;
  width: 32rem;
  height: 5rem;
  border-right: solid 2rem #45241a;
  border-bottom: solid 2rem #45241a;
}
#speeder > div:nth-child(20) {
  position: absolute;
  top: 130rem;
  left: 124rem;
  width: 0;
  height: 0;
  border-left: solid 39rem #45241a;
  border-right: solid 10rem transparent;
  border-bottom: solid 6rem #45241a;
}
#speeder > div:nth-child(21) {
  position: absolute;
  top: 130rem;
  left: 124rem;
  width: 0;
  height: 0;
  border-left: solid 35rem #823720;
  border-right: solid 12rem transparent;
  border-bottom: solid 6rem #823720;
}
#speeder > div:nth-child(22) {
  position: absolute;
  top: 128rem;
  left: 139rem;
  width: 24rem;
  height: 9rem;
  border-top: solid 2rem #240a08;
  border-left: solid 2rem #240a08;
  border-top-left-radius: 4rem;
  box-shadow: -4rem -4rem 0 0 #863818, 0 -4rem 0 0 #863818;
}
#speeder > div:nth-child(23) {
  position: absolute;
  top: 110rem;
  left: 130rem;
  width: 8rem;
  height: 28rem;
  border-left: solid 2rem #240a08;
  border-bottom: solid 2rem #240a08;
  border-bottom-left-radius: 8rem;
}
#speeder > div:nth-child(24) {
  position: absolute;
  top: 110rem;
  left: 173rem;
  width: 6rem;
  height: 18rem;
  border-left: solid 2rem #240a08;
  border-right: solid 2rem #240a08;
}
#speeder > div:nth-child(25) {
  position: absolute;
  background: #240a08;
  top: 119rem;
  left: 64rem;
  width: 2rem;
  height: 18rem;
}
#speeder > div:nth-child(26) {
  position: absolute;
  background: #6b2d1a;
  top: 123rem;
  left: 50rem;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  border: solid 2rem #240a08;
  box-shadow: -27rem -4rem 0 -5rem #6b2d1a, -27rem -4rem 0 -3rem #240a08, -15rem 0 0 -2rem #6b2d1a, -15rem 0 0 0 #240a08;
}
#speeder > div:nth-child(27) {
  position: absolute;
  background: #863818;
  top: 128rem;
  left: 184rem;
  width: 12rem;
  height: 16rem;
  border-left: solid 2rem #240a08;
  border-bottom: solid 2rem #240a08;
  border-bottom-left-radius: 7rem 6rem;
}
#speeder > div:nth-child(28) {
  position: absolute;
  background: #f8a768;
  top: 7rem;
  left: 47rem;
  width: 72rem;
  height: 8rem;
  border-left: solid 2rem #90533c;
  border-right: solid 2rem #90533c;
  border-bottom: solid 2rem #90533c;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 3rem 5rem;
  border-bottom-right-radius: 13rem 7rem;
}
#speeder > div:nth-child(29) {
  position: absolute;
  top: 5rem;
  left: 133rem;
  width: 5rem;
  height: 25rem;
  border-top: solid 2rem #240a08;
  border-left: solid 2rem #240a08;
  border-top-left-radius: 3rem 9rem;
}
#speeder > div:nth-child(30) {
  position: absolute;
  top: 0;
  left: 173rem;
  width: 27rem;
  height: 6rem;
  border-top: solid 3rem #add3e8;
  border-left: solid 23rem #add3e8;
  border-top-left-radius: 27rem 6rem;
  border-top-right-radius: 4rem;
}
#speeder > div:nth-child(31) {
  position: absolute;
  background: #add3e8;
  top: 5rem;
  left: 173rem;
  width: 31rem;
  height: 6rem;
  border-top-right-radius: 4rem;
}
#speeder > div:nth-child(32) {
  position: absolute;
  top: 1rem;
  left: 174rem;
  width: 25rem;
  height: 5rem;
  border-top: solid 3rem #f1f9fd;
  border-left: solid 21rem #f1f9fd;
  border-top-left-radius: 27rem 6rem;
  border-top-right-radius: 3rem;
}
#speeder > div:nth-child(33) {
  position: absolute;
  background: #f1f9fd;
  top: 6rem;
  left: 174rem;
  width: 29rem;
  height: 5rem;
  border-top-right-radius: 3rem;
}
#speeder > div:nth-child(34) {
  position: absolute;
  background: #a8522f;
  top: -4rem;
  left: 170rem;
  width: 5rem;
  height: 24rem;
  border: solid 2rem #240a08;
  border-radius: 2rem;
  transform: rotateZ(-70deg);
}
#speeder > div:nth-child(35) {
  position: absolute;
  background: #a8522f;
  top: 9rem;
  left: 181rem;
  width: 21rem;
  height: 5rem;
  border-top: solid 2rem #240a08;
  border-right: solid 2rem #240a08;
  border-bottom: solid 2rem #240a08;
  border-radius: 2rem;
}
#speeder > div:nth-child(36) {
  position: absolute;
  background: #9f4820;
  top: 20rem;
  left: 201rem;
  width: 17rem;
  height: 126rem;
  border-top: solid 2rem #240a08;
  border-right: solid 2rem #240a08;
  border-bottom: solid 2rem #240a08;
  border-top-right-radius: 16rem;
  border-bottom-right-radius: 7rem 16rem;
}
#speeder > div:nth-child(37) {
  position: absolute;
  background: #e38b33;
  top: 10rem;
  left: 196rem;
  width: 9rem;
  height: 136rem;
  border: solid 2rem #240a08;
  border-radius: 5rem;
}
#speeder > div:nth-child(38) {
  position: absolute;
  background: #240a08;
  top: 20rem;
  left: 208rem;
  width: 2rem;
  height: 126rem;
}
#speeder > div:nth-child(39) {
  position: absolute;
  background: #d3cac3;
  top: 19rem;
  left: 207rem;
  width: 9rem;
  height: 21rem;
  border: solid 1rem #33120a;
  box-shadow: inset 0 0 0 2rem #839298, inset 0 0 0 3rem #33120a;
  transform: rotateZ(-41deg);
}
#speeder > div:nth-child(40) {
  position: absolute;
  background: #839298;
  top: 31rem;
  left: 212rem;
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  border: solid 1rem #33120a;
  box-shadow: inset 0 0 0 2rem #839298, inset 0 0 0 3rem #33120a;
}
#speeder > div:nth-child(41) {
  position: absolute;
  background: #dfa972;
  top: 26rem;
  left: 49rem;
  width: 85rem;
  height: 4rem;
  border-top: solid 1rem #240a08;
  border-left: solid 1rem #240a08;
  border-right: solid 1rem #240a08;
}
#speeder > div:nth-child(42) {
  position: absolute;
  background: #867464;
  top: 10rem;
  left: 150rem;
  width: 4rem;
  height: 10rem;
  border: solid 1rem #240a08;
  box-shadow: 7rem 0 0 -1rem #867464, 7rem 0 0 0 #240a08;
}
#speeder > div:nth-child(43) {
  position: absolute;
  background: #f5a15c;
  top: 12rem;
  left: 166rem;
  width: 5rem;
  height: 5rem;
  border: solid 1rem #240a08;
  border-radius: 50%;
  box-shadow: 8rem 3rem 0 -1rem #f5a15c, 8rem 3rem 0 0 #240a08;
}
#speeder > div:nth-child(44) {
  position: absolute;
  background: #7f8d98;
  top: 19rem;
  left: 57rem;
  width: 156rem;
  height: 5rem;
  border: solid 1rem #240a08;
  border-right-width: 3rem;
  box-shadow: inset 2rem 0 0 0 #240a08, inset 24rem 0 0 0 #d9d7cb, inset 38rem 0 0 0 #7f8d98, inset 53rem 0 0 0 #d9d7cb, inset 101rem 0 0 0 #7f8d98, inset 110rem 0 0 0 #240a08;
}
#speeder > div:nth-child(45) {
  position: absolute;
  top: 17rem;
  left: 59rem;
  width: 0;
  height: 9rem;
  border-top: solid 2rem transparent;
  border-left: solid 10rem #240a08;
  border-bottom: solid 2rem transparent;
}
#speeder > div:nth-child(46) {
  position: absolute;
  top: 18rem;
  left: 60rem;
  width: 0;
  height: 7rem;
  border-top: solid 2rem transparent;
  border-left: solid 8rem #7f8d98;
  border-bottom: solid 2rem transparent;
}
#speeder > div:nth-child(47) {
  position: absolute;
  background: #c9c7ba;
  top: 17rem;
  left: 134rem;
  width: 4rem;
  height: 14rem;
  border: solid 1rem #240a08;
  box-shadow: 7rem 0 0 -1rem #c9c7ba, 7rem 0 0 0 #240a08;
}
#speeder > div:nth-child(48) {
  position: absolute;
  background: #7f8d98;
  top: 18rem;
  left: 167rem;
  width: 4rem;
  height: 7rem;
  border: solid 1rem #240a08;
}
#speeder > div:nth-child(49) {
  position: absolute;
  background: #7f8d98;
  top: 18rem;
  left: 178rem;
  width: 9rem;
  height: 7rem;
  border: solid 1rem #240a08;
}
#speeder > div:nth-child(50) {
  position: absolute;
  background: #7f8d98;
  top: 17rem;
  left: 186rem;
  width: 4rem;
  height: 9rem;
  border: solid 1rem #240a08;
}
#speeder > div:nth-child(51) {
  position: absolute;
  background: #7f8d98;
  top: 17rem;
  left: 199rem;
  width: 9rem;
  height: 9rem;
  border: solid 1rem #240a08;
  border-radius: 50%;
}
#speeder > div:nth-child(52) {
  position: absolute;
  top: 128rem;
  left: 176rem;
  width: 10rem;
  height: 10rem;
  border-top: solid 2rem #240a08;
  border-right: solid 2rem #240a08;
  border-top-right-radius: 7rem;
}
#speeder > div:nth-child(53) {
  position: absolute;
  background: #7c7f81;
  top: 47rem;
  left: 214rem;
  width: 37rem;
  height: 35rem;
  box-shadow: 0 0 0 2rem #240a08, inset 0 -7rem 0 0 #4d5150, inset 0 7rem 0 0 #a1a1a5;
  border-top-left-radius: 18rem 11rem;
  border-top-right-radius: 26rem 3rem;
  border-bottom-right-radius: 26rem 12rem;
  border-bottom-left-radius: 17rem 8rem;
}
#speeder > div:nth-child(54) {
  position: absolute;
  background: #997a5e;
  top: 54rem;
  left: 222rem;
  width: 10rem;
  height: 19rem;
  transform: rotateZ(-25deg);
  box-shadow: 0 0 0 2rem #240a08, inset 0 2rem 0 0 #c1a279, inset -2rem 0 0 0 #c1a279;
  border-top-left-radius: 3rem 13rem;
  border-top-right-radius: 3rem 13rem;
}
#speeder > div:nth-child(55) {
  position: absolute;
  background: #7c7f81;
  top: 86rem;
  left: 214rem;
  width: 22rem;
  height: 30rem;
  box-shadow: 0 0 0 2rem #240a08, inset 0 -7rem 0 0 #4d5150, inset 0 7rem 0 0 #a1a1a5;
  border-top-right-radius: 22rem 5rem;
  border-bottom-right-radius: 22rem 7rem;
}
#speeder > div:nth-child(56) {
  position: absolute;
  background: #240a08;
  top: 86rem;
  left: 218rem;
  width: 1rem;
  height: 31rem;
  box-shadow: 3rem 0 0 0 #240a08, 6rem 0 0 0 #240a08;
}
#speeder > div:nth-child(57) {
  position: absolute;
  background: #494e4f;
  top: 31rem;
  left: 264rem;
  width: 34rem;
  height: 47rem;
  border: solid 2rem #240a08;
  border-top-left-radius: 34rem 17rem;
  border-bottom-left-radius: 46rem 25rem;
}
#speeder > div:nth-child(58) {
  position: absolute;
  background: #7f8081;
  top: 31rem;
  left: 251rem;
  width: 36rem;
  height: 43rem;
  border: solid 2rem #240a08;
  border-top-left-radius: 34rem 17rem;
  border-bottom-right-radius: 28rem 14rem;
}
#speeder > div:nth-child(59) {
  position: absolute;
  background: #7e8180;
  top: 38rem;
  left: 287rem;
  width: 12rem;
  height: 28rem;
  border: solid 1rem #240a08;
  border-bottom: none;
  border-bottom-left-radius: 12rem 4rem;
}
#speeder > div:nth-child(60) {
  position: absolute;
  background: #a8a9ad;
  top: 42rem;
  left: 272rem;
  width: 16rem;
  height: 28rem;
  border: solid 2rem #240a08;
  border-top-left-radius: 16rem 12rem;
}
#speeder > div:nth-child(61) {
  position: absolute;
  top: 57rem;
  left: 255rem;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent #240a08 #240a08 transparent;
  border-width: 6rem 19rem 7rem 0;
}
#speeder > div:nth-child(62) {
  position: absolute;
  top: 58rem;
  left: 256rem;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent #a8a9ad #a8a9ad transparent;
  border-width: 6rem 18rem 5rem 0;
}
#speeder > div:nth-child(63) {
  position: absolute;
  background: #a8a9ad;
  top: 46rem;
  left: 281rem;
  width: 4rem;
  height: 4rem;
  border: solid 1rem #240a08;
  border-radius: 50%;
  box-shadow: 0 16rem 0 -1rem #a8a9ad, 0 16rem 0 0 #240a08, 10rem 3rem 0 -1rem #a8a9ad, 10rem 3rem 0 0 #240a08, 10rem 10rem 0 -1rem #a8a9ad, 10rem 10rem 0 0 #240a08;
}
#speeder > div:nth-child(64) {
  position: absolute;
  background: #7c7f81;
  top: 83rem;
  left: 237rem;
  width: 61rem;
  height: 35rem;
  box-shadow: 0 0 0 2rem #240a08, inset 0 -7rem 0 0 #4d5150, inset 0 7rem 0 0 #a1a1a5;
  border-top-left-radius: 52rem 8rem;
  border-bottom-left-radius: 52rem 8rem;
}
#speeder > div:nth-child(65) {
  position: absolute;
  background: #a4a4a5;
  top: 97rem;
  left: 255rem;
  width: 35rem;
  height: 8rem;
  border: solid 2rem #240a08;
  box-shadow: inset 0 -2rem 0 0 #a4a4a5, inset 0 -3rem 0 0 #240a08;
  transform: rotateZ(-50deg);
}
#speeder > div:nth-child(66) {
  position: absolute;
  top: 82rem;
  left: 262rem;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent #240a08 #240a08 transparent;
  border-width: 0 9rem 12rem 9rem;
  transform: rotateZ(-50deg);
}
#speeder > div:nth-child(67) {
  position: absolute;
  top: 83rem;
  left: 265rem;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent #a4a4a5 #a4a4a5 transparent;
  border-width: 0 7rem 14rem 9rem;
  transform: rotateZ(-50deg);
}
#speeder > div:nth-child(68) {
  position: absolute;
  background: #4b646e;
  z-index: -1;
  top: 74rem;
  left: 287rem;
  width: 12rem;
  height: 10rem;
  border-left: solid 2rem #240a08;
}
#speeder > div:nth-child(69) {
  position: absolute;
  background: #a8a9ad;
  top: 98rem;
  left: 281rem;
  width: 4rem;
  height: 4rem;
  border: solid 1rem #240a08;
  border-radius: 50%;
  box-shadow: 12rem -4rem 0 -1rem #a8a9ad, 12rem -4rem 0 0 #240a08, 12rem 3rem 0 -1rem #a8a9ad, 12rem 3rem 0 0 #240a08;
}
#speeder > div:nth-child(70) {
  position: absolute;
  top: 82rem;
  left: 287rem;
  width: 4rem;
  height: 37rem;
  border-left: solid 4rem #240a08;
  border-top-left-radius: 3rem 18rem;
  border-bottom-left-radius: 3rem 18rem;
}
#speeder > div:nth-child(71) {
  position: absolute;
  background: #4b646e;
  top: 95rem;
  left: 287rem;
  width: 4rem;
  height: 8rem;
  border: solid 1rem #240a08;
}
#speeder > div:nth-child(72) {
  position: absolute;
  background: #c56841;
  top: 31rem;
  left: 298rem;
  width: 40rem;
  height: 94rem;
  border: solid 2rem #240a08;
  box-shadow: inset 0 10rem 0 0 #e9824c, inset 0 -11rem 0 0 #953d1b;
  border-top-right-radius: 28rem 6rem;
  border-bottom-right-radius: 28rem 9rem;
}
#speeder > div:nth-child(73) {
  position: absolute;
  background: #c56841;
  top: 60rem;
  left: 313rem;
  width: 4rem;
  height: 4rem;
  border: solid 1rem #240a08;
  border-radius: 50%;
  box-shadow: 7rem 0 0 -1rem #c56841, 7rem 0 0 0 #240a08, 15rem 0 0 -1rem #c56841, 15rem 0 0 0 #240a08, 0 30rem 0 -1rem #c56841, 0 30rem 0 0 #240a08, 7rem 30rem 0 -1rem #c56841, 7rem 30rem 0 0 #240a08, 15rem 30rem 0 -1rem #c56841, 15rem 30rem 0 0 #240a08;
}
#speeder > div:nth-child(74) {
  position: absolute;
  background: #56656a;
  top: 48rem;
  left: 337rem;
  width: 8rem;
  height: 22rem;
  border: solid 2rem #240a08;
}
#speeder > div:nth-child(75) {
  position: absolute;
  background: #7f8385;
  top: 45rem;
  left: 343rem;
  width: 15rem;
  height: 27rem;
  border: solid 2rem #240a08;
  box-shadow: inset 0 -7rem 0 0 #56656a;
  border-top-right-radius: 9rem 4rem;
  border-bottom-right-radius: 9rem 4rem;
}
#speeder > div:nth-child(76) {
  position: absolute;
  background: #7f8385;
  top: 45rem;
  left: 340rem;
  width: 5rem;
  height: 6rem;
  border: solid 2rem #240a08;
  border-right: none;
  box-shadow: 1rem 7rem 0 -1rem #7f8385, 0 7rem 0 0 #240a08, 1rem 14rem 0 -1rem #7f8385, 0 14rem 0 0 #240a08, 1rem 21rem 0 -1rem #56656a, 0 21rem 0 0 #240a08;
}
#speeder > div:nth-child(77) {
  position: absolute;
  background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0) 100%);
  background: -webkit-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0) 100%);
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0) 100%);
  top: 41rem;
  left: 358rem;
  width: 62rem;
  height: 35rem;
  border-top-left-radius: 60rem 9rem;
  border-bottom-left-radius: 60rem 9rem;
  animation: engine 0.1s alternate infinite;
  transform-origin: center left;
  opacity: 0.6;
}
#speeder > div:nth-child(78) {
  position: absolute;
  background: #56656a;
  top: 87rem;
  left: 337rem;
  width: 8rem;
  height: 22rem;
  border: solid 2rem #240a08;
}
#speeder > div:nth-child(79) {
  position: absolute;
  background: #7f8385;
  top: 84rem;
  left: 343rem;
  width: 15rem;
  height: 27rem;
  border: solid 2rem #240a08;
  box-shadow: inset 0 -7rem 0 0 #56656a;
  border-top-right-radius: 9rem 4rem;
  border-bottom-right-radius: 9rem 4rem;
}
#speeder > div:nth-child(80) {
  position: absolute;
  background: #7f8385;
  top: 84rem;
  left: 340rem;
  width: 5rem;
  height: 6rem;
  border: solid 2rem #240a08;
  border-right: none;
  box-shadow: 1rem 7rem 0 -1rem #7f8385, 0 7rem 0 0 #240a08, 1rem 14rem 0 -1rem #7f8385, 0 14rem 0 0 #240a08, 1rem 21rem 0 -1rem #56656a, 0 21rem 0 0 #240a08;
}
#speeder > div:nth-child(81) {
  position: absolute;
  background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0) 100%);
  background: -webkit-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0) 100%);
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0) 100%);
  top: 80rem;
  left: 358rem;
  width: 62rem;
  height: 35rem;
  border-top-left-radius: 60rem 9rem;
  border-bottom-left-radius: 60rem 9rem;
  animation: engine 0.1s alternate infinite;
  transform-origin: center left;
  opacity: 0.6;
}
#speeder > div:nth-child(82) {
  position: absolute;
  background: #997a5e;
  top: 32rem;
  left: 249rem;
  width: 40rem;
  height: 11rem;
  border: solid 2rem #240a08;
  border-top-left-radius: 34rem 17rem;
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 28rem 14rem;
  transform: rotateZ(-10deg);
}
#speeder > div:nth-child(83) {
  position: absolute;
  background: #b89b81;
  left: 20rem;
  bottom: -50rem;
  width: 480rem;
  height: 8rem;
  border-radius: 110rem / 3rem;
  animation: shadow 0.6s alternate infinite ease-in-out, speeder-reverse 0.6s alternate infinite ease-in-out;
}
#speeder > div:nth-child(84) {
  position: absolute;
  background: #d9b89b;
  left: 520rem;
  bottom: -50rem;
  width: 80rem;
  height: 40rem;
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  box-shadow: 0 -60rem 0 0 #d9b89b, 37rem -40rem 0 0 #d9b89b, 79rem -18rem 0 0 #d9b89b, 70rem 0 0 0 #d9b89b, 100rem 0 0 0 #d9b89b, 20rem -30rem 0 0 #d9b89b;
  animation: dust-1 0.3s alternate infinite linear, speeder-reverse 0.6s alternate infinite ease-in-out;
}
#speeder > div:nth-child(85) {
  position: absolute;
  background: #b89b81;
  left: 480rem;
  bottom: -50rem;
  width: 80rem;
  height: 40rem;
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  box-shadow: 0 -38rem 0 0 #b89b81, -70rem 0 0 0 #b89b81, -37rem -18rem 0 0 #b89b81, 70rem 0 0 0 #b89b81, 37rem -18rem 0 0 #b89b81;
  animation: dust-2 0.3s 0.13s alternate infinite linear, speeder-reverse 0.6s alternate infinite ease-in-out;
}
#sun {
  position: absolute;
  background: #e4eeed;
  top: 15vh;
  left: 20vw;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  box-shadow: 0 0 60rem 20rem #e4eeed;
}
@keyframes speeder {
  to {
    transform: translate(0, -7rem);
  }
}
@keyframes speeder-reverse {
  to {
    transform: translate(0, 7rem);
  }
}
@keyframes engine {
  to {
    opacity: 0.5;
    transform: scale(0.95, 1);
  }
}
@keyframes shadow {
  to {
    left: 30rem;
    height: 6rem;
    opacity: 0.8;
  }
}
@keyframes dust-1 {
  to {
    box-shadow: 0 -60rem 0 -5rem #d9b89b, 37rem -40rem 0 -7rem #d9b89b, 79rem -18rem 0 -10rem #d9b89b, 70rem 0 0 0 #d9b89b, 100rem 0 0 0 #d9b89b, 20rem -30rem 0 0 #d9b89b;
  }
}
@keyframes dust-2 {
  to {
    box-shadow: 0 -38rem 0 -2rem #b89b81, -70rem 0 0 0 #b89b81, -37rem -18rem 0 -3rem #b89b81, 70rem 0 0 0 #b89b81, 37rem -18rem 0 -3rem #b89b81;
  }
}

</style>