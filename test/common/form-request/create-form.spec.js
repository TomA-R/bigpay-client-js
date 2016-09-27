import createForm from '../../../src/common/form-request/create-form';

describe('createForm', () => {
    let actionUrl;
    let fields;

    beforeEach(() => {
        actionUrl = '/pay/initialize';
        fields = {
            field_1: 'foo',
            field_2: 'bar',
        };
    });

    it('should return form with input fields', () => {
        const output = createForm(actionUrl, fields);

        expect(output.outerHTML).toEqual(
            '<form action="/pay/initialize" method="POST" target="_top">' +
                '<input name="field_1" value="foo">' +
                '<input name="field_2" value="bar">' +
            '</form>'
        );
    });
});
