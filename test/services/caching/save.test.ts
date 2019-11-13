import { deleteByKey, exists, save, findByKey } from '../../../src/services/caching'

const KEY = 'test:my-test-key'

beforeEach(async () => {
  const doesExist = await exists(KEY)
  if (doesExist) {
    await deleteByKey(KEY)
  }
})

test(`can save object in cache`, async () => {
  const organization = { name: 'My Organization', isActive: true }

  const result = await save(KEY, organization)
  expect(result).toBeTruthy()

  const savedOrganization = await findByKey(KEY)
  expect(organization.name).toBe(savedOrganization.name)
  expect(organization.isActive).toBe(!!savedOrganization.isActive)
})
