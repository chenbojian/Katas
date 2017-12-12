require('./index');

it('should convert from/to base64', () => {
    expect('this is a string!!'.toBase64()).toEqual('dGhpcyBpcyBhIHN0cmluZyEh');
    expect('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64()).toEqual('this is a string!!');
    expect('any carnal pleasure.'.toBase64()).toEqual('YW55IGNhcm5hbCBwbGVhc3VyZS4=');
    expect('any carnal pleasure.').toEqual('YW55IGNhcm5hbCBwbGVhc3VyZS4='.fromBase64());
    expect('any carnal pleasure'.toBase64()).toEqual('YW55IGNhcm5hbCBwbGVhc3VyZQ==');
    expect('any carnal pleasure').toEqual('YW55IGNhcm5hbCBwbGVhc3VyZQ=='.fromBase64());
});
