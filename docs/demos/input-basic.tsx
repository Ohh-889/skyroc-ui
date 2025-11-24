const Demo = () => {
  return (
    <div className="w-full max-w-sm">
      <input
        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none"
        placeholder="请输入内容"
        type="text"
      />
    </div>
  )
}

export default Demo
