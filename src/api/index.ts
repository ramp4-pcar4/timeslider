import type { TimeSliderConfig } from '@/definitions';
import TimeSlider from '@/App.vue';
import { createApp, h } from 'vue';
import VueTippy from 'vue-tippy';
import { i18n } from '@/lang';

//TODO: extend `FixtureInstance` from RAMP once it gets properly exported.

export class TimeSliderFixture {
    timeSliderPanel: HTMLElement | undefined;

    removed() {
        (this as any).$vApp.$el.querySelector('.inner-shell')?.removeChild(this.timeSliderPanel);
    }

    added() {
        const iApi = (this as any).$iApi;
        let config = iApi.getConfig().fixtures?.timeslider;
        if (config) {
            this.initTimeSlider(config);
        }

        // Timeslider Appbar Button, emitting our own event so that it doesnt matter what name the button is given in the config
        iApi.$element.component('timeslider-appbar-button', {
            props: [`options`],
            template: `<appbar-button :onClickFunction="onClick" tooltip="${i18n.global.t('appbarbutton.tooltip')}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current justify-self-center" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        </appbar-button>`,
            methods: {
                onClick() {
                    iApi.event.emit('timeslider/toggle');
                }
            }
        });
    }

    initTimeSlider(timeSliderConfig: TimeSliderConfig) {
        const iApi = (this as any).$iApi;
        this.timeSliderPanel = document.createElement('div');
        const timeSliderComponent = createApp(
            {
                setup(props) {
                    return () =>
                        h(TimeSlider as any, {
                            props: {
                                config: props.config,
                                rInstance: props.rInt
                            }
                        });
                }
            },
            { config: timeSliderConfig, rInstance: iApi }
        )
            .use(i18n)
            .use(VueTippy, {
                directive: 'tippy',
                component: 'tippy'
            });

        timeSliderComponent.mount(this.timeSliderPanel);
        this.timeSliderPanel.classList.add('time-slider-container');
        (this as any).$vApp.$el.querySelector('.inner-shell')?.appendChild(this.timeSliderPanel);
    }
}
