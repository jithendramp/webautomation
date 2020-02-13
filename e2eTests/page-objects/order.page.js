import Page from "./page";

class Order extends Page{
    get continueToPaymentBtn() {
        return $("#to-payment button");
    }
    
    get continueBtnInPayment() {
        return $("._3Mx57r button");
    }
}

export default new Order();