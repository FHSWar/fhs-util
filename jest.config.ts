// import { pathsToModuleNameMapper } from 'ts-jest'

import type { Config } from 'jest'

export default async (): Promise<Config> => {
	return {
		preset: 'ts-jest',
		testEnvironment: 'node',
		roots: ['<rootDir>/src'],
		testMatch: [
			'**/__tests__/**/*.+(ts|tsx|js)',
			'**/?(*.)+(spec|test).+(ts|tsx|js)'
		],
		transform: {
			'^.+\\.(ts|tsx)$': 'ts-jest'
		},
		collectCoverage: true,
		coverageDirectory: 'coverage',
		coverageProvider: 'v8',
		moduleNameMapper: {
			"@/(.*)": "<rootDir>/src/$1"
		},
		verbose: true
	}
}
