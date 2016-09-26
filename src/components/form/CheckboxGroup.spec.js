// the eslint "no-unused-expressions" rule is triggered by the `expect`
// assertions in the tests. So, in order to avoid problems with eslint, I'm
// disabling that rule in this file
//
/* eslint-disable no-unused-expressions */

import React from 'react';
import { shallow, mount } from 'enzyme';
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

/*

<div class="form-group">

    <label for="checkboxgroup-107" class="control-label col-xs-2 col-md-3">
        Cycles
        <sup style="color: red;">
            <i class="glyphicon glyphicon-asterisk"></i>
        </sup>
    </label>

    <div class="col-xs-10 col-md-9">

        <div class="checkbox pull-left" style="margin-right: 1.5em;">
            <label>
                <input type="checkbox" value="1">
                <span>1</span>
            </label>
        </div>

        <div class="checkbox pull-left" style="margin-right: 1.5em;">
            <label>
                <input type="checkbox" value="2">
                <span>2</span>
            </label>
        </div>

    </div>

</div>

*/

/* *****************************************************************************
a Form component containing a CheckboxGroup
    should include a <Form.CheckboxGroup> as a child
    should contain a div.form-group
    should contain a label if the label prop is set
    should not contain a label if the label prop is not set
    should contain a div.checkbox for each option
    should contain a label for each option
    should contain an input[type="checkbox"] for each option
    should contain a span with the option name for each option
    should have the correct options checked when multiple values are provided
    should have the correct options checked when a single value is provided
    should have the correct options checked when null value is provided
    should have the correct options checked when no value is provided
    should have the correct options checked when empty array value is provided
*/
describe('a Form component containing a CheckboxGroup', () => {

    const options = [
        { value: '1', name: 'One' },
        { value: '2', name: 'Two' },
        { value: '3', name: 'Three' },
    ];

    it('should include a <Form.CheckboxGroup> as a child', () => {
        const component = shallow(
            <Form>
                <Form.CheckboxGroup options={options} />
            </Form>
        );

        expect(component.find(Form.CheckboxGroup)).to.have.length(1);
    });

    it('should contain a div.form-group', () => {
        const component = mount(
            <Form>
                <Form.CheckboxGroup options={options} />
            </Form>
        );

        expect(component.find('div.form-group')).to.have.length(1);
    });

    it('should contain a label if the label prop is set', () => {

        const label = 'humpty dumpty';

        const component = mount(
            <Form>
                <Form.CheckboxGroup label={label} options={options} />
            </Form>
        );

        expect(component.find('label.checkboxgroup')).to.have.length(1);
        expect(component.find('label.checkboxgroup').text()).to.equal(label);
    });

    it('should not contain a label if the label prop is not set', () => {

        const component = mount(
            <Form>
                <Form.CheckboxGroup options={options} />
            </Form>
        );

        expect(component.find('label.checkboxgroup')).to.have.length(0);
    });

    it('should contain a div.checkbox for each option', () => {

        const component = mount(
            <Form>
                <Form.CheckboxGroup options={options} />
            </Form>
        );

        expect(component.find('div.checkbox')).to.have.length(options.length);
    });

    it('should contain a label for each option', () => {

        const component = mount(
            <Form>
                <Form.CheckboxGroup options={options} />
            </Form>
        );

        expect(component.find('div.checkbox label')).to.have.length(options.length);
    });

    it('should contain an input[type="checkbox"] for each option', () => {

        const component = mount(
            <Form>
                <Form.CheckboxGroup options={options} />
            </Form>
        );

        expect(component.find('div.checkbox input[type="checkbox"]'))
            .to.have.length(options.length);
        expect(component.find('div.checkbox input[type="checkbox"]').at(0).props().value)
            .to.equal(options[0].value);
        expect(component.find('div.checkbox input[type="checkbox"]').at(1).props().value)
            .to.equal(options[1].value);
        expect(component.find('div.checkbox input[type="checkbox"]').at(2).props().value)
            .to.equal(options[2].value);
    });

    it('should contain a span with the option name for each option', () => {

        const component = mount(
            <Form>
                <Form.CheckboxGroup options={options} />
            </Form>
        );

        expect(component.find('div.checkbox span')).to.have.length(options.length);
        expect(component.find('div.checkbox span').at(0).text()).to.equal(options[0].name);
        expect(component.find('div.checkbox span').at(1).text()).to.equal(options[1].name);
        expect(component.find('div.checkbox span').at(2).text()).to.equal(options[2].name);

    });

    it('should have the correct options checked when multiple values are provided', () => {

        const value = ['1', '2'];

        const component = mount(
            <Form>
                <Form.CheckboxGroup value={value} options={options} />
            </Form>
        );

        expect(component.find('div.checkbox input[type="checkbox"]'))
            .to.have.length(options.length);
        expect(component.find('div.checkbox input[type="checkbox"]').at(0).props().checked)
            .to.equal(true);
        expect(component.find('div.checkbox input[type="checkbox"]').at(1).props().checked)
            .to.equal(true);
        expect(component.find('div.checkbox input[type="checkbox"]').at(2).props().checked)
            .to.equal(false);
    });

    it('should have the correct options checked when a single value is provided', () => {

        const value = '2';

        const component = mount(
            <Form>
                <Form.CheckboxGroup value={value} options={options} />
            </Form>
        );

        expect(component.find('div.checkbox input[type="checkbox"]'))
            .to.have.length(options.length);
        expect(component.find('div.checkbox input[type="checkbox"]').at(0).props().checked)
            .to.equal(false);
        expect(component.find('div.checkbox input[type="checkbox"]').at(1).props().checked)
            .to.equal(true);
        expect(component.find('div.checkbox input[type="checkbox"]').at(2).props().checked)
            .to.equal(false);
    });

    it('should have the correct options checked when null value is provided', () => {

        const value = null;

        const component = mount(
            <Form>
                <Form.CheckboxGroup value={value} options={options} />
            </Form>
        );

        expect(component.find('div.checkbox input[type="checkbox"]'))
            .to.have.length(options.length);
        expect(component.find('div.checkbox input[type="checkbox"]').at(0).props().checked)
            .to.equal(false);
        expect(component.find('div.checkbox input[type="checkbox"]').at(1).props().checked)
            .to.equal(false);
        expect(component.find('div.checkbox input[type="checkbox"]').at(2).props().checked)
            .to.equal(false);
    });

    it('should have the correct options checked when no value is provided', () => {

        const component = mount(
            <Form>
                <Form.CheckboxGroup options={options} />
            </Form>
        );

        expect(component.find('div.checkbox input[type="checkbox"]'))
            .to.have.length(options.length);
        expect(component.find('div.checkbox input[type="checkbox"]').at(0).props().checked)
            .to.equal(false);
        expect(component.find('div.checkbox input[type="checkbox"]').at(1).props().checked)
            .to.equal(false);
        expect(component.find('div.checkbox input[type="checkbox"]').at(2).props().checked)
            .to.equal(false);
    });

    it('should have the correct options checked when empty array value is provided', () => {

        const value = [];

        const component = mount(
            <Form>
                <Form.CheckboxGroup value={value} options={options} />
            </Form>
        );

        expect(component.find('div.checkbox input[type="checkbox"]'))
            .to.have.length(options.length);
        expect(component.find('div.checkbox input[type="checkbox"]').at(0).props().checked)
            .to.equal(false);
        expect(component.find('div.checkbox input[type="checkbox"]').at(1).props().checked)
            .to.equal(false);
        expect(component.find('div.checkbox input[type="checkbox"]').at(2).props().checked)
            .to.equal(false);
    });

});

/* *****************************************************************************
the CheckboxGroup component
    should call onChange with the correct value(s) when a new item is toggled on
    should call onChange with the correct value(s) when a new item is toggled off
*/
describe('the CheckboxGroup component', () => {

    const options = [
        { value: '1', name: 'One' },
        { value: '2', name: 'Two' },
        { value: '3', name: 'Three' },
    ];

    it('should call onChange with the correct value(s) when a new item is toggled on', () => {

        const onChange = sinon.spy();

        const value = '2';

        const component = mount(
            <Form>
                <Form.CheckboxGroup value={value} options={options} onChange={onChange} />
            </Form>
        );

        expect(component.find('div.checkbox input[type="checkbox"]').at(0).props().checked)
            .to.equal(false);
        expect(component.find('div.checkbox input[type="checkbox"]').at(1).props().checked)
            .to.equal(true);
        expect(component.find('div.checkbox input[type="checkbox"]').at(2).props().checked)
            .to.equal(false);

        // click the first item
        //
        component.find('div.checkbox input[type="checkbox"]').at(0).simulate('click');

        expect(component.find('div.checkbox input[type="checkbox"]').at(0).props().checked)
            .to.equal(true);
        expect(component.find('div.checkbox input[type="checkbox"]').at(1).props().checked)
            .to.equal(true);
        expect(component.find('div.checkbox input[type="checkbox"]').at(2).props().checked)
            .to.equal(false);

        expect(onChange.callCount).to.equal(1, 'callCount');
        expect(onChange.calledWith(['2', '1'])).to.equal(true, 'args');

    });

    it('should call onChange with the correct value(s) when a new item is toggled off', () => {

        const onChange = sinon.spy();

        const value = ['1', '2'];

        const component = mount(
            <Form>
                <Form.CheckboxGroup value={value} options={options} onChange={onChange} />
            </Form>
        );

        expect(component.find('div.checkbox input[type="checkbox"]').at(0).props().checked)
            .to.equal(true);
        expect(component.find('div.checkbox input[type="checkbox"]').at(1).props().checked)
            .to.equal(true);
        expect(component.find('div.checkbox input[type="checkbox"]').at(2).props().checked)
            .to.equal(false);

        // click the first item
        //
        component.find('div.checkbox input[type="checkbox"]').at(0).simulate('click');

        expect(component.find('div.checkbox input[type="checkbox"]').at(0).props().checked)
            .to.equal(false);
        expect(component.find('div.checkbox input[type="checkbox"]').at(1).props().checked)
            .to.equal(true);
        expect(component.find('div.checkbox input[type="checkbox"]').at(2).props().checked)
            .to.equal(false);

        expect(onChange.callCount).to.equal(1, 'callCount');
        expect(onChange.calledWith(['2'])).to.equal(true, 'args');

    });

});

// @TODO write these specs
/* *****************************************************************************
on initialization, the CheckboxGroup component
    should not show the validation message when required=false and some items are checked
    should not show the validation message when required=false and no items are checked
    should not show the validation message when required=true and some items are checked
    should not show the validation message when required=true and no items are checked
*/
describe('on initialization, the CheckboxGroup component', () => {

    const options = [
        { value: '1', name: 'One' },
        { value: '2', name: 'Two' },
        { value: '3', name: 'Three' },
    ];

    it('should not show the validation message when required=false and some items are checked', () => {

        const required = false;

        const value = ['2'];

        const component = mount(
            <Form>
                <Form.CheckboxGroup required={required} value={value} options={options} />
            </Form>
        );

        expect(component.find('div.form-group').length).to.equal(1, 'form-group');
        expect(component.find('div.form-group.has-error').length).to.equal(0, 'has-error');
        expect(component.find('span.help-block').length).to.equal(0, 'help-block');
    });

    it('should not show the validation message when required=false and no items are checked', () => {

        const required = false;

        const value = [];

        const component = mount(
            <Form>
                <Form.CheckboxGroup required={required} value={value} options={options} />
            </Form>
        );

        expect(component.find('div.form-group').length).to.equal(1, 'form-group');
        expect(component.find('div.form-group.has-error').length).to.equal(0, 'has-error');
        expect(component.find('span.help-block').length).to.equal(0, 'help-block');
    });

    it('should not show the validation message when required=true and some items are checked', () => {

        const required = true;

        const value = ['1'];

        const component = mount(
            <Form>
                <Form.CheckboxGroup required={required} value={value} options={options} />
            </Form>
        );

        expect(component.find('div.form-group').length).to.equal(1, 'form-group');
        expect(component.find('div.form-group.has-error').length).to.equal(0, 'has-error');
        expect(component.find('span.help-block').length).to.equal(0, 'help-block');
    });

    it('should not show the validation message when required=true and no items are checked', () => {

        const required = true;

        const value = [];

        const component = mount(
            <Form>
                <Form.CheckboxGroup required={required} value={value} options={options} />
            </Form>
        );

        expect(component.find('div.form-group').length).to.equal(1, 'form-group');
        expect(component.find('div.form-group.has-error').length).to.equal(0, 'has-error');
        expect(component.find('span.help-block').length).to.equal(0, 'help-block');
    });

});



// @TODO write these specs
/* *****************************************************************************
after the user clicks something, the CheckboxGroup component
    should not show the validation message when required=false and some items are checked
    should not show the validation message when required=false and no items are checked
    should not show the validation message when required=true and some items are checked
    should show the validation message when required=true and no items are checked
*/
describe('after the user clicks something, the CheckboxGroup component', () => {

    const options = [
        { value: '1', name: 'One' },
        { value: '2', name: 'Two' },
        { value: '3', name: 'Three' },
    ];

    // it('should not show the validation message when required=false and some items are checked', () => {});

    // it('should not show the validation message when required=false and no items are checked', () => {});

    // it('should not show the validation message when required=true and some items are checked', () => {});

    // it('should show the validation message when required=true and no items are checked', () => {});

});
