export default {
    getAllTracks(){
        if(localStorage.getItem('songs') != null){
            return JSON.parse(localStorage.getItem('songs'));
        }
        else
            return [];
    },
    getTracksById(userId){
        const arrayTemp = this.getAllTracks();
        const result = [];
        arrayTemp.forEach(t => {
            if(t.userId == userId)
                result.push(t);
        });
        return result;
    },
    saveTrack(track){
        if(!this.checkTrack(track)){
            const arrayTemp = this.getAllTracks();
            arrayTemp.push(track);
            localStorage.setItem('songs', JSON.stringify(arrayTemp));
            return true;
        }
        return false;
    },
    checkTrack(track){
        const arrayTemp = this.getAllTracks();
        return arrayTemp.find(t => (t.id == track.id && t.userId == track.userId));
    },
    quitTrack(track){
        const arrayTemp = this.getAllTracks();
        let index = 0;
        for(let i=0; i<arrayTemp.length; i++){
            if(arrayTemp[i].id == track.id && arrayTemp[i].userId == track.userId){
                index = i;
                break;
            }
        }
        arrayTemp.splice(index, 1);
        localStorage.setItem('songs', JSON.stringify(arrayTemp));
        return this.getTracksById(track.userId);
    }
}