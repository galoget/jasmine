describe("Jasmine Testing GL", function() {
    it("should say hello", function() {
        expect(helloWorld()).toEqual("Hello world!");
    });

    it("should return 14 (5+9)", function(){
    	expect(addTwoNumbers(5,9)).toEqual(14);
    });
});