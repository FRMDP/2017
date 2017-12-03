<template>
	<footer>
		<form novalidate @submit.stop.prevent="submit" class="sheet">
			<md-input-container>
				<md-icon>face</md-icon>
				<label>User name</label>
				<md-input v-model="comment.userName" maxlength="20" required></md-input>
			</md-input-container>
			<md-input-container>
				<md-icon>chat</md-icon>
				<label>Leave us your comments</label>
				<md-input v-model="comment.msj" maxlength="100" required></md-input>
			</md-input-container>
			<md-button class="md-primary" type="submit"><md-icon class="md-primary">send</md-icon> Send</md-button>
		</form>
		<div v-if="comments.length" id="comments_container">
			<md-list class="custom-list md-triple-line">
				<md-list-item v-for="c in comments" :key="c.userName">
					<md-avatar class="md-large">
						<md-icon>face</md-icon>
					</md-avatar>

					<div class="md-list-text-container">
						<span>{{ c.userName }}</span>
						<p>{{ c.msj }}</p>
						<p>{{ c.date }}</p>
					</div>
					<md-button class="md-icon-button md-list-action">
						<md-icon class="md-primary">star</md-icon>
					</md-button>

					<md-divider class="md-inset"></md-divider>
				</md-list-item>
			</md-list>
		</div>
	</footer>
</template>

<script>
	import Vue from 'vue'
	import io  from 'socket.io-client'
	const dateFormat = require('dateformat');

	export default {
		name: 'mlFooter',
		data() {
			return {
				comment: {
					msj     : '',
					userName: '',
					date    : ''
				},
				comments: [],
				socket  : ''
			}
		},
		methods: {
			submit() {
				const day = new Date();
				this.comment.date = dateFormat(day, "dddd, mmmm dS, yyyy (h:MM:ss TT)");
				this.socket.emit('page.comment', this.comment);
				this.cleanComment();
			},
			cleanComment() {
				this.comment.msj      = '';
				this.comment.userName = '';
				this.comment.date     = '';
			}
		},
		created() {
			this.socket = io("http://localhost:3000");

			this.socket.on('page.comment', (response) => {
				this.comments.push(response.comment);
			});
		}
	}
</script>

<style>
	footer {
		padding : 20px;
		position: relative;
		bottom  : 0px;
		left    : 0px;
		width   : 100%;
		background-color: dimgrey;
	}

	footer input {
		color: #fff !important;
	}

	#comments_container {
		margin-top: 15px;
	}

	.sheet {
		padding: 10px;
		background-color: rgba(255, 255, 255, .15);
		border-radius: 7px;
		text-align: right;
	}

	.md-theme-default.md-button:not([disabled]).md-primary:not(.md-icon-button) {
		border: 1.5px solid rgba(255, 255, 255, .2);
		margin: 20px auto 0px;
	}
</style>