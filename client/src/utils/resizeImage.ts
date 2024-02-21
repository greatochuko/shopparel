export function resizeImage(
  imgFile: File,
  width: number,
  cb: (resizedImage: File) => void
) {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(imgFile);
  fileReader.onload = (e) => {
    const dataUrl = e.target?.result;
    if (!dataUrl) return;
    const canvas = document.createElement("canvas");
    const img = document.createElement("img");
    img.src = dataUrl as string;

    img.onload = (ev: Event) => {
      const eventTarget = ev.target as HTMLImageElement;
      const scaleSize = width / eventTarget.width;
      canvas.width = width;
      canvas.height = eventTarget.height * scaleSize;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(eventTarget, 0, 0, canvas.width, canvas.height);
      ctx?.canvas.toBlob((blob) => {
        const resizedImage = new File([blob as Blob], imgFile.name, {
          type: blob?.type,
        });
        cb(resizedImage);
      });
    };
  };
}
