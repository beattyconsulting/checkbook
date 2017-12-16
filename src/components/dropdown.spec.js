import React from 'react'
import {DropDown} from './dropdown'
import {mount} from 'enzyme'

describe('DropDown', function () {
    let props
    let renderComponent = null

    beforeEach(function () {
        props = {
            className: 'myClass',
            onChange: jest.fn(),
            options:
                [
                    {value: '17', label: '2017'},
                    {value: '18', label: '2018'}
                ]
        }
        renderComponent = (changedProps) => mount(<DropDown {...props} {...changedProps} />)
    })

    it('test options and onChange', function () {
        const dropdown = renderComponent().find('select .myClass')
        expect(dropdown.length).toEqual(1)
        expect(dropdown.find('option').length).toEqual(2)
        expect(dropdown.find('option').at(0).props().value).toEqual("17")
        expect(dropdown.find('option').at(0).text()).toEqual("2017")
        expect(dropdown.find('option').at(1).props().value).toEqual("18")
        expect(dropdown.find('option').at(1).text()).toEqual("2018")
        dropdown.find('option').at(0).simulate("change", {target : {value: "18"}})
        expect(props.onChange).toHaveBeenCalledTimes(1)
        expect(props.onChange).toHaveBeenCalledWith("18")
    })

})