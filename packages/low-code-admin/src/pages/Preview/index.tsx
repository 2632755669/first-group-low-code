import { Tabs } from 'antd';
import { FundProjectionScreenOutlined, MobileOutlined } from '@ant-design/icons';
import { useSearchParam } from 'react-use';

import './index.less';

enum DevKeyEnum {
  mo = 'mo',
  pc = 'pc',
}

const Preview = () => {
  const previewUrl = useSearchParam('previewUrl');
  const PcIframe = (
    <div className="smt-preview-pc">
      <iframe src={previewUrl || ''}></iframe>
    </div>
  );
  const MoIframe = (
    <div className="smt-preview-mo">
      <div className="smt-preview-mo-container">
        <iframe src={previewUrl || ''}></iframe>
      </div>
    </div>
  );

  const items = [
    {
      label: (
        <span>
          <FundProjectionScreenOutlined />
          PC端
        </span>
      ),
      key: DevKeyEnum.pc,
      children: PcIframe
    },
    {
      label: (
        <span>
          <MobileOutlined />
          手机端
        </span>
      ),
      key: DevKeyEnum.mo,
      children: MoIframe
    }
  ];

  return (
    <div className="smt-preview-box">
      <Tabs defaultActiveKey={DevKeyEnum.pc} items={items} centered />
    </div>
  );
};

export default Preview;
