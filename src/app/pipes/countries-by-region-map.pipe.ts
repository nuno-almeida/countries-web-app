import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';
import { Continent } from '../models/enums';

@Pipe({
  name: 'countriesByRegionMap',
  standalone: true
})
export class CountriesByRegionMapPipe implements PipeTransform {

  transform(countries: Country[]): { region: string, countries: Country[] }[] {

    const regions = Array.from(new Set(countries.map(country => country.region)));

    const result: { region: string, countries: Country[] }[] = [];

    for (const continent of Object.keys(Continent)) {
      if (regions.includes(continent)) {
        result.push({
          region: continent,
          countries: countries.filter(country => country.region === continent)
        })
      }
    }

    return result;
  }

}
