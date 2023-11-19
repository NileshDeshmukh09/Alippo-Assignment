import React, {  useState } from 'react'
import { Table } from 'antd';
import EditModal from '../Modal/edit_modal';
import DeleteModal from '../Modal/delete_modal';
import dataSource from '../Data/data'

const AlippoTable = () => {
    const [data, setData] = useState(dataSource);
    // console.log(data)

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: name => (name === null ? '  ---  ' : name),
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            render: age => (age === null ? '  ---  ' : age),
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
            render: city => (city === null ? '  ---  ' : city),
        },
        {
            title: 'Pincode',
            dataIndex: 'pinCode',
            key: 'pinCode',
            render: pinCode => (pinCode === null ? '  ---  ' : pinCode),
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => [
                <div className='flex space-x-4'>
                    <EditModal  isOpen={false} data={record} onDataUpdated={updatedData} />
                    <DeleteModal isOpen={false} data={record} userData={data} onDataReceived={handleDataReceived} />
                </div>
            ]
        },
    ];

   

    const updatedData = (newData) => {
        const indexToUpdate = data.findIndex((item) => item.id === newData.id);
        if (indexToUpdate !== -1) {
            const updateData = [...data];
            updateData[indexToUpdate] = { ...newData };
            setData(updateData);
        }}

        const handleDataReceived = (val) => {
            const a = val.filter((item) => (item.id !== val.id))
            setData(a);
        };

        return (
            <div className='m-10'>
                <p className='font-bold text-3xl mb-5'>AlippoTable</p>
                <Table className='bg-slate-50' dataSource={data}  columns={columns} pagination={{ pageSize: 5 }} />
            </div>
        )
    }

    export default AlippoTable;







