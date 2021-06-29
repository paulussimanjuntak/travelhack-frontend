import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

export const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

export const getImgUrl = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export const imagePreview = async file => {
  let src = file.url;
  if (!src) {
    src = await new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  }
  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow.document.write(image.outerHTML);
};

export const uploadButton = loading => (
  <div className="noselect text-gray-8">
    {loading ? <LoadingOutlined /> : <PlusOutlined />}
    <div>Upload{loading ? <>ing</> : null}</div>
  </div>
);
