function getData(){
    return JSON.parse(sessionStorage.getItem('data'))
}

function setData(data){
    sessionStorage.setItem('data', JSON.stringify(data))
}

export function initCalcValue(calcDisplay){
    if(!calcDisplay) return

    const data = getData()

    if(data) return calcDisplay.textContent = data.value
    setData({ value: 0, operation: null})
}

export function setCalcValue(calcDisplay, callback, isOperation=false){
   const { value, operation} = getData()
   const _value = callback(value)

   if(operation && !isOperation){
       let operationValue = 0   
       switch(operation){
           case '+': operationValue = value + _value; break;
           case '-': operationValue = value - _value; break;
           case '*': operationValue = value * _value; break;
           case '/': operationValue = value / _value; break;
           case '%': operationValue = value % _value; break;
       }   
       setData({ value: operationValue, operation: null })
       return calcDisplay.textContent = operationValue
   }


   setData({ value: _value, operation})
   calcDisplay.textContent = _value
}

export function setSymbolValue(operation){
    const { value } = getData()
    setData({ value, operation })
}