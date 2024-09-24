document.getElementById('donatBG').addEventListener('click', function(){
    document.getElementById('historyContainer').classList.add('hidden');
    document.getElementById('DonationBody').classList.remove('hidden');
});
document.getElementById('historyBG').addEventListener('click', function(){
    document.getElementById('historyContainer').classList.remove('hidden');
    document.getElementById('DonationBody').classList.add('hidden');
});

// to set default button I have taken help from ChatGPT
// the code is blow coppied from chatGPT
window.onload = function() {
    document.getElementById('donatBG').click();
};
