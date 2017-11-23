<template>
	<div>
	<!-- NAME SELECTION -->
		<b-row align-h="center" v-if="!chatName">
			<b-col cols="6" md="4" lg="4" align-self="center">
				<h1 style="margin-top: 30%;" class="mobileNameTitle">Choose your name</h1>
				<input v-model="nameInput" type="text" class="form-control" 
					name="chatName" id="chatNameInput" style="margin-top: 10%;"
					placeholder="Set your galaxy name:">
				<button @click="setChatName" id="doneNameButton" 
					class="btn btn-primary forceBtn mobileForceBtn">
					The force is with me
				</button>
			</b-col>
		</b-row>
		<!-- SIDE SELECTION -->
		<div v-else>
			<div v-if="!side">
				<b-row align-h="center">
					<b-col cols="8" md="6" lg="6">
						<h1 class="sideTitle mobileSideTitle">Choose your side</h1>
					</b-col>
				</b-row>
				<b-row align-h="center">
					<section class="the-demo mobileDemo">
						<div class="example-item mobilexample-item">
							<div class="lightsaber mobileLightSaber">
								<label for="yoda-example" @click="chooseSide('yodaSide')"></label>
								<input type="checkbox" id="yoda-example">
								<div class="switch"></div>
								<div class="plasma yoda"></div>
							</div>
							<h3 class="sideName">Yoda</h3>
						</div>
						<div class="example-item mobilexample-item">
							<div class="lightsaber mobileLightSaber">
								<label for="darth-vader-example"  @click="chooseSide('vaderSide')"></label
								<input type="checkbox" id="darth-vader-example">
								<div class="switch"></div>
								<div class="plasma vader"></div>
							</div>
							<h3 class="sideName">Vader</h3>
						</div>
						<div class="example-item mobilexample-item">
							<div class="lightsaber mobileLightSaber">
								<label for="windu-example"  @click="chooseSide('winduSide')"></label>
								<input type="checkbox" id="windu-example">
								<div class="switch"></div>
								<div class="plasma windu"></div>
							</div>
							<h3 class="sideName">Windu</h3>
						</div>
						<div class="example-item mobilexample-item clearfix">
							<div class="lightsaber mobileLightSaber">
								<label for="obi-wan-example" @click="chooseSide('obiSide')"></label>
								<input type="checkbox" id="obi-wan-example">
								<div class="switch"></div>
								<div class="plasma obi-wan"></div>
							</div>
							<h3 class="sideName">Obi</h3>
						</div>
					</section>
				</b-row>
			</div>
			<!-- CHAT VIEW -->
			<div v-else style="padding-left: 10px;padding-right: 10px;">
				<div>
					<b-row align-h="center">
						<b-col cols="6">
							<h1 class="mobileName">Welcome dear {{chatName}}</h1>
						</b-col>
					</b-row>
					<b-row align-h="center">
						<b-col cols="6">
							<h2 class="mobileOtherPeople">Other people are talking about..</h2>
						</b-col>
					</b-row>
					<!-- IF YOU WANNA CHANGE YOUR NAME -->
					<div @click="openNameInput">
						i want to change my name
					</div>
					<b-row align-h="center" v-if="isNameInputOpen">
						<b-col cols="6" md="4" lg="4" align-self="center">
							<h1 style="margin-top: 30%;" class="mobileNameTitle">Choose your new name</h1>
							<input v-model="nameInput" type="text" class="form-control" 
								name="chatName" id="changeChatNameInput" style="margin-top: 10%;"
								placeholder="Set your galaxy name:">
							<button @click="changeChatName" id="doneNameButton" 
								class="btn btn-primary forceBtn mobileForceBtn">
								The force is with me
							</button>
						</b-col>
					</b-row>
					<!-- IF YOU WANNA CHANGE YOUR SIDE -->
					<div @click="openChoseSide">
						i want to change my side
					</div>
					<b-row v-if="isChangeSideOpen">
						<b-row>
							<b-col cols="8" md="6" lg="6">
								<h1 class="sideTitle mobileSideTitle">Choose your side</h1>
							</b-col>
						</b-row>
						<section class="the-demo mobileDemo">
							<div class="example-item mobilexample-item">
								<div class="lightsaber mobileLightSaber">
									<label for="yoda-example" @click="changeSide('yodaSide')"></label>
									<input type="checkbox" id="yoda-example">
									<div class="switch"></div>
									<div class="plasma yoda"></div>
								</div>
								<h3 class="sideName">Yoda</h3>
							</div>
							<div class="example-item mobilexample-item">
								<div class="lightsaber mobileLightSaber">
									<label for="darth-vader-example" @click="changeSide('vaderSide')"></label>
									<input type="checkbox" id="darth-vader-example">
									<div class="switch"></div>
									<div class="plasma vader"></div>
								</div>
								<h3 class="sideName">Vader</h3>
							</div>
							<div class="example-item mobilexample-item">
								<div class="lightsaber mobileLightSaber">
									<label for="windu-example" @click="changeSide('winduSide')"></label>
									<input type="checkbox" id="windu-example">
									<div class="switch"></div>
									<div class="plasma windu"></div>
								</div>
								<h3 class="sideName">Windu</h3>
							</div>
							<div class="example-item mobilexample-item clearfix">
								<div class="lightsaber mobileLightSaber">
									<label for="obi-wan-example" @click="changeSide('obiSide')"></label>
									<input type="checkbox" id="obi-wan-example">
									<div class="switch"></div>
									<div class="plasma obi-wan"></div>
								</div>
								<h3 class="sideName">Obi</h3>
							</div>
						</section>
					</b-row>
					<!-- THE CHAT ITSELF -->
					<div class="chatMessages">
						<div v-for="messageChat in messages">
							<div v-if="messageChat.transmitter == 'system'" class="changeAdvice">
								<p class="textChangeAdvice onTabletOrMinus">
									{{messageChat.content}}
								</p>
							</div>
							<div v-else-if="messageChat.transmitter == chatName" class="ownMessage">
								<div class="peopleName">
									<p class="backgroundPeopleName"
										v-bind:class="messageChat.side">
									{{ messageChat.transmitter }}:  
									</p>
								</div>
								<p class="peopleText onTabletOrMinus">
									{{messageChat.content}}
								</p>
							</div>
							<div v-else id="pplMessage">
								<div class="peopleName">
									<p class="backgroundPeopleName"
										v-bind:class="messageChat.side">
									{{ messageChat.transmitter }}:  
									</p>
								</div>
								<p class="peopleText onTabletOrMinus">
									{{messageChat.content}}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="sendText">
					<button class="btn btn-primary sendBtn" @click="sendMessage">Send</button>
					<div class="group">      
				      	<input class="messageInput" v-model="message" 
				      		style="color:white;" 
					      	name="chatbox" id="chatbox" 
							placeholder="Share your knowledge">
				      	<span class="highlight"></span>
				      	<span class="bar"></span>
				      	<label class="label">Message</label>
				    </div>
				</div>
				
			</div>
		</div>
	</div >
</template>

<script>
	export default{
		name: 'msChat',
		data(){
			return {
				nameInput: '',
				chatName: '',
				message: '',
				messages: [],
				isNameInputOpen: false,
				isChangeSideOpen: false
			}
		},
		computed: {
			side() {
				return this.$store.state.side;
			}
		},
		methods: {
			chooseSide(decision){
				self = this;
				setTimeout(() => {
					self.$store.commit('chooseSide', decision);
					self.$chatStorageService.setSide(decision);
				}, 1000)
			},
			setChatName(){
				this.$chatStorageService.setChatName(this.nameInput);
				this.chatName = this.nameInput;
				this.nameInput = '';
			},
			sendMessage(){
				const msg = { transmitter: this.chatName, side: this.side, content: this.message};
				this.socket.emit('sendMessage', msg);
				this.message = '';
			},
			openNameInput(){
				this.isNameInputOpen = true;
			},
			openChoseSide(){
				this.isChangeSideOpen = true;
			},
			changeChatName(){
				const msg = 
					{ transmitter: "system", 
					  content: "The user " + this.chatName + " is now called " + this.chatName + "."
					};
				this.socket.emit('sendMessage', msg);
				this.setChatName();
				this.isNameInputOpen = false;
			},
			changeSide(decision){
				const msg = 
					{ transmitter: "system", 
					  content: "The user " + this.chatName + " now is from the " + decision + "."
					};
				this.socket.emit('sendMessage', msg); 
				this.chooseSide(decision);
				this.isChangeSideOpen = false;
			}
		},
		mounted(){
			this.socket.emit('loadMessages');
		},
		created(){
			this.socket = this.$socket("http://localhost:3000");
			this.socket.on('updateMessages', (messages) => {this.messages = messages; });
			this.chatName = this.$chatStorageService.getChatName();
			this.$store.commit('chooseSide', this.$chatStorageService.getSide());
		}
	}
</script>

<style scoped>
	.ownMessage{
		float: right;
	}
	.changeAdvice {
		margin-left: 20px;
	}

	.textChangeAdvice {
		color: white;
		font-weight: bold;
	}

	.backgroundPeopleName {
		padding-left: 5px;
		padding-right: 5px;
		border-radius: 10%;
	}

	.sendBtn {
		margin-left: -70px;
		margin-bottom: -70px;
	}

	h3 {
		color: black;
	}

	body {
		background: #333;
		color: #fff;
		font-family: arial;		
	}

	.forceBtn {
		margin-top: 30px;
		margin-left: 120px;
		cursor: pointer;
	}
	
	.sideTitle {
		margin-left: 25%;
		margin-top: 12%;
	}

	/* ------------------------------
		INPUT 
	   ------------------------------ */

	.group { 
	  position:relative; 
	}
	.messageInput 				{
	  font-size:18px;
	  padding:10px 10px 10px 5px;
	  display:block;
	  border:none;
	  border-bottom:1px solid #757575;
	  background-color: transparent !important;
	}
	.messageInput:focus 		{ outline:none; }

	/* LABEL ======================================= */
	.label 				 {
	  color:white; 
	  font-size:18px;
	  font-weight:normal;
	  position:absolute;
	  pointer-events:none;
	  left:5px;
	  top:10px;
	  transition:0.2s ease all; 
	  -moz-transition:0.2s ease all; 
	  -webkit-transition:0.2s ease all;
	}

	/* active state */
	.messageInput:focus ~ .label, .messageInput:valid ~ .label 		{
	  top:-20px;
	  font-size:14px;
	  color:white;
	}

	/* BOTTOM BARS ================================= */
	.bar 	{ position:relative; display:block; width:213px; }
	.bar:before, .bar:after 	{
	  content:'';
	  height:2px; 
	  width:0;
	  bottom:1px; 
	  position:absolute;
	  background:white; 
	  transition:0.2s ease all; 
	  -moz-transition:0.2s ease all; 
	  -webkit-transition:0.2s ease all;
	}
	.bar:before {
	  left:50%;
	}
	.bar:after {
	  right:50%; 
	}

	/* active state */
	.messageInput:focus ~ .bar:before, .messageInput:focus ~ .bar:after {
	  width:50%;
	}

	/* HIGHLIGHTER ================================== */
	.highlight {
	  position:absolute;
	  height:60%; 
	  width:100px; 
	  top:25%; 
	  left:0;
	  pointer-events:none;
	  opacity:0.5;
	}

	/* active state */
	.messageInput:focus ~ .highlight {
	  -webkit-animation:inputHighlighter 0.3s ease;
	  -moz-animation:inputHighlighter 0.3s ease;
	  animation:inputHighlighter 0.3s ease;
	}

	/* ANIMATIONS ================ */
	@-webkit-keyframes inputHighlighter {
		from { background:#5264AE; }
	  to 	{ width:0; background:transparent; }
	}
	@-moz-keyframes inputHighlighter {
		from { background:#5264AE; }
	  to 	{ width:0; background:transparent; }
	}
	@keyframes inputHighlighter {
		from { background:#5264AE; }
	  to 	{ width:0; background:transparent; }
	}
	
	@media screen and (max-width: 900px) {
		.onTabletOrMinus {
			width: 250px !important;
		}
	}

	/* --------------------------
		END INPUT 
	   -------------------------- */

	.sendText {
		position: fixed;
		right: 0;
		bottom: 0;
		margin-right: 80px;
		padding-bottom: 15px;
	}

	.chatMessages {
		background-image: url("https://wallpapers.walldevil.com/wallpapers/a82/preview/star-wars-wallpaper-desktop-movies-entertainment-death.jpg");
		width: 100%;
		height: 600px;
		overflow-y: scroll;
	}

	.peopleName {
		width: max-content;
		padding-top: 5px;
		padding-bottom: 5px;
		padding-right: 15px;
		padding-left: 15px;
		margin-left: 20px;
		margin-top: 5px;
		border-radius: 8%;
		font-weight: bold;
		text-transform: uppercase;
	}
	
	
	.yodaSide {
		background: -webkit-linear-gradient(left, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%);
	}
	.vaderSide {
		background: -webkit-linear-gradient(left, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%);
	}
	.winduSide {
		background: -webkit-linear-gradient(left, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%);
	}
	.obiSide {
		background: -webkit-linear-gradient(left, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%);
	}
	.peopleText {
		color: white;
		padding-left: 45px;
		width: 500px;
	}
	/* -----------------------------
			   LIGHTSABERS 
	   -----------------------------	*/

	.the-demo {
		width: 960px;
		margin: 0 auto;
		margin-left: 255px;
	}
	.example-item {
		float: left;
		width: 25%;
		padding-top: 325px;
	}
	.lightsaber { position: relative; }

	.lightsaber label {
		cursor: pointer;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 88;
		text-indent: -9999px;
		width: 15px;
		height: 50px;
		border-bottom: solid 4px grey;
		border-top: solid 5px grey;
		border-radius: 5px;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		-o-border-radius: 5px;
		-ms-border-radius: 5px;
		background: rgb(226,226,226); /* Old browsers */
		background: linear-gradient(to right, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* W3C */
		background: -moz-linear-gradient(left, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 50%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(226,226,226,1)), color-stop(50%,rgba(219,219,219,1)), color-stop(51%,rgba(209,209,209,1)), color-stop(100%,rgba(254,254,254,1))); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(left, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(left, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* Opera 11.10+ */
		background: -ms-linear-gradient(left, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* IE10+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=1 ); /* IE6-9 */
	}

	.lightsaber .switch {
		background: #B94A37;
		width: 5px;
		height: 10px;
		display: block;
		position: absolute;
		bottom: 25px;
		left: 13px;
		transition: left 200ms;
		-moz-transition: left 200ms;
		-webkit-transition: left 200ms;
		-o-transition: left 200ms;
		-ms-transition: left 200ms;
		border-radius: 10px;
		-moz-border-radius: 10px;
		-webkit-border-radius: 10px;
		-o-border-radius: 10px;
		-ms-border-radius: 10px;
	}

	.lightsaber input[type=checkbox] {
		position: absolute;
		bottom: 0;
		left: 0;
		opacity: 0;
		-moz-opacity: 0;
		-webkit-opacity: 0;
		-o-opacity: 0;
		-ms-opacity: 0;
		z-index: 77;
	}

	.lightsaber .plasma {
		transition: height 300ms,;
		-moz-transition: height 300ms;
		-webkit-transition: height 300ms;
		-o-transition: height 300ms;
		-ms-transition: height 300ms;
		border-radius: 12px 12px 0 0;
		position: absolute;
		bottom: 55px;
		left: 2px;
		width: 10px;
		display: block;
		filter: blur(1px);
		-moz-filter: blur(1px);
		-webkit-filter: blur(1px);
		-o-filter: blur(1px);
		-ms-filter: blur(1px);
		height: 0;
	}


	.lightsaber input[type=checkbox]:checked ~ div.plasma {
		height: 250px;
	}

	.lightsaber input[type=checkbox]:hover ~ div.switch {
		background: #c09853;
		left: 12px;
	}

	.lightsaber input[type=checkbox]:checked ~ div.switch {
		background: #468847;
	}

	.yoda {
		background: rgb(135,220,90); /* Old browsers */
		background: linear-gradient(to right, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* W3C */
		background: -moz-linear-gradient(left, rgb(135,220,90) 0%, rgb(254,254,254) 30%, rgb(254,254,254) 50%, rgb(254,254,254) 70%, rgb(135,220,90) 100%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgb(135,220,90)), color-stop(30%,rgb(254,254,254)), color-stop(50%,rgb(254,254,254)), color-stop(70%,rgb(254,254,254)), color-stop(100%,rgb(135,220,90))); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(left, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(left, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* Opera 11.10+ */
		background: -ms-linear-gradient(left, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* IE10+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#87dc5a', endColorstr='#87dc5a',GradientType=1 ); /* IE6-9 */
		animation-name: yoda;
		-moz-animation-name: yoda;
		-webkit-animation-name: yoda;
		-o-animation-name: yoda;
		-ms-animation-name: yoda;
		animation-duration: 2s;
		-moz-animation-duration: 2s;
		-webkit-animation-duration: 2s;
		-o-animation-duration: 2s;
		-ms-animation-duration: 2s;
		animation-iteration-count: infinite;
		-moz-animation-iteration-count: infinite;
		-webkit-animation-iteration-count: infinite;
		-o-animation-iteration-count: infinite;
		-ms-animation-iteration-count: infinite;
	}

	.vader {
		background: rgb(229,17,21); /* Old browsers */
		background: linear-gradient(to right, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* W3C */
		background: -moz-linear-gradient(left, rgba(229,17,21,1) 0%, rgba(254,254,254,1) 30%, rgba(254,254,254,1) 47%, rgba(254,254,254,1) 71%, rgba(229,17,21,1) 100%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(229,17,21,1)), color-stop(30%,rgba(254,254,254,1)), color-stop(47%,rgba(254,254,254,1)), color-stop(71%,rgba(254,254,254,1)), color-stop(100%,rgba(229,17,21,1))); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(left, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(left, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* Opera 11.10+ */
		background: -ms-linear-gradient(left, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* IE10+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e51115', endColorstr='#e51115',GradientType=1 ); /* IE6-9 */
		animation-name: vader;
		-moz-animation-name: vader;
		-webkit-animation-name: vader;
		-o-animation-name: vader;
		-ms-animation-name: vader;
		animation-duration: 2s;
		-moz-animation-duration: 2s;
		-webkit-animation-duration: 2s;
		-o-animation-duration: 2s;
		-ms-animation-duration: 2s;
		animation-iteration-count: infinite;
		-moz-animation-iteration-count: infinite;
		-webkit-animation-iteration-count: infinite;
		-o-animation-iteration-count: infinite;
		-ms-animation-iteration-count: infinite;
	}

	.windu {
		background: rgb(202,116,221); /* Old browsers */
		background: linear-gradient(to right, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* W3C */
		background: -moz-linear-gradient(left, rgba(202,116,221,1) 0%, rgba(254,254,254,1) 30%, rgba(254,254,254,1) 47%, rgba(254,254,254,1) 71%, rgba(202,116,221,1) 100%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(202,116,221,1)), color-stop(30%,rgba(254,254,254,1)), color-stop(47%,rgba(254,254,254,1)), color-stop(71%,rgba(254,254,254,1)), color-stop(100%,rgba(202,116,221,1))); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(left, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(left, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* Opera 11.10+ */
		background: -ms-linear-gradient(left, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* IE10+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ca74dd', endColorstr='#ca74dd',GradientType=1 ); /* IE6-9 */
		animation-name: windu;
		-moz-animation-name: windu;
		-webkit-animation-name: windu;
		-o-animation-name: windu;
		-ms-animation-name: windu;
		animation-duration: 2s;
		-moz-animation-duration: 2s;
		-webkit-animation-duration: 2s;
		-o-animation-duration: 2s;
		-ms-animation-duration: 2s;
		animation-iteration-count: infinite;
		-moz-animation-iteration-count: infinite;
		-webkit-animation-iteration-count: infinite;
		-o-animation-iteration-count: infinite;
		-ms-animation-iteration-count: infinite;
	}

	.obi-wan {
		background: rgb(55,132,214); /* Old browsers */
		background: linear-gradient(to right, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* W3C */
		background: -moz-linear-gradient(left, rgba(55,132,214,1) 0%, rgba(254,254,254,1) 30%, rgba(254,254,254,1) 47%, rgba(254,254,254,1) 71%, rgba(55,132,214,1) 100%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(55,132,214,1)), color-stop(30%,rgba(254,254,254,1)), color-stop(47%,rgba(254,254,254,1)), color-stop(71%,rgba(254,254,254,1)), color-stop(100%,rgba(55,132,214,1))); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(left, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(left, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* Opera 11.10+ */
		background: -ms-linear-gradient(left, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* IE10+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3784d6', endColorstr='#3784d6',GradientType=1 ); /* IE6-9 */
		animation-name: obi-wan;
		-moz-animation-name: obi-wan;
		-webkit-animation-name: obi-wan;
		-o-animation-name: obi-wan;
		-ms-animation-name: obi-wan;
		animation-duration: 2s;
		-moz-animation-duration: 2s;
		-webkit-animation-duration: 2s;
		-o-animation-duration: 2s;
		-ms-animation-duration: 2s;
		animation-iteration-count: infinite;
		-moz-animation-iteration-count: infinite;
		-webkit-animation-iteration-count: infinite;
		-o-animation-iteration-count: infinite;
		-ms-animation-iteration-count: infinite;
	}

	div {
		-webkit-transform : translateZ(0); 
		-o-transform : translateZ(0); 
		-moz-transform : translateZ(0); 
		transform : translateZ(0); 
	}

	/* MEDIA QUERIES */

	@media screen and (max-width: 560px) {

		.mobileForceBtn {
			margin-left: 45px;
			cursor: pointer;
		}
		.mobileNameTitle {
			font-size: 22px;
		}
		.mobileSideTitle {
			margin-left: 30%;
			font-size: 22px;
		}

		.mobileDemo {
			margin-left: 50px;
		}
		.mobileLightSaber label {
			width: 8px;
			height: 25px;
		}
		.mobileLightSaber .switch {
			width: 3px;
			height: 6px;
			bottom: 16px;
			left: 7px;
		}
		.mobileLightSaber .plasma {
			bottom: 25px;
			left: 0.2px;
			width: 7px;
		}
		.mobilexample-item {
			padding-top: 275px;
			width: 13%;
		}
		.sideName {
			font-size: 12px
		}
		.mobileName {
			font-size: 18px;
		}
		.mobileOtherPeople {
			font-size: 16px;
		}
	}

	/* Animations */
	@keyframes yoda {
		from { box-shadow: 0 0 10px #7EC855; }
		50% { box-shadow: 0 0 16px #7EC855; }
		to { box-shadow: 0 0 10px #7EC855; }
	}
	@-moz-keyframes yoda {
		from { box-shadow: 0 0 10px #7EC855; }
		50% { box-shadow: 0 0 16px #7EC855; }
		to { box-shadow: 0 0 10px #7EC855; }
	}
	@-webkit-keyframes yoda {
		from { box-shadow: 0 0 10px #7EC855; }
		50% { box-shadow: 0 0 16px #7EC855; }
		to { box-shadow: 0 0 10px #7EC855; }
	}
	@-o-keyframes yoda {
		from { box-shadow: 0 0 10px #7EC855; }
		50% { box-shadow: 0 0 16px #7EC855; }
		to { box-shadow: 0 0 10px #7EC855; }
	}
	@-ms-keyframes yoda {
		from { box-shadow: 0 0 10px #7EC855; }
		50% { box-shadow: 0 0 16px #7EC855; }
		to { box-shadow: 0 0 10px #7EC855; }
	}

	@keyframes vader {
		from { box-shadow: 0 0 10px #e51115; }
		50% { box-shadow: 0 0 16px #e51115; }
		to { box-shadow: 0 0 10px #e51115; }
	}
	@-moz-keyframes vader {
		from { box-shadow: 0 0 10px #e51115; }
		50% { box-shadow: 0 0 16px #e51115; }
		to { box-shadow: 0 0 10px #e51115; }
	}
	@-webkit-keyframes vader {
		from { box-shadow: 0 0 10px #e51115; }
		50% { box-shadow: 0 0 16px #e51115; }
		to { box-shadow: 0 0 10px #e51115; }
	}
	@-o-keyframes vader {
		from { box-shadow: 0 0 10px #e51115; }
		50% { box-shadow: 0 0 16px #e51115; }
		to { box-shadow: 0 0 10px #e51115; }
	}
	@-ms-keyframes vader {
		from { box-shadow: 0 0 10px #e51115; }
		50% { box-shadow: 0 0 16px #e51115; }
		to { box-shadow: 0 0 10px #e51115; }
	}

	@keyframes windu {
		from { box-shadow: 0 0 10px #ca74dd; }
		50% { box-shadow: 0 0 16px #ca74dd; }
		to { box-shadow: 0 0 10px #ca74dd; }
	}
	@-moz-keyframes windu {
		from { box-shadow: 0 0 10px #ca74dd; }
		50% { box-shadow: 0 0 16px #ca74dd; }
		to { box-shadow: 0 0 10px #ca74dd; }
	}
	@-webkit-keyframes windu {
		from { box-shadow: 0 0 10px #ca74dd; }
		50% { box-shadow: 0 0 16px #ca74dd; }
		to { box-shadow: 0 0 10px #ca74dd; }
	}
	@-o-keyframes windu {
		from { box-shadow: 0 0 10px #ca74dd; }
		50% { box-shadow: 0 0 16px #ca74dd; }
		to { box-shadow: 0 0 10px #ca74dd; }
	}
	@-ms-keyframes windu {
		from { box-shadow: 0 0 10px #ca74dd; }
		50% { box-shadow: 0 0 16px #ca74dd; }
		to { box-shadow: 0 0 10px #ca74dd; }
	}

	@keyframes obi-wan {
		from { box-shadow: 0 0 10px #3784d6; }
		50% { box-shadow: 0 0 16px #3784d6; }
		to { box-shadow: 0 0 10px #3784d6; }
	}
	@-moz-keyframes obi-wan {
		from { box-shadow: 0 0 10px #3784d6; }
		50% { box-shadow: 0 0 16px #3784d6; }
		to { box-shadow: 0 0 10px #3784d6; }
	}
	@-webkit-keyframes obi-wan {
		from { box-shadow: 0 0 10px #3784d6; }
		50% { box-shadow: 0 0 16px #3784d6; }
		to { box-shadow: 0 0 10px #3784d6; }
	}
	@-o-keyframes obi-wan {
		from { box-shadow: 0 0 10px #3784d6; }
		50% { box-shadow: 0 0 16px #3784d6; }
		to { box-shadow: 0 0 10px #3784d6; }
	}
	@-ms-keyframes obi-wan {
		from { box-shadow: 0 0 10px #3784d6; }
		50% { box-shadow: 0 0 16px #3784d6; }
		to { box-shadow: 0 0 10px #3784d6; }
	}
</style>