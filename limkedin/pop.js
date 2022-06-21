var btn = document.getElementById('btn');

btn.addEventListener("click",function(){
  
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        if(activeTab.url.indexOf("linkedin.com")!=-1){
            chrome.tabs.sendMessage(activeTab.id, {"action":"Change"});
            console.log(activeTab)
        }
        else{
            window.open("https://www.linkedin.com")
        }
    });
   
})

chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    if(message.type == 'action'){
        let user_details = message.datails
        document.getElementById('name').value=user_details[0];
        document.getElementById('work').value=user_details[1 ];
    }
})

//btn.addEventListener("click",function(){
    
//     chrome.storage.sync.get(["name"], function (result) {
//         console.log(result)
//     })

 
// //})



// chrome.storage.sync.set({ "login": "no" });
