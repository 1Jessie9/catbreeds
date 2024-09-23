import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.catbreeds.yescodes',
    appName: 'catbreeds',
    webDir: 'www',
    plugins: {
        SplashScreen: {
            launchShowDuration: 0,
            launchAutoHide: true,
            backgroundColor: "#47456d ",
            androidSplashResourceName: "splash",
            androidScaleType: "CENTER_CROP",
            showSpinner: false,
            androidSpinnerStyle: "large",
            iosSpinnerStyle: "small",
            spinnerColor: "#999999",
            splashFullScreen: true,
            splashImmersive: true,
            layoutName: "launch_screen",
            useDialog: false,
        },
    },
};

export default config;
