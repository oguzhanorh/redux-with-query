import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { BsTrash3 } from 'react-icons/bs';
import { useRemoveAlbumMutation } from '../store';
import PhotosList from './PhotosList';

function AlbumsListItem({ album }) {
  //result mutation hakkında bilgi verir
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-2"
        loading={results.isLoading}
        onClick={handleRemoveAlbum}
      >
        <BsTrash3 />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
}
export default AlbumsListItem;
