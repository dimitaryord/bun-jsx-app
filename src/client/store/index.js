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
    setData({ value: 0, operation: null, initialValue: 0})
}

export function setCalcValue(calcDisplay, callback){
   const { value, operation, initialValue } = getData()
   const _value = callback(value)

   setData({ value: _value, operation, initialValue})
   calcDisplay.textContent = _value
}

export function setSymbolValue(operation){
    const { value } = getData()
    setData({ value: 0, operation, initialValue: value })
}

export function doOperation(calcDisplay){
   const { value, operation, initialValue } = getData()
   if(!operation) return

   let _value = 0

   switch(operation){
        case '+': _value = initialValue + value; break;
        case '-': _value = initialValue - value; break;
        case '/': _value = initialValue / value; break;
        case '*': _value = initialValue * value; break;
        case '%': _value = initialValue % value; break;
   }

   setData({ value: _value, operation: null, initialValue: 0 })
   calcDisplay.textContent = _value
}