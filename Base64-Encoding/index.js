const numToB64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const b64ToNum = [...numToB64].reduce((acc, cur, idx) => {
    acc[cur] = idx;
    return acc;
}, {});

function toBinary(num, bit) {
    const b = num.toString(2);
    if (b.length > bit) {
        throw new Error('not support');
    }
    return Array(bit - b.length).fill(0).join('') + b;
}

function _toBase64(chars) {
    if (chars.length > 3) {
        throw new Error();
    }

    let bitArray = [...chars].map(c => toBinary(c.charCodeAt(0), 8)).join('');
    if (bitArray.length < 24) {
        bitArray += Array(24 - bitArray.length).fill(0).join('');
    }
    let arr = Array(1 + chars.length).fill().map((n, idx) => idx);
    let equals = Array(3 - chars.length).fill('=').join('');

    return arr.map(i => numToB64[parseInt(bitArray.slice(i * 6, (i + 1) * 6), 2)]).join('') + equals;
}

function _fromBase64(chars) {
    if (chars.length !== 4) {
        throw new Error();
    }
    let bitArray = [...chars].filter(c => c !== '=').map(c => toBinary(b64ToNum[c], 6)).join('');

    const count = Math.floor(bitArray.length / 8);
    let arr = Array(count).fill().map((n, idx) => idx);

    return arr.map(i => parseInt(bitArray.slice(i * 8, (i + 1) * 8), 2)).map(i => String.fromCharCode(i)).join('');
}

function splitChars(chars, count) {
    return [...chars]
        .reduce((acc, cur, idx) => {
            if (idx % count === 0) {
                return [...acc, [cur]];
            }
            acc[acc.length - 1].push(cur);
            return acc;
        }, []);
}


function toBase64() {
    return splitChars(this, 3).map(_toBase64).join('');
}

function fromBase64() {
    return splitChars(this, 4).map(_fromBase64).join('');
}


String.prototype.toBase64 = toBase64;
String.prototype.fromBase64 = fromBase64;