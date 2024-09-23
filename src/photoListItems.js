import Image from "next/image";
import files from "./files";
export default function PhotoListItem ({source,title,size}){
return (
<li key={source} className='relative'>
<div className='group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
  <Image
    src={source}
    alt=''
    className='pointer-events-none object-cover group-hover:opacity-75'
    width={500}
    height={500}
  />
  <button
    type='button'
    className='absolute inset-0 focus:outline-none'
  >
    <span className='sr-only'>
      Ayrıntıları görüntüle {title}
    </span>
  </button>
</div>
<p className='pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900'>
  {title}
</p>
<p className='pointer-events-none block text-sm font-medium text-gray-500'>
  {size}
</p>
</li>
)
}