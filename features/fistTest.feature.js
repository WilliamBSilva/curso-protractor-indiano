describe("Test entering into an input box", function() {


    it("executing input box test", function(){
        browser.get("https://www.angularjs.org")
        element(by.model("yourName")).sendKeys("William")
        element(by.binding("yourName")).getText().then(function(text){
            console.log(text)
        })
    })
})