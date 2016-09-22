// the eslint "no-unused-expressions" rule is triggered by the `expect`
// assertions in the tests. So, in order to avoid problems with eslint, I'm
// disabling that rule in this file
//
/* eslint-disable no-unused-expressions */

import React from 'react';
import { shallow, render, mount } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';

import Form from '../Form';

const expect = chai.expect;

/* eslint-disable no-unused-vars */
const debug = (component) => {
    console.info('------------------------------------------------------------');
    console.info(component.debug());
    console.info('------------------------------------------------------------');
};
/* eslint-enable no-unused-vars */

/* *****************************************************************************
a Form component containing a RadioButtonGroup
    should include a <Form.RadioButtonGroup> as a child
    should include a label if the label prop is set
    should not include a label if the label prop is not set
    should include a div.radio for each option
    should include a label for each option
    should include a span containing the option name for each option
*/
describe('a Form component containing a RadioButtonGroup', () => {

    const options = [
        { value: '1', name: 'One' },
        { value: '2', name: 'Two' },
        { value: '3', name: 'Three' },
    ];

    it('should include a <Form.RadioButtonGroup> as a child', () => {
        const component = shallow(
            <Form>
                <Form.RadioButtonGroup options={options} />
            </Form>
        );

        expect(component.find(Form.RadioButtonGroup)).to.have.length(1);
    });

    it('should include a label if the label prop is set', () => {

        const label = 'fee fi fo fum';

        const component = mount(
            <Form>
                <Form.RadioButtonGroup label={label} options={options} />
            </Form>
        );

        expect(component.find('label.radiobuttongroup')).to.have.length(1);
        expect(component.find('label.radiobuttongroup').text()).to.equal(label);
    });

    it('should not include a label if the label prop is not set', () => {

        const component = mount(
            <Form>
                <Form.RadioButtonGroup options={options} />
            </Form>
        );

        expect(component.find('label.radiobuttongroup')).to.have.length(0);
    });

    it('should include a div.radio for each option', () => {

        const component = mount(
            <Form>
                <Form.RadioButtonGroup options={options} />
            </Form>
        );

        expect(component.find('div.radio')).to.have.length(options.length);
    });

});
