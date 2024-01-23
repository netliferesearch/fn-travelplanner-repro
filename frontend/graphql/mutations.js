// All mutations are defined on this file.
// See: https://www.sanity.io/docs/http-mutations

// * CRUD mutation transactions types
export const create = document => ({
  create: document,
});

export const createOrReplace = document => ({
  createOrReplace: document,
});

export const createIfNotExists = document => ({
  createIfNotExists: document,
});

export const remove = string => ({
  delete: { id: string },
});

// If multiple patches are included, then the order of execution is as follows:
// - set
// - setIfMissing
// - unset
// - inc
// - dec
// - insert
export const patch = document => ({
  patch: document,
});
