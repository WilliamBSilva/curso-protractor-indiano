/**
 * Created by Selenium on 08-12-2015.
 */
describe("Locator testing By Repeater",function(){



    it("Adding few records in a table",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("7");
        element(by.id("gobutton")).click();


        element(by.model("first")).sendKeys("4");
        element(by.model("second")).sendKeys("6");
        element(by.id("gobutton")).click();

    }) ;


       it("Printing the first row data",function(){


        console.log("Printing the first row data")

        element(by.repeater("result in memory").row(0)).getText().then(function(text){

            console.log(text);

        })

        browser.sleep(2000);
    }) ;


    it("Printing the first col data",function(){


        console.log("Printing the first col data")

        element.all(by.repeater("result in memory").column("result.timestamp")).getText().then(function(text){

            console.log(text);

        })

        browser.sleep(2000);
    }) ;


    it("Printing the Entire table data",function(){


        console.log("Printing the Entire table data")

        element.all(by.repeater("result in memory")).getText().then(function(text){

            console.log(text);

        })

        browser.sleep(2000);
    }) ;



    it("Printing the Entire table data in new line",function(){


        console.log("Printing the Entire table data in new line")

        element.all(by.repeater("result in memory")).getText().then(function(rows){

            var noOfItems = rows.length;
            for(var i=0; i<noOfItems; i++){

               var table =  element(by.repeater("result in memory").row(i)).getText();

                table.then(function(text){

                   console.log(text);

                });
            }




        })

        browser.sleep(2000);
    }) ;




});