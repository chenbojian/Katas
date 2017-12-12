
function toBase64() {
    const bitResult = [...this]
    .map(c => {
        let num = c.charCodeAt(0);
        let bitArray = [];
        for(let i=0;i<8;i++) {
            let bit = num %2;
            num = Math.floor(num / 2);
            bitArray.splice(0, 0, bit);
        }
        return bitArray;
    })
    .reduce((acc, cur) => acc.concat(cur),[]);
    let base64Array = [];
    for(let i = 0; i < bitResult.length; i++) {
        if (i % 6 === 0) {
            base64Array.push(bitResult[i]);
            continue;
        }
        base64Array[base64Array.length - 1] = base64Array[base64Array.length - 1] << 1 + bitResult[i];
    }
    console.log(base64Array)
    return base64Array.map(i => String.fromCharCode(i)).join('');
}

function fromBase64(str) {

}


String.prototype.toBase64 = toBase64;
String.prototype.fromBase64 = fromBase64;