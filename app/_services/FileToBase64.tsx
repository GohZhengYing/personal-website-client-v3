  export const fileToBase64 = (file: File, cb: (value: string) => void) => {
    const reader = new FileReader();
    reader.onloadend = () => cb(reader.result as string);
    reader.readAsDataURL(file);
  };