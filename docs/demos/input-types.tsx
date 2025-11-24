const Demo = () => {
  const inputClass
    = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

  return (
    <div className="w-full max-w-sm space-y-4">
      <input
        className={inputClass}
        placeholder="Text"
        type="text"
      />

      <input
        className={inputClass}
        placeholder="Email"
        type="email"
      />

      <input
        className={inputClass}
        placeholder="Password"
        type="password"
      />

      <input
        className={inputClass}
        placeholder="Number"
        type="number"
      />

      <input
        className={inputClass}
        placeholder="Phone"
        type="tel"
      />
    </div>
  );
};

export default Demo;
