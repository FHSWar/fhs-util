export const treeArr = [
	{
		id: '1',
		parentId: null,
		text: 'Man',
		children: [{ id: '3', parentId: '1', text: 'Boy', children: [] }]
	},
	{
		id: '2',
		parentId: null,
		text: 'Boy',
		children: [
			{
				id: '4',
				parentId: '2',
				text: 'Gold',
				children: [
					{
						id: '6',
						parentId: '4',
						text: 'Other',
						children: [
							{
								id: '7',
								parentId: '6',
								text: 'Woman',
								children: [
									{ id: '8', parentId: '7', text: 'Girl', children: [] }
								]
							}
						]
					}
				]
			},
			{ id: '5', parentId: '2', text: 'Diamond', children: [] }
		]
	}
]
