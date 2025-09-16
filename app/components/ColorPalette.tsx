'use client'

type ColorPaletteProps = {
  colors: string[]
}

export default function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <div className='mb-32 flex justify-center gap-0 py-10'>
      {colors.map((color, i) => (
        <div
          key={i}
          className='h-16 w-24 shadow-md'
          style={{ backgroundColor: `var(--color-${color})` }}
          title={color}
        />
      ))}
    </div>
  )
}
