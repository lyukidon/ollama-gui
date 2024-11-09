import { generateChatCompletion } from '../../utils/api';

// const ListTitle = () => {
//   return (
//     <div className=''>

//     </div>
//   )
// }

const ListContent = () => {
  const handleClick = () => {
    generateChatCompletion("안녕하세요")
  }

  return(
    <button 
      className='w-full h-[40px] px-[20px]
        bg-system-darkgrey
        text-system-white
        rounded-[30px]
        truncate overflow-hidden
        hover:bg-[#3d3a3a]
        '
      onClick={handleClick}
      >
      안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
    </button>
  )
}


const List = () => {
  return (
    <div className='flex flex-col w-[250px] h-screen items-center px-[20px] py-[20px] gap-[15px] bg-system-darkgrey '>
      <ListContent />
      <ListContent />
      <ListContent />
      <ListContent />
    </div>
  );
}

export default List;