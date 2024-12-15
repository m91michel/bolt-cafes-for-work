import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Wifi, Volume2, Armchair } from 'lucide-react';
import Link from 'next/link';
import { Cafe } from '@/libs/types';
import { AmbianceBadge, SeatingComfortBadge, WifiQualitityBadge } from './cafe-badges';

interface CafeAmenitiesProps {
  cafe: Cafe;
}

export function CafeAmenities({ cafe }: CafeAmenitiesProps) {
  return (
    <>
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Ausstattung</h2>
        
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Wifi className="h-5 w-5 text-muted-foreground" />
            <div>
              <h3 className="font-medium">WiFi Qualität</h3>
              <WifiQualitityBadge value={cafe.wifi_qualitity} />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Armchair className="h-5 w-5 text-muted-foreground" />
            
            <div>
              <h3 className="font-medium">Sitzkomfort</h3>
              <SeatingComfortBadge value={cafe.seating_comfort} />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Volume2 className="h-5 w-5 text-muted-foreground" />
            <div>
              <h3 className="font-medium">Ambiente</h3>
              <AmbianceBadge value={cafe.ambiance} />
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-6 flex flex-col xl:flex-row gap-6">
        <Button asChild variant="outline" className="w-full xl:w-1/2">
          <Link href={`/cities/${cafe.city_slug}`}>
            Alle Cafes in {cafe.city}
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full xl:w-1/2">
          <Link href={`/cities`}>
            Alle Städte
          </Link>
        </Button>
      </div>
    </>
  );
}