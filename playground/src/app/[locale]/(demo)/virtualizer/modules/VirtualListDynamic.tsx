'use client';
import { VirtualList } from 'skyroc-ui';
import { useGenerateSentences } from './useWorkerVirtualizer';

const VirtualListDynamic = () => {
  const sentences = useGenerateSentences(10000);

  // 🔥 Worker 还没生成完之前不渲染虚拟列表
  if (!sentences) {
    return <div style={{ padding: 20 }}>正在生成数据，请稍候...</div>;
  }

  return (
    <div className="max:d:flex-col  flex gap-4">
      <VirtualList
        dynamic
        data={sentences}
        height={300}
        itemSize={40}
        width={300}
        renderItem={({ index }) => (
          <div
            className={index % 2 ? '' : 'bg-[#e6e4dc]'}
            style={{ padding: '10px 0' }}
          >
            <div>
              Row
              {index}
            </div>

            <div>{sentences[index]}</div>
          </div>
        )}
      />

      <VirtualList
        dynamic
        horizontal
        data={sentences}
        height={300}
        itemSize={40}
        width={375}
        renderItem={({ index }) => (
          <div style={{ width: sentences[index].length }}>
            <div>
              Column
              {index}
            </div>

            <div>{sentences[index]}</div>
          </div>
        )}
      />
    </div>
  );
};

export default VirtualListDynamic;
