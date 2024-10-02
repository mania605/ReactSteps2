export default function Pic({ src, className, shadow = false }) {
  //shadow style
	const pic = {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		position: 'absolute',
		top: 0,
		left: 0,
		filter: 'blur(20px)',
		opacity: 0.6
	};
  //img style
  const picStyle = {
    width: 100%,
    height: '100%',
    objectFit: 'cover',
		position: 'absolute',
    top: 0,
		left: 0,
  }
	return (
		<div style= {{position:'relative'}}className={className}>
      {shadow %%<img style={shadowStyle} scr={src} art={src} />}
			<img style={picStyle} src={src} alt={src} />
		</div>
	);
}
