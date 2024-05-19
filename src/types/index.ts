export type RequestLine = {
    id: number,
    criteriaValue: string,
    criteriaLabel: string,
    value: string
}

export type Publication = {
    title: string,
    year: string,
    number: string,
    titleOfSource: string,
    countOfPages: string,
    pageNumbers: string,
    doi: string,
    information: string,
    url: string,
    publishingHouse: string,
    articleNumber: string,
    parallelTitle: string,
    parallelSourceTitle: string,
    country: string,
    dataStorage: string,
    registrationNumber: string,
    dateOfRegistration: string,
    placeOfRegistration: string,
    numberOfVolumes: number,
    volumeNumber: string,
    informationAboutPublication: string,
    dateIntroduction: string,
    language: string,
    rightHolder: string,
    typeId: number,
    type: Type,
    idAuthors: Author[],
    idCities: City[],
    idUniversities: University[],
    idEditors: Editor[],
    idScientificCollection: ScientificCollection[],
    id: number
  }

  export type Author = {
    name: string
  }

  export type City = {
    name: string
  }

  export type University = {
    name: string
  }

  export type Editor = {
    name: string
  }

  export type ScientificCollection = {
    title: string
  }

  export type Type = {
    name: string
  }