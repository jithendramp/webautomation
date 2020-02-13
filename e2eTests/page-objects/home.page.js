import Page from "./page";

class Home extends Page{
    get userNameInTopBar() {
        return $("._3pNZKl>div:nth-child(3) ._2aUbKa");
    }
    
    get searchBar() {
        return $(".col-12-12._2tVp4j .O8ZS_U");
    }

    get logo(){
        return $("._3dGepu img");
    }

    get cartBtn() {
        return $("._1jcwFN a");
    }
}

export default new Home();