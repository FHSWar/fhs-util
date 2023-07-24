export type Tree = Array<{
	id: string
	parentId: string
	text: string
	children: Tree
}>
