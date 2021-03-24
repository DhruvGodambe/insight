function showDropdown() {
    const displayEle  = document.getElementsByClassName("mobile-list")[0];
    const style = getComputedStyle(displayEle);
    console.log(typeof(style.height))
    if( parseInt(style.height) == 0) {
        displayEle.style.height = "auto"
    } else {
        displayEle.style.height = "0"
    }
}