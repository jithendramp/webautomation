import Page from "./page";

class Cart extends Page{

    get removeBtnInPopup() {
        return $(".row.LFy2Lc>div>div:nth-child(2)");
    } 

    removeBtnInCart(index) {
        return $(`.col-12-12>div:nth-child(${index}) ._2x63a8 div:nth-child(2)`);
    } 

    prodNameInCart(index) {
        return $(`._1HmYoV._35HD7C.col-12-12>div:nth-child(${index}) ._3vIvU_ a`)
    } 
}

export default new Cart();