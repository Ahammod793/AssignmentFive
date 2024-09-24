function his(id){
    const popUpWindow = document.getElementById('mockup-window');
    popUpWindow.classList.remove('hidden');
            popUpWindow.classList.add('flex');
    const confirmation= document.getElementById('closeConfirmation');
            confirmation.addEventListener('click', function(){
               
                popUpWindow.classList.add('hidden');

                const Gethistory = document.getElementById('histories');
                const historyInnerDiv = document.createElement('div');
                historyInnerDiv.classList.add('p-7','border-2','border-gray-10','rounded-2xl');
                Gethistory.appendChild(historyInnerDiv);

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
historyContainer('noakhali')
                historyContainer('feni')
                historyContainer('quota')
                historyContainer('rahinga')
                historyContainer('dengue')