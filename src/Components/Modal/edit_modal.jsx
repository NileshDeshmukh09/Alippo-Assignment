import React, { useState, useEffect } from 'react';
import { Button, Modal, Input } from 'antd';

const EditModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(props.isOpen);
  const [editedData, setEditedData] = useState({ ...props.data });

  useEffect(() => {
    setEditedData({ ...props.data });
  }, [props.data]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    props.onDataUpdated(editedData);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e, fieldName) => {
    setEditedData({
      ...editedData,
      [fieldName]: e.target.value,
    });
  };

  return (
    <>
      <Button  onClick={showModal}>
        Edit 
      </Button>
      <Modal title={"EDIT USER " + props.data.id + " Info"} className='p-2' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ className: 'bg-green-500 text-white' }}>

        <div className='flex flex-col space-y-5 py-2'>
          <div className='flex justify-between'>
            <div className="flex space-x-4">
              <label htmlFor="name" className='font-bold'>Name : </label>
              <Input className='border rounded-lg h-8 w-[160px]' name='name' onChange={(e) => handleInputChange(e, 'name')} type="text" value={editedData.name} />
            </div>
            <div className="flex space-x-4">
              <label htmlFor="age" className='font-bold'>Age : </label>
              <Input className='border rounded-lg h-8 w-[160px]' name='age' onChange={(e) => handleInputChange(e, 'age')} type="text" value={editedData.age} />
            </div>
          </div>
          <div className="flex justify-between" >
            <div className="flex space-x-4">
              <label htmlFor="pincode" className='font-bold'>Pincode : </label>
              <Input className='border rounded-lg h-8 w-[160px]' name='pincode' onChange={(e) => handleInputChange(e, 'pinCode')} type="text" value={editedData.pinCode} />
            </div>
            <div className="flex space-x-4">
              <label htmlFor="city" className='font-bold'>City : </label>
              <Input className='border rounded-lg h-8 w-[160px]' name='city' onChange={(e) => handleInputChange(e, 'city')} type="text" value={editedData.city} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditModal;
