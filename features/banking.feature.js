describe("Test automation banking app", function() {


    it("validate customer login test", function(){
        browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login")
        element(by.buttonText("Customer Login")).click()
        browser.sleep(3000)
        expect(browser.getTitle()).toContain("Protractor practice")
        element.all(by.css("#userSelect option")).then(function(items){
            
            // Printing values from dropdown list
            console.log("-----Printing values from dropdown list-----")
            console.log("Total values in dropdown are: " + items.length)
            for(i=0; i<items.length; i++){
                items[i].getText().then(function(text){
                    console.log(text)
                })
            }

            // Printing attributes from dropdown list
            console.log("-----Printing attributes from dropdown list-----")
            for(i=0; i<items.length; i++){
                items[i].getAttribute("value").then(function(text){
                    console.log(text)
                })
            }

        //  element(by.model("custId")).element(by.css("[value='2']")).click()
            element(by.model("custId")).$("[value='2']").click()
            browser.sleep(3000)
            element(by.buttonText("Login")).click()

          /*  element(by.binding("user")).getText().then(function(text){
                console.log(text)
            })*/

            expect(element(by.binding("user")).getText()).toEqual("Harry Potter")
        })
    })
})