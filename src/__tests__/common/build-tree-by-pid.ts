import { buildTreeByPid } from '@/common/build-tree-by-pid'

import {
	invalidPidArr,
	pidArr,
	pidArrWithChildrenLengthNotZero,
	pidArrWithNoChildren,
	pidArrWithNoId,
	pidArrWithNoParentId,
	pidArrWithNoText
} from '@/mock/common/pid-arr'
import { treeArr } from '@/mock/common/tree-arr'

import type { Tree } from '@/types/Tree'

describe('build tree by pid', () => {
	test('build tree with valid argument', () => {
		const tree = buildTreeByPid(pidArr as Tree)
		expect(JSON.stringify(tree)).toBe(JSON.stringify(treeArr))
	})

	test('build tree with invalid argument', () => {
		expect(() => buildTreeByPid(invalidPidArr as unknown as Tree)).toThrow(
			'入参必须是数组'
		)
	})

	test('build tree with children length not equal to zero', () => {
		expect(() =>
			buildTreeByPid(pidArrWithChildrenLengthNotZero as unknown as Tree)
		).toThrow('扁平数组children必须为空数组')
	})

	test('build tree with no children', () => {
		expect(() =>
			buildTreeByPid(pidArrWithNoChildren as unknown as Tree)
		).toThrow('入参必须是数组')
	})

	test('build tree with no id', () => {
		expect(() => buildTreeByPid(pidArrWithNoId as unknown as Tree)).toThrow(
			'元素必须有id'
		)
	})

	test('build tree with no parent id', () => {
		expect(() =>
			buildTreeByPid(pidArrWithNoParentId as unknown as Tree)
		).toThrow('元素必须有parentId')
	})

	test('build tree with no text', () => {
		expect(() => buildTreeByPid(pidArrWithNoText as unknown as Tree)).toThrow(
			'元素必须有text'
		)
	})
})
