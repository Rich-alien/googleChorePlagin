const blackColor = "#0D1117";
if (1 === 1) {
    document.body.style.background = blackColor;
    document.querySelector(".page_header_wrap").style.background = blackColor;
    document.querySelector(".HeaderNav__item--logo").remove();
    //реализовать через пару секунд , после рендера страницы;
    // document.querySelector(".ads_ads_box").remove()
    let profileName = document.querySelector(".top_profile_name");

    gradientText(profileName);
    whiteTextColor();
}

function whiteTextColor() {
    const allText = document.querySelectorAll(".inl_bl");
    const allUsersShaitans = document.querySelectorAll("._im_dialog_link");
    allText.forEach(item => {
        item.style.color = '#fff';

    });
    allUsersShaitans.forEach((item,i)=>{

        item.innerHTML = "Шайтан"
    })
}
function gradientText(template){
    template.style.color = "purple";
    // template.style.background = "linear-gradient(45deg, #0B2349 33%, #0D61BC 66%, #8AA9D6)";

}
