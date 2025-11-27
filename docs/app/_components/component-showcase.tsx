'use client';

import { useState } from 'react';
import {
  Bell,
  CheckCircle,
  Mail,
  Settings,
  Star,
  User
} from 'lucide-react';
import { Alert, Badge, Button, Input, Progress, Switch, Tooltip, TooltipProvider } from 'skyroc-ui';

// 组件预览卡片
const PreviewCard = ({
  children,
  title
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className="group border-border bg-card hover:border-primary/30 rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg">
    <div className="text-muted-foreground mb-4 flex items-center gap-2 text-xs font-medium">
      <div className="bg-primary size-1.5 rounded-full" />
      {title}
    </div>

    <div className="flex flex-wrap items-center gap-3">
      {children}
    </div>
  </div>
);

const ComponentShowcase = () => {
  const [switchChecked, setSwitchChecked] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <TooltipProvider>
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Button */}
          <PreviewCard title="Button 按钮">
            <Button
              color="primary"
            >
              Primary
            </Button>

            <Button
              color="success"
              variant="soft"
            >
              Success
            </Button>

            <Button
              color="secondary"
              variant="outline"
            >
              Outline
            </Button>
          </PreviewCard>

          {/* Button with loading */}
          <PreviewCard title="Button 加载状态">
            <Button
              color="primary"
              loading={loading}
              onClick={handleLoadingClick}
            >
              {loading ? '加载中...' : '点击加载'}
            </Button>

            <Button
              color="info"
              shape="circle"
              variant="soft"
            >
              <Settings className="size-4" />
            </Button>
          </PreviewCard>

          {/* Input */}
          <PreviewCard title="Input 输入框">
            <Input
              className="flex-1"
              placeholder="请输入内容..."
            />
          </PreviewCard>

          {/* Badge */}
          <PreviewCard title="Badge 徽章">
            <Badge
              color="primary"
            >
              New
            </Badge>

            <Badge
              color="success"
            >
              Active
            </Badge>

            <Badge
              color="warning"
              variant="soft"
            >
              Pending
            </Badge>

            <Badge
              color="destructive"
              variant="outline"
            >
              Error
            </Badge>
          </PreviewCard>

          {/* Switch */}
          <PreviewCard title="Switch 开关">
            <div className="flex items-center gap-3">
              <Switch
                checked={switchChecked}
                onCheckedChange={setSwitchChecked}
              />

              <span className="text-sm">{switchChecked ? '已启用' : '已禁用'}</span>
            </div>
          </PreviewCard>

          {/* Progress */}
          <PreviewCard title="Progress 进度条">
            <div className="w-full space-y-2">
              <Progress
                color="primary"
                value={75}
              />

              <Progress
                color="success"
                value={45}
              />
            </div>
          </PreviewCard>

          {/* Tooltip */}
          <PreviewCard title="Tooltip 提示">
            <Tooltip
              content="这是一个提示信息"
            >
              <Button
                color="secondary"
                variant="outline"
              >
                悬停查看
              </Button>
            </Tooltip>

            <Tooltip
              showArrow
              content="点击复制"
            >
              <Button
                shape="circle"
                variant="ghost"
              >
                <Mail className="size-4" />
              </Button>
            </Tooltip>
          </PreviewCard>

          {/* Alert */}
          <PreviewCard title="Alert 警告">
            <Alert
              className="w-full"
              color="info"
              title="提示信息"
              variant="soft"
            />
          </PreviewCard>

          {/* Icon Buttons */}
          <PreviewCard title="Icon 图标按钮">
            <Button
              color="primary"
              shape="circle"
            >
              <User className="size-4" />
            </Button>

            <Button
              color="success"
              shape="circle"
              variant="soft"
            >
              <CheckCircle className="size-4" />
            </Button>

            <Button
              color="warning"
              shape="circle"
              variant="outline"
            >
              <Star className="size-4" />
            </Button>

            <Button
              color="info"
              shape="circle"
              variant="ghost"
            >
              <Bell className="size-4" />
            </Button>
          </PreviewCard>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default ComponentShowcase;
