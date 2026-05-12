# RAMP Timeslider

This is a fixture (extension, plug-in, add-on, etc.) for RAMP4.

## Usage

NOTE: Vue and RAMP4 are not bundled, they must be loaded separately on your page.

### In-line script

Add the script to your page `<script src="/example/timeslider.browser.iife.js"></script>`


This will place the `TimesliderFixture` class in the global (`window`) namespace. You can then add the fixture as so: `const ts = rampInstance.fixture.add("timeslider", TimeSliderFixture);`

There are two ways to configure and start the timeslider. One is by including a timeslider config within your ramp config under 
```
fixtures { 
    timeslider: {
        ...
    }
}
```

The other is to call `ts.initTimeSlider({ ...config here... })`. Note that `ts` is the timeslider fixture added to RAMP above, you can also access it through the RAMP fixtures API.

## Development

Node v24.15.0 is recommended, other versions are untested.

`npm run dev` will run the development server with hot-reloading.

`npm run build` will clear the dist folder and run the various builds.

`npm run preview` will load up a server for the `dist` folder.
