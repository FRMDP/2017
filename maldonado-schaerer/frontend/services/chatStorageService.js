export default{
	setChatName(chatName){
		localStorage.setItem('chatName', chatName);
	},
	getChatName(){
		return localStorage.getItem('chatName') || '';
	},
	setSide(side){
		localStorage.setItem('side', side);
	},
	getSide(){
		return localStorage.getItem('side') || '';
	}
}