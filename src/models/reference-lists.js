// The lists this service owns, in its own shape. GAS reads them as
// pigs-might-fly reference data and maps them to its own items.
export const referenceLists = {
  fly: [
    { id: 'WINGS', label: 'Wings (from fg-gss-pmf)' },
    { id: 'ROCKET_PACK', label: 'Rocket pack (from fg-gss-pmf)' },
    { id: 'GLIDERS', label: 'Gliders (from fg-gss-pmf)' }
  ],
  wingspan: [
    { id: 'SHORT', label: 'Under 1 metre (from fg-gss-pmf)' },
    { id: 'MEDIUM', label: '1 to 2 metres (from fg-gss-pmf)' },
    { id: 'LONG', label: 'Over 2 metres (from fg-gss-pmf)' }
  ]
}

// A list in a different shape, so GAS's per-list output Mapping has
// something to override.
export const breeds = [
  { code: 'LARGE_WHITE', name: 'Large White (from fg-gss-pmf)' },
  { code: 'BRITISH_LANDRACE', name: 'British Landrace (from fg-gss-pmf)' },
  { code: 'BERKSHIRE', name: 'Berkshire (from fg-gss-pmf)' }
]
