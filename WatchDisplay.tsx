import Image from 'next/image'

export default function WatchDisplay() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="relative w-64 h-80">
        <Image
          src="/placeholder.svg?height=320&width=256"
          alt="Apple Watch"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  )
}

