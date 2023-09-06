const videoEl = document.getElementById("video");
const requestBtn = document.getElementById("request-btn");
const shareBtn = document.getElementById("share-btn");

requestBtn.addEventListener("click", () => {
  selectMediaStream();
});

shareBtn.addEventListener("click", async () => {
  shareBtn.disabled = true;
  await videoEl.requestPictureInPiture();
  shareBtn.disabled = false;
});

// request to devices
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (error) {
    console.log(error);
  }
}
