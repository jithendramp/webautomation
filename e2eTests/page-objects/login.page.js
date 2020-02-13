import Page from "./page";

class Login extends Page{
    get mobileNoField() {
        return $(".Km0IJL.col.col-3-5 >div>form>div:nth-child(1) input");
    }

    get pwdField() {
        return $(".Km0IJL.col.col-3-5 >div>form>div:nth-child(2) input");
    }

    get loginBtnInPopup() {
        return $(".Km0IJL.col.col-3-5 >div>form>div:nth-child(3) button");
    }
}

export default new Login();