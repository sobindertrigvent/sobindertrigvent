chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    let myarray = [];
    
    if(message.action === "Change"){
       
        let nameClass = document.getElementsByClassName('pv-text-details__left-panel')
        var user_name = nameClass[0].getElementsByTagName("h1")[0].innerText;
        var work = document.getElementsByClassName('text-body-medium break-words');
        var wrk = work[0].innerText;

        // console.log(user_name);
        // console.log(work[0].innerText);
        myarray.push(user_name);
        myarray.push(wrk);

        setTimeout(() => {
            chrome.runtime.sendMessage({"type":"action","datails":myarray});
            // chrome.runtime.sendMessage({"type":"action", 'name':user_name , 'work':wrk});
            
        console.log(myarray);
        }, 1000);
    }

    
// let nameClass = document.getElementsByClassName('pv-text-details__left-panel')
// var user_name = nameClass[0].getElementsByTagName("h1")[0].innerText;
// console.log(user_name);

// chrome.runtime.sendMessage({'type':'name','userName':user_name});

// chrome.storage.sync.set({ "name": user_name });
})



