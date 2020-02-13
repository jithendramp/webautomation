class Page {
  open(path) {
    browser.url("/" + path);

    browser.windowHandleFullscreen();
  }

  // relative path checking
  getUrl(url) {
    const browserUrl = browser.getUrl();
    // get the relative path instead of domain.com/url , you get /url
    return browserUrl.replace(/^(?:\/\/|[^/]+)*\//, "/");
  }

  randomNumbers() {
    var str = Math.random();
    var randomNumbers = String(str).substr(10, 4);
    return randomNumbers;
  }

  randomName() {
    var text = "";
    var prefix = "";
    var alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
    var alphabets = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
      text += alphaNumeric.charAt(
        Math.floor(Math.random() * alphaNumeric.length)
      );
    prefix += alphabets.charAt(Math.floor(Math.random() * alphabets.length));
    var ranNum = this.randomNumbers();
    return text + prefix + ranNum;
  }
}
export default Page;
