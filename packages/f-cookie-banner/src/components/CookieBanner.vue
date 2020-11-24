<template>
    <div
        :class="[$style['c-cookieBanner'], $style['c-cookieBanner-overlay']]"
        attr="data-cookie-consent-overlay">
        <card
<<<<<<< HEAD
            :class="$style['c-cookieBanner-card']">
            <div
                id="dialog1"
                :class="$style['c-cookieBanner-content']"
                role="dialog"
                aria-labelledby="cookieConsentLabel"
                aria-modal="true">
                <h2
                    id="cookieConsentLabel"
                    :class="$style['c-cookieBanner-title']">
                    <!-- <a
                            name="cookieConsentTitle"
                            tabindex="-1"
                            data-consent-title> -->
                    {{ copy.mainTitle }}
                    <!-- </a> -->
                </h2>

                <p :class="$style['c-cookieBanner-text']">
                    {{ copy.text1 }}
                </p>
                <p :class="$style['c-cookieBanner-text']">
                    {{ copy.text2 }}
                </p>
                <p
                    :class="$style['c-cookieBanner-text']">
                    {{ copy.text3 }}
                    <a
                        :href="
                            copy.linkHref"
                        :class="$style['c-cookieBanner-link']"
                        target="_blank">
                        {{ copy.linkText }}</a>
                    {{ copy.text4 }}
                </p>
            </div>

            <div :class="$style['c-cookieBanner-CTA']">
                <button-component
                    tabindex="0"
                    role="button"
                    data-button-accept
                    is-full-width>
                    {{ copy.buttonText2 }}
                </button-component>
                <button-component
                    tabindex="0"
                    role="button"
                    button-type="ghost"
                    data-button-nonaccept
                    is-full-width>
                    {{ copy.buttonText1 }}
                </button-component>
            </div>
=======
            :class="$style['c-cookieBanner-card']"
            :card-heading="copy.mainTitle">
            <div
                :class="$style['c-cookieBanner-contentContainer']">
                <div
                    id="dialog1"
                    :class="$style['c-cookieBanner-content']"
                    role="dialog"
                    aria-labelledby="cookieConsentLabel"
                    aria-modal="true">
                    <p :class="$style['c-cookieBanner-text']">
                        {{ copy.text1 }}
                    </p>
                    <p :class="$style['c-cookieBanner-text']">
                        {{ copy.text2 }}
                    </p>
                    <p :class="[$style['c-cookieBanner-text'], $style['c-cookieBanner-text--last']]">
                        {{ copy.text3 }}
                        <a
                            :href="copy.linkHref"
                            :class="$style['c-cookieBanner-link']"
                            target="_blank">{{ copy.linkText }}</a>
                        {{ copy.text4 }}
                    </p>
                </div>
                <div :class="$style['c-cookieBanner-CTA']">
                    <button-component
                        tabindex="0"
                        role="button"
                        data-button-accept
                        is-full-width>
                        {{ copy.buttonText2 }}
                    </button-component>
                    <button-component
                        tabindex="0"
                        role="button"
                        button-type="ghost"
                        data-button-nonaccept
                        is-full-width>
                        {{ copy.buttonText1 }}
                    </button-component>
                </div>
            </div>
>>>>>>> 52200dd... Update class names
        </card>
    </div>
</template>

<script>
import { globalisationServices } from '@justeat/f-services';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 52200dd... Update class names
import ButtonComponent from '@justeat/f-button';
import '@justeat/f-button/dist/f-button.css';
import Card from '@justeat/f-card';
import '@justeat/f-card/dist/f-card.css';
<<<<<<< HEAD
=======
// import ButtonComponent from '@justeat/f-button';
// import Card from '@justeat/f-card';
>>>>>>> c317e41... Add es
=======
>>>>>>> 52200dd... Update class names
import tenantConfigs from '../tenants';

export default {
    name: 'CookieBanner',

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 52200dd... Update class names
    components: {
        ButtonComponent,
        Card
    },
<<<<<<< HEAD
=======
    // components: {
    //     ButtonComponent,
    //     Card
    // },
>>>>>>> c317e41... Add es
=======
>>>>>>> 52200dd... Update class names

    props: {
        locale: {
            type: String,
            default: 'en-GB'
        }
    },

    data () {
        const locale = globalisationServices.getLocale(tenantConfigs, this.locale, this.$i18n);
        const localeConfig = tenantConfigs[locale];
        const theme = globalisationServices.getTheme(locale);

        return {
            copy: { ...localeConfig },
            theme
        };
    }
};
</script>

<style lang="scss" module>
.c-cookieBanner {
    font-family: $font-family-base;
}

.c-cookieBanner-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7); //TODO: Find colour in fozzie
    z-index: 99999991;
}

.c-cookieBanner-card {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999992;
<<<<<<< HEAD
    display: flex;
    justify-content: space-between;
}

.c-cookieBanner-CTA {
    min-width: 352px;
}

.c-cookieBanner-text {
    margin: 0;
    padding: 0;
}

<<<<<<< HEAD
.c-cookieBanner-link {
    color: $color-link-default;
=======
.cpBanner-button {
    padding: 12px 1em;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 2px;
    width: 288px;
>>>>>>> c317e41... Add es
}

.c-cookieBanner-title {
    font-size: 24px;
    @include font-size(heading-m);
    font-weight: $font-weight-bold;
    margin: spacing() 0;
    padding: 0;
    color: $color-headings;
}

.c-cookieBanner-content,
.c-cookieBanner-CTA {
    padding: spacing(x4);
    margin: 0 auto;
}

// .hidec-cookieBanner {
//     display: none;
// }

@media (max-width: 768px) {
    .c-cookieBanner-card {
=======
}

.c-cookieBanner-contentContainer { //TODO: Change this name
    display: flex;
}


.c-cookieBanner-CTA { //TODO: Change this name
    width: 352px;
}

.c-cookieBanner-text {
    font-size: 14px;
    margin: 0;
    padding: 0;
    color: #2a3846;
}

.c-cookieBanner-link {
    color: #125fca;
}


//TODO: Look at what this does

.hidec-cookieBanner {
    display: none;
}

@media (max-width: 768px) {
    .c-cookieBanner {
>>>>>>> 52200dd... Update class names
        flex-direction: column;
        padding: spacing(x2) 0;
    }

    .c-cookieBanner-content,
    .c-cookieBanner-CTA {
<<<<<<< HEAD
        padding: spacing(x0.5) spacing(x3);
    }

    .c-cookieBanner-CTA {
        min-width: initial;
=======
        padding: 4px 24px;
    }

    .c-cookieBanner-CTA {
        width: initial;
>>>>>>> 52200dd... Update class names
        display: flex;
        flex-direction: row-reverse;
        margin: 0;
    }
<<<<<<< HEAD
}

@media (max-width: 600px) {
        .c-cookieBanner-title {
            @include font-size(heading-s);
        }

        .c-cookieBanner-CTA {
            display: block;
            margin: 0;
        }
=======

    .c-cookieBanner-button {
        width: initial;
    }
}

@media (max-width: 600px) {
    .c-cookieBanner-content,
    .c-cookieBanner-CTA {
        padding: 4px 16px;
    }

    .c-cookieBanner-title {
        font-size: 20px;
    }

    .c-cookieBanner-CTA {
        display: block;
        margin: 0 auto;
        width: 320px;
    }

    .c-cookieBanner-button {
        width: 276px;
>>>>>>> 52200dd... Update class names
    }
</style>
