export default function MarqueeTicker() {
  const items = ['IDEAS', 'PEOPLE', 'PRODUCTS', 'INNOVATION', 'COMMUNITY'];

  return (
    <div className="relative flex h-12 w-full overflow-hidden border-y border-[#deded8] bg-[#f7f7f4]">
      <div className="flex shrink-0 items-center gap-6 animate-[marquee_25s_linear_infinite] whitespace-nowrap font-mono text-[11px] font-semibold tracking-[2px] text-[#111111]">
        {[...items, ...items, ...items, ...items].map((text, i) => (
          <span key={i} className="inline-flex items-center gap-6">
            <span>{text}</span>
            <span className="text-[10px] text-[#7665ff]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
