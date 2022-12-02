/**
 * Comprueba si el campo contiene una contraseña que cumple el patrón
 * @param {HTMLInputElement} input 
 * @returns {boolean}
 */
function isPass(input)
{
    var minus = new RegExp('[a-z]');
    var mayus = new RegExp('[A-Z]');
    var numbr = new RegExp('[0-9]');
    var value = input.value;

    return (value.length >= 6 && minus.test(value) && mayus.test(value) && numbr.test(value)) ? true : false;
}

/**
 * Comprueba si se introdujo un email válido
 * @param {HTMLInputElement} input 
 * @returns {boolean}
 */
function isMail(input)
{
    return new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').test(input.value);
}

/**
 * Dependiendo del id del input decide que tipo de comprobación debe hacer
 * @param   {HTMLInputElement} input 
 * @returns  {boolean}
 */
function checkInput(input)
{
    switch (input.id) {
        case 'password':
            return isPass(input);
            break;
    
        case 'email':
            return isMail(input);
            break;

        case 'nacimiento':
            return isDate(input);
            break;

        case 'condiciones':
            return input.checked;
            break;

        default:
            return true;
    }
}

/**
 * Comprueba si un elemento html está vacío
 * @param {HTMLInputElement} input 
 */
function isEmpty(input)
{
    if ((input.value == "" || input.value == undefined))
    {
        if (input.required == true)
            input.placeholder = "Este elemento no puede quedar vacío.";
        return true;
    }
}

/**
 * @type {HTMLInputElement[]}
 */
var inputs      = document.getElementsByTagName('input');
var textarea    = document.getElementsByTagName('textarea')[0];

for (let i = 0; i < inputs.length; i++)
{
    inputs[i].addEventListener('blur', evt =>
    {
        if (!isEmpty(inputs[i]))
            console.log(checkInput(inputs[i]));

        console.log("Pérdida de foco | input[" + i + "]")
    });
}

textarea.addEventListener('blur', evt =>
{
    if (!isEmpty(textarea))
            checkInput(textarea);

    console.log("Pérdida de foco | textarea")
});
