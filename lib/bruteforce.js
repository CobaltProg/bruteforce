 (function () {

     var bruteforce = {
          // Data stock les values 
         Data: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
         Letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
         lastRes: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

        

         brute: function (n) { // n  length chain
             if (n <= 1) {
                 console.log("Fin");
                 return this.Data;
             } else {
                 console.log("n-1");
                 var newRes = [];
                 for (var i = 0; i < this.lastRes.length; i++) {

                     console.log(i + " = " + this.lastRes[i])

                     
                     for (var j = 0; j < this.Letters.length; j++) {
                         
                         var x = this.lastRes[i] + this.Letters[j];
                        
                         newRes.push(x);   
                     }
                 }
                 console.log("Taille = " + n + " -- Paramétre de test (1,2,3...) ");
                 this.lastRes = newRes
                 console.log("Last Result : ", this.lastRes);

                 this.Data = this.Data.concat(this.lastRes)
                 return this.brute(n - 1);
             }
         }
     };
     bruteforce.brute(2);

 })();
