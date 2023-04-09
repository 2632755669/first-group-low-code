const publishStatus = new Map<boolean, string>();
publishStatus.set(true, '已发布').set(false, '未发布');

const endpointTypeList = {
  PC: 'Web端',
  M: '移动端'
};

const publishOrNotTagEnum = {
  true: {
    text: '已发布',
    status: 'Success'
  },
  false: {
    text: '未发布',
    status: 'Warning'
  }
};

export { publishStatus, publishOrNotTagEnum, endpointTypeList };
