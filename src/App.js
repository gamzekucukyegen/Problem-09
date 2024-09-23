import files from './files'
import PhotoListItem from './photoListItems'

function PhotoList() {
  return (
    <ul
      role='list'
      className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'
    >
      {files.map((file) => (
        <PhotoListItem
        key={file.source}
          source={file.source}
          title={file.title}
          size={file.size}/>
      ))}
    </ul>
  )
}

export default function App() {
  return (
    <div className='bg-purple-100'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <PhotoList />
      </div>
    </div>
  )
}
