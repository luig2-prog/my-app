import Image from 'next/image'
import Link from 'next/link'
import img_avatar_not_found from '@/public/avatar-not-found.svg'

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-gray-50 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="w-full lg:w-1/2 mx-8">
          <div className="text-7xl text-purple-700 font-dark font-extrabold mb-8"> 404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>

          <Link href="/dashboard" className="px-5 inline py-3 text-sm font-medium leading-5 
            shadow-2xl text-white transition-all duration-400 border border-transparent 
            rounded-lg focus:outline-none bg-purple-700 active:bg-red-600 hover:bg-purple-950">
            back to homepage
          </Link>
        </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          <Image src={img_avatar_not_found} className="" alt="Page not found"
          />
        </div>

      </div>
    </div>
  )
}