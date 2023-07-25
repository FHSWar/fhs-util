import type { Tree } from '@/types/Tree'

export function buildTreeByPid(list: Tree): Tree {
	const roots: Tree = []
	const map: Record<string, number> = {}

	// guard
	if (!Array.isArray(list)) throw new Error('入参必须是数组')
	list.every(({ children, id, parentId, text }) => {
		if (typeof id !== 'string') throw new Error('元素必须有id')
		if (typeof parentId !== 'string' && parentId !== null)
			throw new Error('元素必须有parentId')
		if (typeof text !== 'string') throw new Error('元素必须有text')
		if (!Array.isArray(children)) throw new Error('入参必须是数组')
		if (children.length !== 0) throw new Error('扁平数组children必须为空数组')

		return true
	})

	// 这个遍历完就得到 map = {id: idItem,...}
	list.forEach((_, index) => {
		map[list[index].id] = index
	})

	list.forEach((node) => {
		// parentId 为null就在第一层
		if (node.parentId === null) roots.push(node)
		// if you have dangling branches check that map[node.parentId] exists
		else list[map[node.parentId]].children.push(node)
	})

	return roots
}
