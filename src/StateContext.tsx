import { Component, createContext, createEffect, createSignal, useContext } from 'solid-js'
import { createStore, DeepReadonly } from 'solid-js/store'
import { Site, SiteOp } from './data'

const initialSiteState: Site = {
  states: {
    WY: {
      counties: {
        Somecounty: {
          cities: {
            Somecity: {
              population: 10
            }
          }
        }
      }
    }
  }
}

const initialOp: SiteOp = {
  addState: () => {
    console.info('not implemented, state')
  },
  addCity: () => {},
  addCounty: () => {},
  increment: () => {}
}

const StateContext = createContext<[DeepReadonly<Site>, SiteOp]>([initialSiteState, initialOp])

export const StateContextProvider: Component<{ initial?: Site }> = (props) => {
  const [doLog, setLog] = createSignal(false)

  const log = () => setLog(true)
  const [store, setStore] = createStore<Site>(props.initial ?? initialSiteState)

  createEffect(() => {
    if (doLog()) {
      console.info(store)
      setLog(false)
    }
  })

  const addState = (state: string): void =>
    setStore('states', (states) => ({ ...states, [state]: { counties: {} } }))
  const addCounty = (state: string, county: string): void =>
    setStore('states', state, 'counties', (counties) => ({ ...counties, [county]: { cities: {} } }))
  const addCity = (state: string, county: string, city: string): void =>
    setStore('states', state, 'counties', county, 'cities', (cities) => ({
      ...cities,
      [city]: { population: 0 }
    }))
  const increment = (state: string, county: string, city: string): void =>
    setStore('states', state, 'counties', county, 'cities', city, 'population', (pop) => pop + 1)

  const wrap1 =
    <A, R>(f: (a: A) => R, m: string) =>
    (a: A): R => {
      const res = f(a)
      console.info(`${m}: ${a}`)
      log()
      return res
    }
  const wrap2 =
    <A, B, R>(f: (a: A, b: B) => R, m: string) =>
    (a: A, b: B): R => {
      const res = f(a, b)
      console.info(`${m}: ${a}`)
      log()
      return res
    }
  const wrap3 =
    <A, B, C, R>(f: (a: A, b: B, c: C) => R, m: string) =>
    (a: A, b: B, c: C): R => {
      const res = f(a, b, c)
      console.info(`${m}: ${a}`)
      log()
      return res
    }

  const siteOp = {
    addState: wrap1(addState, 'Add State'),
    addCounty: wrap2(addCounty, 'Add county'),
    addCity: wrap3(addCity, 'Add city'),
    increment: wrap3(increment, 'Add resident')
  }

  return <StateContext.Provider value={[store, siteOp]}>{props.children}</StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext)
