src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js";
async = "";

window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.init({
    appId: "40ef2196-6540-4545-a0d3-9528e189eacc",
    safari_web_id: "web.onesignal.auto.186ea02a-f890-410a-b109-aa22c180382d",
    notifyButton: {
      enable: true,
    },
    allowLocalhostAsSecureOrigin: true,
  });
});
