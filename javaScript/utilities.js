// call the history button and the donation button
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

// select the donation amount and return the number
function donationSelect(id){
    let AmountTag = document.getElementById(id);
    if(AmountTag.tagName ==='INPUT'){
        const  Amount = AmountTag.value;
        return parseFloat(Amount);
    }
    const Amount = AmountTag.innerText;
    return parseFloat(Amount);
};

// return the total donation amount for called section
function DonationBallence(id){
    const TotalDonatForEach_String = document.getElementById(id).innerText;
    const TotalDonatForEach_Number = parseFloat(TotalDonatForEach_String);
    return TotalDonatForEach_Number;
};
//  my available balance
function myCash(id){
    const BallenceInAccount = document.getElementById(id).innerText;
    const BallanceInNumber = parseFloat(BallenceInAccount);
    return BallanceInNumber;
};



//   this is a calculation function that calculates the donation ballance, total donation and ballance in my account
function sectionCalled(idButton,idInput,idTotal,donateFor){
    document.getElementById(idButton).addEventListener("click",function(event){
        event.preventDefault();

        const getDonationAmount = donationSelect(idInput);
        const innerTextOfEachSection = DonationBallence(idTotal);
        const currentBallence = myCash('MyBallence');
        const donateForElement = document.getElementById(donateFor).innerText;

        if(currentBallence >= getDonationAmount && getDonationAmount >= 0){
            const updateBallence = currentBallence - getDonationAmount;
            const popUpWindow = document.getElementById('mockup-window');
            document.getElementById('MyBallence').innerText = updateBallence;
            document.getElementById(idTotal).innerText = innerTextOfEachSection + getDonationAmount;
            popUpWindow.classList.remove('hidden');
            popUpWindow.classList.add('flex');

            const confirmation= document.getElementById('closeConfirmation');
            confirmation.addEventListener('click', function(){
                popUpWindow.classList.add('hidden');

                const Gethistory = document.getElementById('histories');
                const historyInnerDiv = document.createElement('div');
                Gethistory.appendChild(historyInnerDiv);
                historyInnerDiv.classList.add('p-7','border-2','border-gray-10','rounded-2xl');
                

                const title = document.createElement('h1');
                title.classList.add('pb-4','text-xl','font-bold','leading-8','text-[#111111]');
                title.innerText = `${getDonationAmount} Taka is Donated for ${donateForElement}`;
                historyInnerDiv.appendChild(title);

                const donateTime = new Date();
                const paragraph = document.createElement('p');
                paragraph.classList.add('text-[16px]','font-light','leading-7','text-[#111]/70');
                paragraph.innerText = `Date : ${donateTime}`;
                historyInnerDiv.appendChild(paragraph);

                
            });
            
        }
        else{
            alert('Insufficient Funds or Invalid Amount');
        }
        
    
    })
};

//  history and donation buttons are called by this parameter bellow
Buttons('donatBG','historyBG');

//  this parameter used for SectionCalled() function 
sectionCalled('button-donat1', 'donatAmountFirst', 'totalDonation1', 'noakhali');
sectionCalled('button-donat2', 'donatAmountSecond', 'totalDonation2', 'feni');
sectionCalled('button-donat3', 'donatAmountThird', 'totalDonation3', 'quota');
sectionCalled('button-donat4', 'donatAmountFourth', 'totalDonation4', 'rahinga');
sectionCalled('button-donat5', 'donatAmountFifth', 'totalDonation5', 'dengue');

