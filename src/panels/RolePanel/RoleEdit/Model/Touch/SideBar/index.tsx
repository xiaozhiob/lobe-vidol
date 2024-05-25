import { List } from 'antd';
import { createStyles } from 'antd-style';
import classNames from 'classnames';

import { TouchAreaEnum } from '@/types/touch';

const useStyles = createStyles(({ css, token }) => ({
  active: css`
    background-color: ${token.controlItemBgActiveHover};
  `,
  list: css`
    width: 240px;
    border-right: 1px solid ${token.colorBorder};
  `,
  listItem: css`
    &:hover {
      cursor: pointer;
    }
  `,
}));

interface IndexProps {
  currentTouchArea: TouchAreaEnum;
  setCurrentTouchArea: (area: TouchAreaEnum) => void;
}

const Index = (props: IndexProps) => {
  const { styles } = useStyles();
  const { currentTouchArea, setCurrentTouchArea } = props;

  const data = [
    { label: '头部', value: TouchAreaEnum.Head },
    { label: '手臂', value: TouchAreaEnum.Arm },
    { label: '腿部', value: TouchAreaEnum.Leg },
    { label: '胸部', value: TouchAreaEnum.Chest },
    { label: '腹部', value: TouchAreaEnum.Belly },
  ];

  return (
    <List
      className={styles.list}
      dataSource={data}
      header={<div style={{ padding: 12 }}>触摸区域列表</div>}
      renderItem={(item) => (
        <List.Item
          className={classNames(styles.listItem, {
            [styles.active]: item.value === currentTouchArea,
          })}
          onClick={() => setCurrentTouchArea(item.value)}
          style={{ padding: 12 }}
        >
          {item.label}
        </List.Item>
      )}
    />
  );
};

export default Index;
