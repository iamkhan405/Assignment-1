var num=[0,1,2,3,4,5,6,7,8,9,15,18,17,25,49];
for(var i=0; i<num.length; i++)
{
    document.write("<br>");
    if(num[i]%2 == 0)
    {
        document.write(num[i] +" is even");
        if(num[i]==2)
        {
            document.write(" and prime" + "<br>");
        }
    }
    else{
        document.write(num[i] + " is odd " )
        if(num[i]%3 == 1 || num[i]%3== 2 || num[i]==3)
        {
            document.write(" and prime " + "<br>");
            /*
            
             */
        }
    }
}