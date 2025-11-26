import { AspectRatio } from 'skyroc-ui';

const AspectRatioVideo = () => {
  return (
    <div className="w-full max-w-[800px]">
      <AspectRatio
        className="bg-muted overflow-hidden rounded-md"
        ratio={16 / 9}
      >
        <iframe
          allowFullScreen
          className="h-full w-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
        />
      </AspectRatio>
    </div>
  );
};

export default AspectRatioVideo;
