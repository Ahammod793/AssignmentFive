document.getElementById('donatBG').addEventListener('click', function(){
    document.getElementById('historyContainer').classList.add('hidden');
    document.getElementById('DonationBody').classList.remove('hidden');
});
document.getElementById('historyBG').addEventListener('click', function(){
    document.getElementById('historyContainer').classList.remove('hidden');
    document.getElementById('DonationBody').classList.add('hidden');
});