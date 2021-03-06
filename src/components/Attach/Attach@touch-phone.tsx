import { withRegistry } from '@bem-react/di';

import { Attach as AttachCommon } from './Attach';
import { attachRegistry } from './Attach.registry/touch-phone';

export * from './Attach';
export const Attach = withRegistry(attachRegistry)(AttachCommon);
