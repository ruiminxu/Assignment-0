function titleCaseEdit(title) 
{
    const array = title.split(' ');
    
    for(let i = 0; i < array.length; i++)
    {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].substr(1);
    }
    
    return array.join(" ").replaceAll(", ", " ");
  
}

titleCaseEdit("hi im mark");

// Do not edit this line;
module.exports = titleCaseEdit;