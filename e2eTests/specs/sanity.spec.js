import testData from "../constants/testData.json";
import { expect } from 'chai';
import Cart from "../page-objects/cart.page";
import Login from "../page-objects/login.page";
import Home from "../page-objects/home.page";
import List from "../page-objects/productList.page";
import Details from "../page-objects/productDetails.page";
import Order from "../page-objects/order.page";

describe("Flipkart", () => {
  it('User should "Login" to an application', async() => {
    browser.url(testData.cart.url);
    browser.windowHandleFullscreen();
    Login.mobileNoField.waitForVisible();
    Login.mobileNoField.setValue(testData.login.username);
    Login.pwdField.setValue(testData.login.password);
    Login.loginBtnInPopup.click();
    Home.userNameInTopBar.waitForVisible();
    expect(Home.userNameInTopBar.getText()).to.eql(testData.user.username);
  });

  it('User can search the product based on "Brand"', async() => {
    Home.searchBar.waitForVisible();
    Home.searchBar.click();
    browser.keys(testData.products.shoes);
    browser.keys("Enter");
    List.prodNameInList(2, 1).waitForVisible();
    browser.scroll(0, 500);
    List.selectBrand(2).waitForVisible();
    List.selectBrand(2).click();
    List.prodNameInList(2, 1).waitForVisible();
    List.filtersText(1).waitForVisible();
    expect(List.filtersText(1).getText()).to.eql(testData.brand.puma);
    expect(List.prodNameInList(2, 1).getText()).to.eql(testData.brand.puma);
    expect(List.prodNameInList(2, 4).getText()).to.eql(testData.brand.puma);
    expect(List.prodNameInList(11, 1).getText()).to.eql(testData.brand.puma);
    expect(List.prodNameInList(11, 1).getText()).to.eql(testData.brand.puma);
    List.closeFilter(1).waitForVisible();
    List.closeFilter(1).click();
    browser.pause(2000);
  });

  it('User can search the product based on the "User ratings"', async() => {
    List.selectRatings(1).waitForVisible();
    browser.scroll(0, 600);
    List.selectRatings(1).click();
    List.filtersText(1).waitForVisible();
    expect(List.filtersText(1).getText()).to.eql("4★ & above");
    List.selectProduct(2, 2).waitForVisible();
    List.selectProduct(2, 2).click();
    var tabIds = browser.getTabIds();
    browser.switchTab(tabIds[1]);
    Details.productRating.waitForVisible();
    var rating = Details.productRating.getText();
    rating = parseFloat(rating);
    expect(rating >= 4);
    browser.close();
    browser.switchTab(tabIds[0]);
    List.closeFilter(1).waitForVisible();
    List.closeFilter(1).click();
    browser.pause(2000);
  });

  it('User can search the product based on the "Discount"', async() => {
    List.selectDiscount(5).waitForVisible();
    browser.scroll(0, 1000);
    List.selectDiscount(5).click();
    List.filtersText(1).waitForVisible();
    expect(List.filtersText(1).getText()).to.eql("50% or more");
    var discount = List.discountInProdList(2, 1).getText();
    discount = discount.split("%");
    discount = discount[0];
    expect(discount >= 50);
    discount = List.discountInProdList(11, 1).getText();
    discount = discount.split("%");
    discount = discount[0];
    expect(discount >= 50);
    List.closeFilter(1).waitForVisible();
    List.closeFilter(1).click();
    browser.pause(2000);
  });

  it('user can search the product based on the user "Ratings", "Brand" and "Discount"', async() => {
    List.selectBrand(2).waitForVisible();
    List.selectBrand(2).click();
    browser.pause(2000);
    List.selectRatings(1).waitForVisible();
    browser.scroll(0, 600);
    List.selectRatings(1).click();
    browser.pause(2000);
    List.selectDiscount(3).waitForVisible();
    List.selectDiscount(3).click();
    browser.pause(2000);
    List.filtersText(3).waitForVisible();
    expect(List.filtersText(3).getText()).to.eql(testData.brand.puma);
    List.filtersText(2).waitForVisible();
    expect(List.filtersText(2).getText()).to.eql("30% or more");
    var discount = List.discountInProdList(2, 1).getText();
    discount = discount.split("%");
    discount = discount[0];
    expect(discount >= 30);
    discount = List.discountInProdList(11, 1).getText();
    discount = discount.split("%");
    discount = discount[0];
    expect(discount >= 30);
    List.filtersText(1).waitForVisible();
    expect(List.filtersText(1).getText()).to.eql("4★ & above");
    List.selectProduct(2, 2).waitForVisible();
    List.selectProduct(2, 2).click();
    var tabIds = browser.getTabIds();
    browser.switchTab(tabIds[1]);
    Details.productRating.waitForVisible();
    var rating = Details.productRating.getText();
    rating = parseFloat(rating);
    expect(rating >= 4);
    browser.close();
    browser.switchTab(tabIds[0]);
    expect(List.prodNameInList(2, 1).getText()).to.eql(testData.brand.puma);
    expect(List.prodNameInList(11, 1).getText()).to.eql(testData.brand.puma);
  });

  it('User can add product to the "Cart"', async() => {
    Home.logo.waitForVisible();
    Home.logo.click();
    Home.searchBar.waitForVisible();
    Home.searchBar.click();
    browser.keys(testData.products.watches);
    browser.keys("Enter");
    List.selectProduct(2, 1).waitForVisible();
    var brandName = List.prodNameInList(2, 1).getText();
    List.selectProduct(2, 1).click();
    var tabIds = browser.getTabIds();
    browser.switchTab(tabIds[1]);
    var prodName = Details.productName.getText();
    prodName = brandName + " " + prodName;
    Details.addToCartBtn.waitForVisible();
    Details.addToCartBtn.click();
    Cart.prodNameInCart(2).waitForVisible();
    var prodNameInCart = Cart.prodNameInCart(2).getText();
    expect(prodName).to.eql(prodNameInCart);
  });

  it('User can remove added products from the "Cart"', async() => {
    Cart.removeBtnInCart(2).waitForVisible();
    Cart.removeBtnInCart(2).click();
    Cart.removeBtnInPopup.waitForVisible();
    Cart.removeBtnInPopup.click();
    browser.pause(2000);
    expect(Cart.prodNameInCart(2).isVisible()).to.eql(false);
  })

  it('User can place the order', async() => {
    Home.searchBar.waitForVisible();
    Home.searchBar.click();
    browser.keys(testData.products.watches);
    browser.keys("Enter");
    List.selectProduct(2, 1).waitForVisible();
    List.selectProduct(2, 1).click();
    var tabIds = browser.getTabIds();
    browser.switchTab(tabIds[2]);
    Details.buyNowBtn.waitForVisible();
    Details.buyNowBtn.click();
    Order.continueToPaymentBtn.waitForVisible();
    Order.continueToPaymentBtn.click();
    Order.continueBtnInPayment.waitForVisible();
    expect(Order.continueBtnInPayment.isVisible()).to.eql(true);
  });

  it("Should remove added product from cart", async() => {
    var tabIds = browser.getTabIds();
    browser.switchTab(tabIds[0]);
    Home.cartBtn.waitForVisible();
    Home.cartBtn.click();
    Cart.removeBtnInCart(2).waitForVisible();
    Cart.removeBtnInCart(2).click();
    Cart.removeBtnInPopup.waitForVisible();
    Cart.removeBtnInPopup.click();
    browser.pause(2000);
    expect(Cart.prodNameInCart(2).isVisible()).to.eql(false);
  })
});