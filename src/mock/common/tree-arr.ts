export const treeArr = [
	{
		id: '12',
		parentId: '0',
		text: 'Man',
		level: '1',
		children: [
			{
				id: '6',
				parentId: '12',
				text: 'Boy',
				level: '2',
				children: [
					{
						id: '888',
						parentId: '6',
						text: 'Boy',
						level: '3',
						children: [
							{
								id: '999',
								parentId: '888',
								text: 'Gold',
								children: [
									{
										id: '666',
										parentId: '999',
										text: 'Diamond',
										children: []
									}
								]
							}
						]
					}
				]
			},
			{
				id: '7',
				parentId: '12',
				text: 'Other',
				level: '2',
				children: []
			}
		]
	},
	{
		id: '9',
		parentId: '0',
		text: 'Woman',
		level: '1',
		children: [
			{
				id: '11',
				parentId: '9',
				text: 'Girl',
				level: '2',
				children: []
			}
		]
	}
]
