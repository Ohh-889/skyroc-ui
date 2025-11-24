import Image from 'next/image';
import type { ThemeSize } from 'skyroc-ui';
import { Avatar, Card } from 'skyroc-ui';

const skyrocUiRsc = 'https://assets.skyroc.me/asset/logo.svg';

const skyrocSrc = 'https://assets.skyroc.me/asset/logo.png';

const sizes: ThemeSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

const AvatarPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <Card
        split
        title="Default"
      >
        <div className="flex gap-[12px]">
          <Avatar
            alt="Skyroc UI"
            fallback="CN"
            src={skyrocUiRsc}
          />

          <Avatar
            alt="Skyroc UI"
            classNames={{ fallback: 'bg-foreground ' }}
            src={skyrocUiRsc}
            fallback={(
              <Image
                alt="Vercel logomark"
                className="dark:invert"
                height={20}
                src="/vercel.svg"
                width={20}
              />
            )}
          />
        </div>
      </Card>

      <Card
        split
        title="Sizes"
      >
        <div className="flex flex-wrap gap-[12px]">
          {sizes.map(size => (
            <div
              className="flex-c-center"
              key={size}
            >
              <Avatar
                alt="Skyroc UI"
                fallback="SKY"
                size={size}
                src={skyrocSrc}
              />

              <p>{size}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AvatarPage;
