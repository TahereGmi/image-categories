export interface ICategory  {
  id: number,
  name: string
}
  
export interface ICategoryImage {
  id: string,
  url: string
}

export interface ICategoryList {
  result: ICategory[],
  loading: boolean,
  loaded: boolean,
  error: null | unknown
}

export interface ICategoryImageList {
  result: ICategoryImage[],
  showMenu: boolean,
  selectedCategoryId: number | string | null,
  loading: boolean,
  loaded: boolean,
  error: null | unknown
}