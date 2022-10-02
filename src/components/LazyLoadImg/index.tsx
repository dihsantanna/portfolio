import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export function LazyLoadImg(props: LazyLoadImageProps) {
  return (
    <LazyLoadImage {...props} />
  );
}
