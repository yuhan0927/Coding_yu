function generateHashtag(str) {
    if(str!==null || str.length < 140){
        str = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        str = '#'+ str;
        return str;
    }
    return false;
}

console.log(generateHashtag('hello miss dong'));