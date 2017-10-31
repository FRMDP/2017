<template>
    <div class="container">
    	<div class="row">
            <div class="col s4 m4 l4">
                <img class="reporter" src="https://picsum.photos/200/200/?random">
            </div>
            <div class="col s8 m8 l8">
                <h4>{{ reporter.name }}</h4>
                <h6 class="left-align info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, ratione, recusandae! Voluptate eos soluta, praesentium modi animi architecto quam! Repellat nam incidunt pariatur, aspernatur, perferendis nisi. Blanditiis adipisci odio laboriosam.</h6>
            </div>
        </div>
        <div class="row personal_info">
            <div class="col s6 m6 l6">
                <h5><strong>Fast Company and BusinessWeek Former Editor</strong></h5>
                <h6>C-Change Media Inc.   University of Missouri-Columbia</h6>
                <h6>Bahia de San Francisco y alrededores, Estados Unidos</h6>
            </div>
            <div class="col s6 m6 l6">
                <div class="icons">
                    <div class="col s4 m6 l6 push-s1 push-m2 push-l2">
                        <a class="btn-floating waves-effect waves-dark #1a237e indigo darken-4">
                            <i class="fa fa-facebook-official"></i>
                        </a>
                        <a class="btn-floating waves-effect waves-dark #039be5 light-blue darken-1">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a class="btn-floating waves-effect waves-dark #fb8c00 orange darken-1">
                            <i class="fa fa-instagram"></i>
                        </a>
                        <a class="btn-floating waves-effect waves-dark #ffeb3b yellow">
                            <i class="fa fa-snapchat"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <input v-model="comment" type="text"/>
            <button class="btn" @click="addComment()">Share an opinion!</button>
            <ul>
                <li v-for="comment in comments">
                    {{comment}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import config from './../configuration/application';

    export default {
        name: 'fmReporter',
        data() {
            return {
                reporter: {},
                socket: '', 
                comment: '',
                comments: []
            }
        },
        computed: {
            id() {
                return this.$route.params.id;
            }
        },  
        methods: {
            getReporter() {
                this.$http.get('http://192.168.99.100:8080/reporters')
                    .then((response) => {
                        this.reporter = response.data._embedded.reporters.find(reporter => this.id == reporter.uid);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            addComment() {
                this.socket.emit('add.comment', this.comment);
            },
            getComments() {
                this.socket.emit('get.comments', this.comments);
            }
        },
        watch: {
            '$route.params.id': function() {
                this.getReporter();
            }
        },
        created() {
            this.getReporter();
            this.socket = this.$socket(config.websocket_url);
            this.socket.on('add.comment', (comments) => {
                this.comments = comments;
            });
            this.socket.on('get.comments', (comments) => {
                this.comments = comments;
            })
        },
        mounted() {
            this.getComments();
        }
    }
</script>

<style>
    .reporter {
        border-radius: 50%;
    }
    .info {
        padding-top: 40px;
    }
    .icons {
        margin-top: 40px !important;
    }
    .personal_info {
        margin-top: 100px;
    }
</style>