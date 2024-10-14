class PrimeExample
{
   static checkPrime(num)
    {
        let count=0;
        if(num%2==0 && num!=2){
            return "not prime";
        }
        else{
        for(let i=2;i<num;i++)
        {
            if(num%i==0){
                count++;
                break;
            }
        }
        if(count==1){
            return "Prime"
        }
        else
        {
            return "Not prime";
        }
    }
    }
}

console.log(PrimeExample.checkPrime(60))