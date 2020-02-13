import Page from "./page";

class Details extends Page{
    get productName() {
        return $("._29OxBi h1 span:nth-child(2)");
    }
    
    get productRating() {
        return $(".hGSR34.bqXGTW");
    }

    get addToCartBtn() {
        return $("._2AkmmA._2Npkh4._2MWPVK");
    }

    get buyNowBtn() {
        return $("._2AkmmA._2Npkh4._2kuvG8._7UHT_c");
    }
}

export default new Details();