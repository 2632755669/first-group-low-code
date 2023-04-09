import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const ConfirmModal = (title: string, content: string, onOk: () => void | Promise<void>) => {
  Modal.confirm({
    title: title || '温馨提示',
    icon: <ExclamationCircleOutlined />,
    content: content || '确认删除吗',
    okText: '确认',
    cancelText: '取消',
    onOk
  });
};

export default ConfirmModal;
