import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { BsTrash3 } from 'react-icons/bs';
import { useRemoveAlbumMutation } from '../store';

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
      List of photos in the album
    </ExpandablePanel>
  );
}
export default AlbumsListItem;
