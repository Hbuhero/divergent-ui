import type { ImgHTMLAttributes } from 'react';
import { getImageMeta } from '../../data/imageMeta';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  decorative?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  loading,
  decorative = false,
  ...rest
}: OptimizedImageProps) {
  const meta = getImageMeta(src);

  if (decorative) {
    return <img src={src} alt="" role="presentation" aria-hidden="true" {...rest} />;
  }

  return (
    <img
      src={src}
      alt={alt ?? meta?.alt ?? ''}
      width={width ?? meta?.width}
      height={height ?? meta?.height}
      loading={loading ?? meta?.loading ?? 'lazy'}
      decoding="async"
      {...rest}
    />
  );
}
