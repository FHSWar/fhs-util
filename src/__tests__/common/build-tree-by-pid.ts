import { buildTreeByPid } from '@/common/build-tree-by-pid'

import { pidArr } from '@/mock/common/pid-arr'
import { treeArr } from '@/mock/common/tree-arr'

test('buildTreeByPid', () => {
	expect(JSON.stringify(buildTreeByPid(pidArr))).toBe(JSON.stringify(treeArr))
})
