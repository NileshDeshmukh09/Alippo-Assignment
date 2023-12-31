import React, { useState } from 'react';
import { Button, Modal } from 'antd';
// import dataSource from '../Data/data';

const DeleteModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(props.isOpen);
  const [data, setData] = useState(props.userData);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setData(removeByAttr(data, 'id', props.data.id))
    props.onDataReceived(data);
    console.log(data)

  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  var removeByAttr = function (arr, attr, value) {
    var i = arr.length;
    while (i--) {
      if (arr[i]
        && arr[i].hasOwnProperty(attr)
        && (arguments.length > 2 && arr[i][attr] === value)) {

        arr.splice(i, 1);

      }
    }
    return arr;
  }

  return (
    <>
      <Button onClick={showModal}>
        Delete
      </Button>
      <Modal title={"DELETE USER " + props.data?.id} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ className: "bg-red-600 hover:bg-green-600 " }}>

        <div className='flex justify-evenly m-2 p-3 bg-slate-50'>

          <div className='flex justify-around w-[40%]'>
            <span className='font-bold' >Name : </span>
            <p> {props.data?.name}</p>
          </div>
          <div className='flex justify-around w-[40%]'>
            <span className='font-bold'>Age : </span>
            <p> {props.data?.age}</p>
          </div>

        </div>
        <div className="flex justify-evenly m-2 p-3 bg-slate-50">

          <div className='flex justify-around w-[40%]'>
            <span className='font-bold'>Pincode : </span>
            <p> {props.data?.pinCode}</p>
          </div>

          <div className='flex justify-around w-[40%]'>
            <span className='font-bold'>City : </span>
            <p> {props.data?.city}</p>
          </div>

        </div>
      </Modal>
    </>
  );
};
export default DeleteModal;