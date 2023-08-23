import React,{ useEffect,useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import { th } from '@faker-js/faker';
import { useThunk } from '../hooks/use-thunk';
import UsersListItem from './UsersListItem';
import Modal from './Modal';
import UserSearch from './UserSearch';
import { changeSearchTerm } from '../store';

function UserList() {
  // const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  // const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  // const [isCreatingUser, setIsCreatingUser] = useState(false);
  // const [creatingUserError, setCreatingUserError] = useState(null);
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });
  const [showModal,setShowModal]=useState(false);
  const [inputValue,setInputValue]=useState('');
  const [filteredUsers, setFilteredUsers] = useState([]); 
  const [searchTerm,setSearchTerm]=useState('');

  const handleModalOpen=()=>{
    setShowModal(true);
  }
  const handleModalClose = ()=>{
    setShowModal(false);
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSearchUsers = (searchValue) => {
    const filtered = data.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredUsers(filtered);
    setSearchTerm(searchValue)
  };

 

  useEffect(() => {
    // setIsLoadingUsers(true);
    // dispatch(fetchUsers())
    //   .unwrap()

    //   .catch((err) => {
    //     setLoadingUsersError(err);
    //   })
    //   .finally(() => {
    //     setIsLoadingUsers(false);
    //   });

    doFetchUsers();
  }, [doFetchUsers]);

  useEffect(() => {
    // Kullanıcıları filtrelemek için
    const filtered = data.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, data]);

  const handleUserAdd = () => {
    // setIsCreatingUser(true);
    // dispatch(addUser())
    //   .unwrap()
    //   .catch((err) => {
    //     setCreatingUserError(err);
    //   })
    //   .finally(() => setIsCreatingUser(false));

    doCreateUser(inputValue);
    setShowModal(false);
  };

  // if (isLoading) {
  //   return <Skeleton times={6} className="h-10 w-full" />;
  // }
  // if (error) {
  //   return <div>Error fetching data...</div>;
  // }

  let content;

  if (isLoadingUsers) {
    content =  <Skeleton times={6} className="h-10 w-full" />;
  }else if (loadingUsersError) 
  {
    content = <div>Error fetching data...</div>;
  }else {
      content = filteredUsers.map((user) => {
        return <UsersListItem key={user.id} user={user}/>
      });
  }


  return (
    <div>
   <UserSearch userSearchTerm={searchTerm} onSearchChange={handleSearchUsers} />

      <div className="flex flex-row justify-between m-3 items-center">
        <h1 className="m-2 text-xl">Users</h1>
       
          {/* <Button loading={isCreatingUser} onClick={handleUserAdd} success>
            + Add User
          </Button> */}

          <Button success onClick={handleModalOpen}>
            Add User
          </Button>
          <Modal open={showModal} title="Add user.." onClose={handleModalClose} inputValue={inputValue} handleInputChange={handleInputChange} handleSave={handleUserAdd}/>

        {creatingUserError && 'Error creating user...'}
      </div>
      {content}
    </div>
  );
}
export default UserList;
