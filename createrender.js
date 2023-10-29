(() => {
  const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(URL.createObjectURL(await (await fetch("https://cdn.jsdelivr.net/gh/ffmpeg-iframe/standalone/renderhtml.js")).blob()), {
        scope: "https://cdn.jsdelivr.net/gh/ffmpeg-iframe/standalone/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

registerServiceWorker();
})();
