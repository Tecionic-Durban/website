// Custom image loader for static export - bypasses Next.js image optimization
export default function imageLoader({ src }) {
  return src;
}
