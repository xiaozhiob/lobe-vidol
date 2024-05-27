import { ActionIconGroup, useChatListActionsBar } from '@lobehub/ui';
import { ActionIconGroupItems } from '@lobehub/ui/es/ActionIconGroup';
import { Play } from 'lucide-react';
import { memo } from 'react';

import type { RenderAction } from '@/features/ChatItem/type';

const AssistantActionsBar: RenderAction = ({ onActionClick, id }) => {
  const { copy, regenerate, divider, del, edit } = useChatListActionsBar({
    copy: '复制',
    delete: '删除',
    edit: '编辑',
    regenerate: '重新生成',
  });

  if (id === 'default') return;

  const tts = {
    icon: Play,
    key: 'tts',
    label: '语音合成',
  } as ActionIconGroupItems;

  return (
    <ActionIconGroup
      dropdownMenu={[tts, regenerate, copy, divider, del]}
      items={[regenerate, edit]}
      onActionClick={onActionClick}
      type="ghost"
    />
  );
};

export default memo(AssistantActionsBar);
