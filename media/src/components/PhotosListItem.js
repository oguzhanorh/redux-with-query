import { useRemovePhotoMutation } from '../store';
import { BsTrash3 } from 'react-icons/bs';

function PhotosListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div onClick={handleRemovePhoto} className="relative m-2 cursor-pointer">
      <img className="h-20 w-20" src={photo.url} alt="random pic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <BsTrash3 className="text-3xl" />
      </div>
    </div>
  );
}
export default PhotosListItem;
