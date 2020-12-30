function isPalindrome(word) 
{
    let end = word.length - 1;
    
    for(let i = 0; i < word.length; i++)
    {
        if(word.charAt(i) === word.charAt(end))
        {
            return true;
        }else{
            return false;
        }

        end--;
    }
   

}



// Do not edit this line;
module.exports = isPalindrome;