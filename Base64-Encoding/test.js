require('./index');

it('should convert from/to base64', () => {
    expect('this is a string!!'.toBase64()).toEqual('dGhpcyBpcyBhIHN0cmluZyEh');
    expect('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64()).toEqual('this is a string!!');
});
