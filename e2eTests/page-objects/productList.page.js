import Page from "./page";

class List extends Page{
    prodNameInList(row, col) {
        return $(`.col-12-12:nth-child(${row})>div>div:nth-child(${col}) ._2B_pmu`);
    }

    discountInProdList(row, col) {
        return $(`.col-12-12:nth-child(${row})>div>div:nth-child(${col}) .VGWI6T`);
    }

    selectBrand(index) {
        return $(`._1YuAuf section:nth-child(5)>div:nth-child(2)>div>div:nth-child(${index})`);
    }

    selectRatings(index) {
        return $(`._1YuAuf section:nth-child(6)>div:nth-child(2)>div>div:nth-child(${index})`);
    }

    selectDiscount(index) {
        return $(`._1YuAuf section:nth-child(8)>div:nth-child(2)>div>div:nth-child(${index})`);
    }

    filtersText(index) {
        return $(`._1YuAuf section:nth-child(1)>div:nth-child(2)>div>div:nth-child(${index}) ._3UZZGt`);
    }

    closeFilter(index) {
        return $(`._1YuAuf section:nth-child(1)>div:nth-child(2)>div>div:nth-child(${index}) ._3TWCND`)
    }

    selectProduct(row, col) {
        return $(`.col-12-12:nth-child(${row})>div>div:nth-child(${col}) ._3togXc`);
    }
}

export default new List();