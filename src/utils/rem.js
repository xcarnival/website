const setHtmlFontSize = () => {
    const htmlDom = document.getElementsByTagName('html')[0];
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (htmlWidth >= 750) {
        htmlWidth = 750;
    }
    if (htmlWidth <= 320) {
        htmlWidth = 320;
    }

    htmlDom.style.fontSize = `${htmlWidth / 3.75}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();