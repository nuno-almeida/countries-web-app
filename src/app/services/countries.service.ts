import { Country } from './../models/country';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { first, forkJoin, of, tap } from 'rxjs';
import { Continent } from '../models/enums';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private http = inject(HttpClient);

  loading = signal<boolean>(true);

  countries = signal<Map<string, Country>>(new Map());

  countriesIdsByRegion = signal<Map<string, string[]>>(new Map());

  constructor() {
    this.loadCountries();
  }

  private getWishedSaved(): string[] {
    const localItem = localStorage.getItem('wish');
    if (localItem) {
      return localItem.split(',');
    }

    return [];
  }

  private getVisitedSaved(): string[] {
    const localItem = localStorage.getItem('visited');
    if (localItem) {
      return localItem.split(',');
    }

    return [];
  }

  private setVisited(country: Country, isVisited: boolean) {
    country.isInVisitedList = isVisited;
  }

  private setWished(country: Country, isWished: boolean) {
    country.isInWishList = isWished;
  }

  private loadCountries() {
    forkJoin([
      of(this.getVisitedSaved()),
      of(this.getWishedSaved()),
      this.http.get<Country[]>('https://restcountries.com/v3.1/all')
    ]).pipe(
      first(),
      tap(([visited, wished, countries]) => {

        const countriesIdsByRegionMap = new Map<string, string[]>();
        for (const region of Object.keys(Continent)) {
          countriesIdsByRegionMap.set(
            region,
            countries.filter((country) => country.region.toLowerCase() === region).map(country => country.cca3)
          );
        }

        const countriesMap = new Map<string, Country>();
        for (const country of countries) {
          country.id = country.cca3;
          this.setVisited(country, visited.includes(country.id));
          this.setWished(country, wished.includes(country.id));
          countriesMap.set(country.id, country);
        }

        this.countries.set(countriesMap);
        this.countriesIdsByRegion.set(countriesIdsByRegionMap);
        this.loading.set(false);
      })
    ).subscribe();
  }

  updateVisited(countryId: string, isVisited: boolean) {
    let visited = this.getVisitedSaved();

    if (isVisited) {
      visited.push(countryId);
    } else {
      visited = visited.filter(elem => elem !== countryId);
    }

    localStorage.setItem('visited', visited.join(','));

    // save signals store
    const countriesMap = this.countries();
    this.setVisited(countriesMap.get(countryId)!, isVisited);
    this.countries.set(countriesMap);
  }

  updateWished(countryId: string, isWished: boolean) {
    let wished = this.getWishedSaved();

    if (isWished) {
      wished.push(countryId);
    } else {
      wished = wished.filter(elem => elem !== countryId);
    }

    localStorage.setItem('wish', wished.join(','));

    // save signals store
    const countriesMap = this.countries();
    this.setWished(countriesMap.get(countryId)!, isWished);
    this.countries.set(countriesMap);
  }
}
