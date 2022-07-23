let outputScreen = document.querySelector("#output-screen");
console.log(outputScreen);
let flag = 0;
// console.log(outputScreen.value);

function display(num)
{


    if(flag==1)
    {
        outputScreen.value = num;
        flag = 0;
    }
    else
    {
        
        outputScreen.value += num;
    }
    
    
    // if(Number(outputScreen.value) === 0){
    //     outputScreen.value = num;
    // }
    // else{
    //     outputScreen.value += num;
    // }
}
function calculate()
{
    try
    {
        if(outputScreen.value === 0)
        {
            outputScreen.value = '';
        }
        else if(outputScreen.value==="")
        {
            outputScreen.value = '';
        }
        else
        {
            outputScreen.value = eval(outputScreen.value);
            flag = 1;
        }
    }
    catch(err)
    {
        outputScreen.value = "error"
    }
}
function Clear()
{
    outputScreen.value = "";
}
function del()
{
    if(outputScreen.value.length === 1)
    {
        outputScreen.value = "";
    }
    else
        outputScreen.value = outputScreen.value.slice(0,-1)
        
}