function generateRandomString(length) {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = [];
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(
            characters.charAt(Math.floor(Math.random() * charactersLength))
        );
    }
    return result.join("");
}

function addElipsisToText(text, maxLength){
    let finalString = "";
    if (text) {
        finalString = text.length < maxLength
            ? text
            : text.substring(0, maxLength) + "...";
    }
    return finalString;
}

export default {
    generateRandomString,
    addElipsisToText,
};
