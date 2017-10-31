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
                <h5><strong>Fast Company and BusinessWeek Former</strong></h5>
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
        <div class="row">
            <div class="col s12 m10 l8">
                <h5 class="opinionTitle">Opina que pensas de mi</h5>
                <input  placeholder="Ej: Que buenos reportajes.." v-model="comment" type="text"/>
                <button class="waves-effect btn orange darken-2" 
                    @click="addComment()">
                    Opina <i class="material-icons right">comment</i>
                </button>
                <div class="alert" id="newsAlert" v-show="message == true">
                    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                    <h6 class="alertAdvice">Gracias por tu comentario!</h6>
                </div>
                <h5 class="otherComments">Otros comentarios</h5>
                <h6 class="noComments" v-if="!comments.length">Nadie ha comentado nada aun.</h6>
                <ul>
                    <li v-for="com in comments">
                        <p>{{ com.comment }}</p>
                        <p class="dateComment">El dia {{ com.date }}</p>
                    </li>
                </ul>
            </div>
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
                comments: [],
                message: false
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
                        this.socket.emit('get.comments', this.reporter.uid);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            addComment() {
                this.socket.emit('add.comment', {
                    id: this.reporter.uid,
                    comment: this.comment,
                    date: new Date().toJSON().slice(0, 10)
                });
                this.comment = '';
                this.message = true;
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
                /*Haciendo console log tanto de "comments", como de "this.comments"
                    me muestra los datos que me devuelve el array del server.
                    Pero en "Vue DevTools" no tiene nada el array */
                this.comments = comments;
            });
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
    .otherComments {
        text-align: center;
        margin-top: 30px;
    }
    .dateComment {
        color: grey;
        margin-top: 5px;
        text-align: right;
    }
    .noComments {
        margin-top: 25px;
    }
    .alert {
        width: 300px;
        margin-top: 25px;
        margin-bottom: 10px;
        background-color: #f57c00;
        padding: 20px;
        color: black;
        font-weight: bold;
        border-radius: 2px;
    }
    .alertAdvice {
        color: white;
    }
    .closebtn {
        margin-left: 15px;
        color: black;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;
    }
    .closebtn:hover {
        color: white;
    }
    .opinionTitle {
        margin-bottom: 15px;
    }
</style>