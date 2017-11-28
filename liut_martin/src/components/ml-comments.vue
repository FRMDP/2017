<template>
	<el-row>
		<el-col :span="20" :offset="2">
			<h1>Dejanos tu comentario sobre la página</h1>
			<el-form @submit.stop.prevent="onSubmit" ref="form" :model="comment" label-width="120px">
				<el-form-item label="Nombre">
					<el-input type="text" v-model="comment.name" placeholder="Nombre"></el-input>
				</el-form-item>
				<el-form-item label="Comentario">
					<el-input type="textarea" v-model="comment.comment" placeholder="Comentario" max="500"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit" class="btnComment">Comentar</el-button>
				</el-form-item>
			</el-form>
			<h1>Comentarios({{comments.length}})</h1>
			<div v-if="comments.length != 0">
				<el-card v-for="(comment, index) in comments" :key="index">
					<div class="card-body">
						<h3>{{comment.name}} <label><i class="el-icon-time"></i>{{comment.date}}</label></h3>
						<div class="div"></div>
						<p>{{comment.comment}}</p>
					</div>
				</el-card>
			</div>
			<h4 v-else>No hay comentarios</h4>
		</el-col>
	</el-row>
</template>

<script>
	import commentsService from '../services/commentsService';
	import io  from 'socket.io-client'
	const dateFormat = require('dateformat');

	export default {
		name: 'mlComments',
		data() {
			return {
				comment: {
					name   : '',
					comment: '',
					date   : ''
				},
				comments: [],
				socket  : ''
			}
		},
		methods: {
			onSubmit() {
				this.comment.date = dateFormat(new Date(), "dddd, mmmm dS, yyyy (h:MM:ss TT)");
				commentsService.save(this.comment);
				this.socket.emit('page.comment', this.comment);
				this.cleanFormComment();
				this.showMessage();
			},
			cleanFormComment() {
				this.comment.name    = '';
				this.comment.comment = '';
				this.comment.date    = '';
			},
			showMessage() {
				this.$message({
					message: 'Gracias por dejar tu comentario',
					type: 'success'
				});
			}
		},
		created() {
			this.comments = commentsService.all();

			this.socket = io("http://localhost:3000");
			this.socket.on('page.comment', (response) => {
				this.comments.unshift(response);
			});
		}
	}
</script>

<style scoped>
.btnComment {
	float: right;
	color: #fff;
}

h3 {
	text-align: left;
	font-weight: bold;
	margin-bottom: 5px;
}

h4 { text-align: center; }

h3 label {
	font-size: 0.7em;
	color: rgba(1, 1, 1, .4);
	float: right;
	font-weight: 500;
}

.el-icon-time { margin-right: 5px; }

.el-card { min-height: auto; }
</style>