const blackColor =  "#0D1117";
if (1 === 1) {
    document.body.style.background = blackColor;
    // document.querySelector("._im_peer_history").style.background ="#000000";
     document.querySelector(".page_header_wrap").style.background = blackColor;
     // document.querySelector(".scroll_fix").style.background = blackColor;
    // document.querySelector(".im-page--fixer").style.background ="#000000";
    whiteTextColor();
}
function whiteTextColor ()  {
    const allText = document.querySelectorAll(".inl_bl");
    // const allTestMsg = document.querySelectorAll(".im-mess--text");
    // const allBlockDataInMsg = document.querySelectorAll(".im-page--history-new-bar");
    allText.forEach(item=>{
        item.style.color = '#fff';

    });
    // allTestMsg.forEach(item=>{
    //     item.style.color = '#fff';
    // });
    // allBlockDataInMsg.forEach(item=>{
    //     item.style.color = '#000';
    // });
}
