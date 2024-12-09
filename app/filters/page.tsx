import { getCafes } from '@/libs/cafe-utils'
import { FilteredCafes } from '@/components/filtered-cafes'

export default async function FiltersPage() {
  const cafesData = await getCafes()
  const cities = Object.keys(cafesData).sort()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find Your Perfect Workspace</h1>
      <FilteredCafes initialCafesData={cafesData} initialCities={cities} />
    </div>
  )
}
