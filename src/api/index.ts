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
