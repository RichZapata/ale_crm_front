import { Button, Modal, Space, Typography } from 'antd'
import React, { useState } from 'react';
import UsersTable from '../../../components/UserTables';



const UsuariosCollections:React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      setModalText('Content of the modal')
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <Space size={'large'} align={'start'} direction={'vertical'} style={{width: '100%'}}>
        <Typography.Title>Usuarios</Typography.Title>
              
        <Button type="primary" onClick={()=>setOpen(true)} style={{ marginBottom: 16 }}>
          Add a row
        </Button>
        
            <UsersTable />

            <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
        
    </Space>
  )
}

export default UsuariosCollections