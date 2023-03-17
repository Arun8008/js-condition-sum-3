let age=prompt("Enter Your Age");

if(age>16 && age<50){
   document.write("Direct Allowed");
}
else if(age<8 && age<16){
let permiss=prompt("Permission Yes No");
   if(permiss=="yes"){
      document.write("Allowed");
   }
   else{
      document.write("get parent Permission");
   }
}
else{
   document.write("Not Allowed");
}