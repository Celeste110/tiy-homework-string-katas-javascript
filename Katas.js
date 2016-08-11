    /**
     * Created by katherine_celeste on 8/10/16.
     */
    function Kata()
    {

        // Given a string, return a new string where spaces have been inserted between each letter.
        // Do not include any additional spaces before the first character or after the last character.
        this.explode = function (a)
        {
            var temp = "";
            for(var i = 0; i < a.length; i++)
            {
                    temp+= a.charAt(i);

                if (i < a.length-1) temp+= " "; //exclude space after last char

            }
            return temp;
        }

    // Given a string, return a new string where "not " has been added to the front. However,
    // if the string already begins with "not", return the string unchanged.
        this.notString = function (a)
        {
            if((a.length >=3) && (a.substring(0,3)==("not")))
            {
            return a;
             }
        else
        {
            var b = "not";
            b+= " " + a;
            return b;
        }
    }

    // Given a non-empty string and an integer, return a new string where the character at the specified
    // index has been removed. The specified index will be a valid index of in the original string (IE.
    // n will be in the range 0 .. str.length()-1 inclusive).
    this.missingChar = function (a, b)
    {
        var partA = a.substring(0,b);
        var partB = a.substring(b+1, a.length);
        return partA+partB;
    }

    // Given a string, return a new string where the first and last characters have been exchanged.
   this.frontBack = function (a)
    {
        var sub ="";
        var first = a.charAt(0);
        var last = a.charAt(a.length-1);
        if (a.length==1)
        {return a}
        else if (a.length>2) {sub = a.substring(1,a.length-1);}
        var finalString = last + sub + first;
        return finalString;
    }

    // Given a string, we'll say that the front is the first 3 characters of the string.
    // If the string length is less than 3, the front is whatever is there. Return a new
    // string which is 3 copies of the front.
    this.front3 = function (a)
    {
        var front = "";
        if (a.length<3) front = a;
        else front = a.substring(0,3);

        front = front + front + front;

        return front;

    }

    // Given a string, take the last character and return a new string with the last character
    // added at the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.
    this.backAround = function (a){
        var b = a.charAt(a.length-1);
        var c = b + a +b;
        return c;
    }

    // Given a string, take the first 2 characters and return the string with the 2 characters added at both
    // the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever
    // characters are there.
    this.front22 = function (a){
        var b;
        if (a.length<2) b = a;
        else b = a.substring(0, 2);
        var c = b + a +b;
        return c;
    }

    // Given a string, if the string "del" appears starting at index 1, return a
    // string where that "del" has been deleted. Otherwise, return the string unchanged.
    this.delDel = function (a){
        if (a.substring(1,4) == ("del"))
        {
            return a.charAt(0)+ a.substring(4, a.length)
        }
        else return a;
    }

    // Given a string, return a string made of the first 2 characters (if present), however include
    // first char only if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz".
    this.startOz = function (a)
    {
        var b = "";

        if(a.length>=2)
        {
            if (a.charAt(0)=='o') b = "" + 'o'
            if (a.charAt(1)=='z') b+= 'z'
            else return (a.substring(0,2))
        }

        return b;
    }

    //Given a string, return a new string where the last 3 characters are now in upper case.
    // If the string has less than 3 characters, uppercase whatever is there.
        this.endUp = function (a)
    {
        if (a.length<3)
        {
            return a.toUpperCase()
        }
        else
        {
            var b = a.toUpperCase()
            return a.substring(0, a.length-3) + b.substring(a.length-3, a.length)
        }
    }

    }

    var Kata = new Kata()

    // 1. call explode
    console.log("Kata.explode(\"example\") -> "+Kata.explode("example")); // "e x a m p l e"
    console.log("Kata.explode(\"example\") -> "+Kata.explode("cat")); // "c a t"
    console.log("Kata.explode(\"\") -> " + Kata.explode("")); // ""
    console.log("Kata.explode(\"c\") -> "+Kata.explode("c\n")); // "c"


    // 2. call notString
    console.log("Kata.notString(\"candy\") -> "+Kata.notString("candy")); // "not candy"
    console.log("Kata.notString(\"x\") -> "+Kata.notString("x")); // "not x"
    console.log("Kata.notString(\"not bad\") -> "+Kata.notString("not bad")); // "not bad"


    // 3. call missingChar
    console.log("Kata.missingChar(\"kitten\", 1) -> " + Kata.missingChar("kitten", 1)); // "ktten"
    console.log("Kata.missingChar(\"kitten\", 0) -> "+Kata.missingChar("kitten", 0)); // "itten"
    console.log("Kata.missingChar(\"kitten\", 4) -> " + Kata.missingChar("kitten", 4)); // "kittn"
    console.log();

    // 4. call frontBack
    console.log("Kata.frontBack(\"code\") -> "+Kata.frontBack("code")); // "eodc"
    console.log("Kata.frontBack(\"a\") -> " + Kata.frontBack("a")); // "a"
    console.log("Kata.frontBack(\"ab\") -> " + Kata.frontBack("ab")); // "ba"
    console.log();

    // 5. call front3
    console.log("Kata.front3(\"Java\") -> " + Kata.front3("Java")); // "JavJavJav"
    console.log("Kata.front3(\"Chocolate\") -> "+Kata.front3("Chocolate")); // "ChoChoCho"
    console.log("Kata.front3(\"abc\") -> " + Kata.front3("abc")); // "abcabcabc"
    console.log();

    // 6. call backAround
    console.log("Kata.backAround(\"cat\") -> "+Kata.backAround("cat")); // "tcatt"
    console.log("Kata.backAround(\"Hello\") -> "+Kata.backAround("Hello")); // "oHelloo"
    console.log("Kata.backAround(\"a\") -> "+Kata.backAround("a")); // "aaa"
    console.log();

    // 7. call front22
    console.log("Kata.front22(\"kitten\") -> "+Kata.front22("kitten")); // "kikittenki"
    console.log("Kata.front22(\"Ha\") -> "+Kata.front22("Ha")); // "HaHaHa"
    console.log("Kata.front22(\"abc\") -> "+Kata.front22("abc")); // "ababcab"
    console.log();

    // 8. call delDel
    console.log("Kata.delDel(\"adelbc\") -> "+Kata.delDel("adelbc")); // "abc"
    console.log("Kata.delDel(\"adelHello\") -> "+Kata.delDel("adelHello")); // "aHello"
    console.log("Kata.delDel(\"adedbc\") -> "+Kata.delDel("adedbc")); // "adedbc"
    console.log();

    // 9. call startOz
    console.log();
    console.log("Kata.startOz(\"ozymandias\") -> "+Kata.startOz("ozymandias")); // "oz"
    console.log("Kata.startOz(\"bzoo\") -> " + Kata.startOz("bzoo")); // "z"
    console.log("Kata.startOz(\"oxx\") -> "+Kata.startOz("oxx")); // "o"
    console.log("Kata.startOz(\"kitten\") -> "+Kata.startOz("kitten")); // "ki"

    // 10. call endUp
    console.log();
    console.log("Kata.endUp(\"Hello\") -> "+Kata.endUp("Hello")); // "HeLLO"
    console.log("Kata.endUp(\"hi there\") ->"+ Kata.endUp("hi there")); // "hi thERE"
    console.log("Kata.endUp(\"hi\") ->"+Kata.endUp("hi")); // "HI"



