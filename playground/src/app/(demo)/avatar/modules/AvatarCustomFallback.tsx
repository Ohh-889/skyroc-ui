import Image from 'next/image';
import { Avatar } from 'skyroc-ui';
import { User } from 'lucide-react';

const AvatarCustomFallback = () => {
  return (
    <div className="flex gap-[12px]">
      {/* 使用 lucide 图标 */}
      <Avatar
        alt="User Avatar"
        fallback={<User className="size-5" />}
        src="https://invalid-url.com/image.png"
      />

      {/* 使用自定义图片 */}
      <Avatar
        alt="User Avatar"
        classNames={{ fallback: 'bg-foreground' }}
        src="https://invalid-url.com/image.png"
        fallback={(
          <Image
            alt="Fallback"
            className="dark:invert"
            height={20}
            src="/vercel.svg"
            width={20}
          />
        )}
      />
    </div>
  );
};

export default AvatarCustomFallback;
