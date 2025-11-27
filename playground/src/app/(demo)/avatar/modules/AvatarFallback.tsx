import { Avatar } from 'skyroc-ui';

const AvatarFallbackDemo = () => {
  return (
    <div className="flex gap-[12px]">
      {/* 文字回退 */}
      <Avatar
        alt="User Avatar"
        fallback="CN"
        src="https://invalid-url.com/image.png"
      />

      {/* 首字母缩写 */}
      <Avatar
        alt="John Doe"
        fallback="JD"
        src="https://invalid-url.com/image.png"
      />

      {/* 图标回退 */}
      <Avatar
        alt="User Avatar"
        fallback="👤"
        src="https://invalid-url.com/image.png"
      />
    </div>
  );
};

export default AvatarFallbackDemo;
