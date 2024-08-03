import React, { useContext } from 'react';
import { Button, ConfigProvider, Space } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { css } from '@emotion/css';

export default function GuideCardButton() {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const rootPrefixCls = getPrefixCls();
    const linearGradientButton = css`
      &.${rootPrefixCls}-btn-primary:not([disabled]):not(.${rootPrefixCls}-btn-dangerous) {
        border-width: 0;
  
        > span {
          position: relative;
        }
  
        &::before {
          content: '';
          background: linear-gradient(135deg, #5F6D36, #A8B856);
          position: absolute;
          inset: 0;
          opacity: 1;
          transition: all 0.3s;
          border-radius: inherit;
        }
  
        &:hover::before {
          opacity: 0;
        }
      }
    `;
    return (
      <ConfigProvider
        button={{
          className: linearGradientButton,
        }}
      >
        <Space>
          <Button type="primary" size="large" icon={<AntDesignOutlined />}>
            Gradient Button
          </Button>
          {/* <Button size="large">Button</Button> */}
        </Space>
      </ConfigProvider>
    );
  };

