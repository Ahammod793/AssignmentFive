function Buttons(id1, id2) {
    const donatBG = document.getElementById(id2);
    const historyBG = document.getElementById(id1);
    donatBG.addEventListener('click', function() {
        donatBG.style.backgroundColor = '#94c539';
        historyBG.style.backgroundColor = '';
    });
    historyBG.addEventListener('click', function() {
        historyBG.style.backgroundColor = '#94c539';
       donatBG.style.backgroundColor = '';
    });
};

Buttons('donatBG','historyBG');