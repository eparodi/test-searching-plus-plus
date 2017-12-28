/*
Anatomy of a serialized value:

String
s:size:value;

Integer
i:value;

Boolean
b:value; (does not store "true" or "false", stores '1' or '0')

Null
N;

Array
a:size:{key definition;value definition;(repeated per element)}

Object
O:strlen(object name):object name:object size:{s:strlen(property name):property name:property definition;(repeated per property)}
*/
function parseInteger(input){
    var integerStr = "";
    var char = input.shift();
    while (char != ":" && char != ";"){
        integerStr = integerStr.concat(char);
        char = input.shift();
    }
    return parseInt(integerStr);
}

function parseDouble(input){
    var doubleStr = "";
    var char = input.shift();
    while (char != ":" && char != ";"){
        doubleStr = doubleStr.concat(char);
        char = input.shift();
    }
    return parseFloat(doubleStr);
}

function parseBoolean(input){
    var value = input.shift();
    input.shift(); // This is to eliminate the ':'.
    if (value == "0"){
        return false;
    }else if (value == "1"){
        return true;
    }else{
        throw new Error('Malformed PHP serialized string. Boolean value does not exists.');
    }
}

// The size of the String is in bytes?

function parseString(input){
    var size = parseInteger(input);
    if (input.shift() != "\""){
        throw new Error('Malformed PHP serialized string. String malformed.');
    }
    var str = "";
    var char = input.shift();
    while (char != ":" && char != ";"){
        str = str.concat(char); // TODO: improve this part.
        char = input.shift();
    }
    if (str[str.length - 1] != "\""){
        throw new Error('Malformed PHP serialized string. String malformed.');
    }
    str = str.slice(0, -1);
    return str;
}

function parseArray(input){
    var size = parseInteger(input);
    if (input.shift() != "{"){
        throw new Error('Malformed PHP serialized string. Array malformed.');
    }
    var dict = {};
    for (var i = 0; i < size; i++){
        let key = phpStringParserRecursive(input);
        let value = phpStringParserRecursive(input);
        dict[key] = value;
    }
    if (input.shift() != "}"){
        throw new Error('Malformed PHP serialized string. Array malformed.');
    }
    input.shift(); // Eliminates the ':'.
    return dict;
}

function phpStringParserRecursive(input){
    var type = input.shift();
    input.shift(); // Eliminates first ':'.
    switch(type){
        case "s":
            return parseString(input);
            break;
        case "i":
            return parseInteger(input);
            break;
        case "d":
            return parseDouble(input);
            break;
        case "b":
            return parseBoolean(input);
            break;
        case "N":
            return null;
            break;
        case "a":
            return parseArray(input);
            break;
        case "O":
            break;
        default:
            throw new Error('Malformed PHP serialized string. Serialized value does not exist.');
    }
}

function phpStringParser(input){
    var chars = input.split("");

    var obj = phpStringParserRecursive(chars);

    if (chars.length > 0){
        throw new Error('Malformed PHP serialized string.');
    }

    return obj;
}

module.exports = function parseExtrasString(input) {
    return phpStringParser(input);
}
