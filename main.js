export default () => ({
    run : function() {
        function foo(){
            var a = "local";
            function baz(){
                console.log(a);
            }
            return baz;
        }
    
        var a = "global";
        var bar = foo();
        bar();
    }
});