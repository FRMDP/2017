<template>
    <div id="promatches">
        <div class="row" v-if="loading">
            <div class="col-sm-10 offset-sm-1">
                <div class="wrapper">
                    <div class="cssload-loader"></div>
                </div>
            </div>
        </div>
        <div class="row" v-else align="center">
            <div class="col-sm-10 offset-sm-1">
                <h3>Match Info</h3>
                <table class="table table-responsive-md table-stripped">
                    <thead>
                    <tr>
                        <th>Match ID</th>
                        <th>Winner</th>
                        <th>Duration</th>
                        <th>Dire Team</th>
                        <th>Radiant Team</th>
                        <th>Dire Score</th>
                        <th>Radiant Score</th>
                        <th>League Name</th>
                    </tr>
                    </thead>
                </table>
                <table class="table table-responsive-md table-stripped">
                    <thead>
                    <tr>
                        <th>Players</th>
                        <th>Hero</th>
                        <th>Gold per min</th>
                        <th>XP per min</th>
                        <th>Kills</th>
                        <th>Deaths</th>
                        <th>Assists</th>
                        <th>Max level</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    
</script>
<style>
    
</style>