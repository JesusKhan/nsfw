const checkNum = (a) => {
    if(a%2){
        return 'Odd';
    }
    return 'Even';
}

const checkPalindrom = (a) => {
    for(let i = 0; i < a.length/2; i++){
        if(a[i] != a[a.length-1-i]){
            return false;
        }
    }
    return true;
}

switch(process.argv[2]){
    case 'checkNum':
        console.log(checkNum(process.argv[3]));
        break;
    case 'checkPalindrom':
        console.log(checkPalindrom(process.argv[3]));
        break;
    default:
        console.log('Invalid command');
}