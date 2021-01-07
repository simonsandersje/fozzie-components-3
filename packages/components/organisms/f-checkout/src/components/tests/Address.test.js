import Vuex from 'vuex';
import { VueI18n } from '@justeat/f-globalisation';
import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import Address from '../Address.vue';
import { i18n, createStore } from './helpers/setup';

const localVue = createLocalVue();

localVue.use(VueI18n);
localVue.use(Vuex);

const $v = {
    addressValidations: {
        city: {
            $dirty: false,
            required: true
        },
        line1: {
            $dirty: false,
            required: false
        },
        postcode: {
            $dirty: false,
            required: true,
            isValidPostcode: false
        }
    }
};

describe('Address', () => {
    allure.feature('Checkout-Address');

    const propsData = {};

    it('should be defined', () => {
        // Arrange
        const wrapper = shallowMount(Address, {
            i18n,
            store: createStore(),
            localVue,
            propsData,
            provide: () => ({
                $v
            })
        });

        // Assert
        expect(wrapper.exists()).toBe(true);
    });

    describe('computed ::', () => {
        const isFieldEmptySpy = jest.spyOn(Address.methods, 'isFieldEmpty');
        let wrapper;

        it.each([
            ['isAddressLine1Empty', 'line1'],
            ['isAddressCityEmpty', 'city'],
            ['isAddressPostcodeEmpty', 'postcode']
        ])('%s :: should call `isFieldEmpty` with argument %s', (property, field) => {
            wrapper = shallowMount(Address, {
                i18n,
                store: createStore(),
                localVue,
                propsData,
                provide: () => ({
                    $v
                })
            });

            // Assert
            expect(isFieldEmptySpy).toHaveBeenCalledWith(field);
        });

        describe('isAddressPostcodeValid ::', () => {
            it.each([
                [false, true, false, false],
                [true, true, true, false],
                [false, true, false, true]
            ])('should return %s if postcode.$dirty = %s, postcode.isValidPostCode = %s and isAddressPostcodeEmpty = %s', (expected, isDirty, isValid, isEmpty) => {
                // Arrange && Act
                $v.addressValidations.postcode.$dirty = isDirty;
                $v.addressValidations.postcode.isValidPostcode = isValid;

                wrapper = shallowMount(Address, {
                    i18n,
                    store: createStore(),
                    localVue,
                    propsData,
                    provide: () => ({
                        $v
                    }),
                    computed: {
                        isAddressPostcodeEmpty: () => isEmpty
                    }
                });

                // Assert
                expect(wrapper.vm.isAddressPostcodeValid).toEqual(expected);
            });
        });
    });

    describe('methods ::', () => {
        describe('isFieldEmpty ::', () => {
            const field = 'line1';

            let wrapper;

            beforeEach(() => {
                wrapper = shallowMount(Address, {
                    i18n,
                    store: createStore(),
                    localVue,
                    propsData,
                    provide: () => ({
                        $v
                    })
                });
            });

            it('should return `false` if `field` has not been touched and input is required', () => {
                // Act
                $v.addressValidations[field].$dirty = false;
                $v.addressValidations[field].required = true;

                // Assert
                expect(wrapper.vm.isFieldEmpty(field)).toEqual(false);
            });

            it('should return `true` if `field` has been touched and input is required', () => {
                // Act
                $v.addressValidations[field].$dirty = true;
                $v.addressValidations[field].required = false;

                // Assert
                expect(wrapper.vm.isFieldEmpty(field)).toEqual(true);
            });

            it('should return `false` if `field` has been touched and input is not required`', () => {
                // Act
                $v.addressValidations[field].$dirty = true;
                $v.addressValidations[field].required = true;

                // Assert
                expect(wrapper.vm.isFieldEmpty(field)).toEqual(false);
            });
        });

        describe('updateAddressLine1', () => {
            it('should be called with new input value on user input', async () => {
                // Arrange
                jest.clearAllMocks();
                const updateAddressLine1Spy = jest.spyOn(Address.methods, 'updateAddressLine1');

                const wrapper = mount(Address, {
                    store: createStore(),
                    i18n,
                    localVue,
                    propsData,
                    provide: () => ({
                        $v
                    })
                });
                const newValue = 'New Street'

                // Act
                await wrapper.find('[data-test-id="formfield-address-line-1-input"]').setValue(newValue);
                await wrapper.vm.$nextTick();

                // Assert
                expect(updateAddressLine1Spy).toHaveBeenCalledWith(newValue);
            })
        });

        describe('updateAddressCity', () => {
            it('should be called with new input value on user input', async () => {
                // Arrange
                jest.clearAllMocks();
                const updateAddressCitySpy = jest.spyOn(Address.methods, 'updateAddressCity');

                const wrapper = mount(Address, {
                    store: createStore(),
                    i18n,
                    localVue,
                    propsData,
                    provide: () => ({
                        $v
                    })
                });
                const newValue = 'New City'

                // Act
                await wrapper.find('[data-test-id="formfield-address-city-input"]').setValue(newValue);
                await wrapper.vm.$nextTick();

                // Assert
                expect(updateAddressCitySpy).toHaveBeenCalledWith(newValue);
            })
        });

        describe('updateAddressPostcode', () => {
            it('should be called with new input value on user input', async () => {
                // Arrange
                jest.clearAllMocks();
                const updateAddressPostcodeSpy = jest.spyOn(Address.methods, 'updateAddressPostcode');

                const wrapper = mount(Address, {
                    store: createStore(),
                    i18n,
                    localVue,
                    propsData,
                    provide: () => ({
                        $v
                    })
                });
                const newValue = 'New Postcode'

                // Act
                await wrapper.find('[data-test-id="formfield-address-postcode-input"]').setValue(newValue);
                await wrapper.vm.$nextTick();

                // Assert
                expect(updateAddressPostcodeSpy).toHaveBeenCalledWith(newValue);
            })
        });
    });
});
