

interface City {
  population: number
}

interface County { 
  cities: {[city: string]: City}
}

interface State {
  counties: {[county: string]: County}
}

export interface Site {
  states: {[state: string]: State}
}

export interface SiteOp {
  addState: (state: string) => void
  addCounty: (state: string, county: string) => void
  addCity: (state: string, county: string, city: string) => void
  increment: (state: string, county: string, city: string) => void
}
