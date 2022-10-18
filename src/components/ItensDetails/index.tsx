import Image from 'next/image'

interface ItensDetailsProps {
  image: string
  text: string
}

export function ItensDetails({ image, text }: ItensDetailsProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 max-w-md">
      <div>
        <Image src={image} height={60} width={60} />
      </div>
      <p className="text-sm font-semibold text-center md:text-left">{text}</p>
    </div>
  )
}
