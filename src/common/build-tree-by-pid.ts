export function buildTreeByPid(list: string | any[]): any {
	const roots: any = []
	const map: any = {}
	const len = list.length
	let node, i
	// 这个 for 完就得到 map = {id: idItem,...}
	for (i = 0; i < len; i++) {
		map[list[i].id] = i // initialize the map
		list[i].children = [] // initialize the children
	}

	for (i = 0; i < len; i++) {
		node = list[i]
		if (node.parentId !== '0') {
			// if you have dangling branches check that map[node.parentId] exists
			list[map[node.parentId]].children.push(node)
		} else {
			// parentId 为零就在第一层
			roots.push(node)
		}
	}
	return roots
}
